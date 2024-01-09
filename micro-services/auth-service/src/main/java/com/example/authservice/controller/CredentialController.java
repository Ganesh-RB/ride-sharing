package com.example.authservice.controller;

import com.example.authservice.service.UserService;
import org.apache.catalina.Authenticator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import com.example.authservice.model.Credential;
import com.example.authservice.repository.CredentialRepository;
import com.example.authservice.service.CredentialService;

@RestController
public class CredentialController {

    @Autowired
    private CredentialRepository credentialRepository;

    @Autowired
    private CredentialService credentialService;
    private Authenticator authenticationManager;

    @GetMapping("/")
    public String greetings(){
        return "Greetings Home Page";
    }

    @PostMapping("/login")
    public UserDetailsService login(@RequestBody Credential credential) {
        System.out.println("User login with credential: " + credential.toString());
        return credentialService.login(credential);
    }

//    @PostMapping("/login")
//    public ResponseEntity<Void> login(@RequestBody Credential credential) {
//        Authentication authenticationRequest =
//                UsernamePasswordAuthenticationToken.unauthenticated(credential.getUsername(), credential.getPassword());
//        Authentication authenticationResponse =
//                this.authenticationManager.authenticate(authenticationRequest);
//    }
//
    @PostMapping("/signup")
    public Credential signup(@RequestBody Credential credential) {
        System.out.println("User signup with credential: " + credential.toString());
        return credentialService.signup(credential);
    }

    
}
