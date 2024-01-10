package com.example.authservice.dto;

import com.example.authservice.model.Credential;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.security.Principal;

@Component
public class CustomAuthenticationSuccessHandler implements AuthenticationSuccessHandler{

    @Autowired
    private HttpSession session;

//    @Autowired
//    private UserRepo
    private static final Logger logger = LoggerFactory.getLogger(AuthenticationSuccessHandler.class);
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {

        String userName = "";
        if(authentication.getPrincipal() instanceof Principal) {
            userName = ((Principal)authentication.getPrincipal()).getName();

        }else {
            userName = ((Credential)authentication.getPrincipal()).getUsername();
        }
        logger.info("Username: " + userName);
        session.setAttribute("UserId", userName);

    }
}
