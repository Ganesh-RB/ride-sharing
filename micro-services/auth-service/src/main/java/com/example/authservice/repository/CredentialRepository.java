package com.example.authservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.authservice.model.Credential;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Optional;

public interface CredentialRepository extends JpaRepository<Credential, Long> {

    Optional<Credential> findByUsername(String username);
}
