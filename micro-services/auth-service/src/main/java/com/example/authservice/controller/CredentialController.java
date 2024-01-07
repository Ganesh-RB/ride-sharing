package com.example.authservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.authservice.model.Credential;
import com.example.authservice.repository.CredentialRepository;
import com.example.authservice.service.CredentialService;

@RestController
@RequestMapping("/auth")
public class CredentialController {

    @Autowired
    private CredentialRepository credentialRepository;

    @Autowired
    private CredentialService credentialService;

    @PostMapping("/login")
    public String login(@RequestBody Credential credential) {
        return credentialService.login(credential);
    }
    
    @PostMapping("/signup")
    public String signup(@RequestBody Credential credential) {
        return credentialService.signup(credential);
    }

    
}
