package com.example.authservice.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.authservice.dto.CredentialDetails;
import com.example.authservice.dto.UserDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
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

    @Autowired
    private JwtProvider jwtProvider;


    public UserDetailsService login(Credential credential) {
        CredentialDetails credentialDetails = new CredentialDetails(credential);
        return new InMemoryUserDetailsManager(credentialDetails);
    }

    public Map<String, Object> createLoginInfo(Authentication authentication){
        CredentialDetails credentialDetails = (CredentialDetails)authentication.getPrincipal();
        Credential credential = credentialDetails.getCredential();
        String token = this.jwtProvider.createToken(authentication);
        Map<String, Object> loginResultMap = new HashMap<>();
        UserDetail user = UserDetail.builder()
                .id(credential.getId())
                .name(credential.getUsername())
                .role("USER").build();

        loginResultMap.put("userinfo", user);
        loginResultMap.put("token", token);
        return loginResultMap;
    }

    public Credential signup(Credential credential) {
        Credential encodedCredential = new Credential();
        encodedCredential.setUsername(credential.getUsername());
        encodedCredential.setPassword(this.passwordEncoder.encode(credential.getPassword()));
        return credentialRepository.save(encodedCredential);
    }

}
