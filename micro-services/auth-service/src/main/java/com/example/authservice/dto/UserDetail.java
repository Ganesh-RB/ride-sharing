package com.example.authservice.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserDetail {
    private long id;
    private String name;
    private String role;
}
