package com.example.authservice.service;

import com.example.authservice.dto.CredentialDetails;
import com.example.authservice.repository.CredentialRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {

    private CredentialRepository credentialRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("Load By UserName Called with"+ username);
        CredentialDetails credentialDetails = credentialRepository
                .findByUsername(username)
                .map(CredentialDetails::new)
                .orElseThrow(() -> new UsernameNotFoundException("No such user Exists"));
        System.out.println(credentialDetails.getCredential().toString());
        return credentialDetails;


    }
}
