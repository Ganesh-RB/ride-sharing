package com.example.bookingservice.controller;

import com.example.bookingservice.dto.BookingData;
import com.example.bookingservice.service.BookingUserService;
import jakarta.ws.rs.QueryParam;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/booking/")
public class BookingUserController {

    @Autowired
    private BookingUserService bookingUserService;

    @GetMapping("/upcoming")
    public List<BookingData> getUpcomingBookings(@QueryParam("userId") final int userId){
        return bookingUserService.getUpcomingBookings(userId);
    }

    @GetMapping("/completed")
    public List<BookingData> getCompletedBookings(@QueryParam("userId") final int userId){
        return bookingUserService.getCompletedBookings(userId);
    }


}
