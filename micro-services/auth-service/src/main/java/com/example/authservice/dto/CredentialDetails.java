package com.example.authservice.dto;

import com.example.authservice.model.Credential;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.apache.commons.lang.StringUtils;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;

@Getter
public class CredentialDetails implements UserDetails{

    private final Credential credential;

    Role role;
    public CredentialDetails(Credential credential) {
        System.out.println("Credentials received: "+ credential.toString());
        this.credential = credential;
        this.role = new Role();
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        System.out.println("Authority Granted");
        return new ArrayList<>(Collections.singletonList(role));
    }

    @Override
    public String getPassword() {
        return credential.getPassword();
    }

    @Override
    public String getUsername() {
        return credential.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
