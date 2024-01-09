package com.example.authservice.service;

import java.util.List;

import com.example.authservice.dto.CredentialDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.stereotype.Service;

import com.example.authservice.model.Credential;
import com.example.authservice.repository.CredentialRepository;

@Service
public class CredentialService {
    @Autowired
    private CredentialRepository credentialRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserDetailsService login(Credential credential) {
        CredentialDetails credentialDetails = new CredentialDetails(credential);
        return new InMemoryUserDetailsManager(credentialDetails);
    }

    public Credential signup(Credential credential) {
        Credential encodedCredential = new Credential();
        encodedCredential.setUsername(credential.getUsername());
        encodedCredential.setPassword(this.passwordEncoder.encode(credential.getPassword()));
        return credentialRepository.save(encodedCredential);
    }
}
