package com.example.bookingservice.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BookingJoinData {
    private String url;
    private long userId;
}
