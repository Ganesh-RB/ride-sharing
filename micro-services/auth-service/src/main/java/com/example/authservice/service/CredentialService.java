package com.example.authservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.authservice.model.Credential;
import com.example.authservice.repository.CredentialRepository;

@Service
public class CredentialService {
    @Autowired
    private CredentialRepository credentialRepository;

    public String login(Credential credential) {
        List<Credential> credentials = credentialRepository.findAll();
        // validate credential
        for (Credential c : credentials) {
            if (c.getUsername().equals(credential.getUsername())
                    && c.getPassword().equals(credential.getPassword())) {
                // generate token
                return c.getId().toString();
            }
        }
        return null;
    }

    public String signup(Credential credential) {
        List<Credential> credentials = credentialRepository.findAll();
        // validate credential
        for (Credential c : credentials) {
            if (c.getUsername().equals(credential.getUsername())) {
                return "username already exists";
            }
        }
        credentialRepository.save(credential);
        return credential.getId().toString();
    }
}
