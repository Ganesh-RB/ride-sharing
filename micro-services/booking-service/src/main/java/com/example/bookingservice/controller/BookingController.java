package com.example.bookingservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bookingservice.model.Booking;
import com.example.bookingservice.repository.BookingRepository;

@RestController
@RequestMapping("/booking")
public class BookingController {
    @Autowired 
    private BookingRepository bookingRepository;

    @GetMapping("/all")
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    @PostMapping("/new")
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingRepository.save(booking);
    }
}
