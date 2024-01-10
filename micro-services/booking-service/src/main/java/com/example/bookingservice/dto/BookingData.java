package com.example.bookingservice.dto;

import lombok.Builder;
import lombok.Data;
import java.sql.Date;

import com.example.bookingservice.model.Cab;
import com.example.bookingservice.model.Location;


@Data
@Builder
public class BookingData {
    private Date startDate;
    private Date endDate;
    private long bookerId;
    private Location from;
    private Location to;
    private long price;
    private Cab cab;
    private String joinUrl;
    private String trackUrl;
}
