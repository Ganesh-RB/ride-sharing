package com.example.authservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.authservice.model.Credential;

public interface CredentialRepository extends JpaRepository<Credential, Long> {
    
}
