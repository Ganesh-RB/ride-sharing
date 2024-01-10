package com.example.authservice.controller;

import com.example.authservice.dto.CredentialDetails;
import com.example.authservice.service.UserService;
import jakarta.servlet.http.HttpSession;
import lombok.AllArgsConstructor;
import org.apache.catalina.Authenticator;
import org.apache.catalina.connector.Request;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import com.example.authservice.model.Credential;
import com.example.authservice.repository.CredentialRepository;
import com.example.authservice.service.CredentialService;
import org.springframework.web.context.request.RequestContextHolder;

import java.util.Map;

@RestController
@AllArgsConstructor
public class CredentialController {

    @Autowired
    private CredentialRepository credentialRepository;

    @Autowired
    private CredentialService credentialService;

    @Autowired
    private final AuthenticationManager authenticationManager;

    @Autowired
    private HttpSession session;



    private static final Logger logger = LoggerFactory.getLogger(CredentialController.class);


    @GetMapping("/")
    public String greetings(){
        return "Greetings Home Page";
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Credential credential) {
        System.out.println("User login with credential: " + credential.toString());
        Authentication authenticationRequest =
                UsernamePasswordAuthenticationToken.unauthenticated(credential.getUsername(), credential.getPassword());
        Authentication authenticationResponse =
                this.authenticationManager.authenticate(authenticationRequest);
        return credentialService.createLoginInfo(authenticationResponse);
    }

    @PostMapping("/signup")
    public Credential signup(@RequestBody Credential credential) {
        System.out.println("User signup with credential: " + credential.toString());
        return credentialService.signup(credential);
    }

    
}
