package com.example.bookingservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bookingservice.dto.BookingData;
import com.example.bookingservice.model.Booking;
import com.example.bookingservice.repository.BookingRepository;
import com.example.bookingservice.service.BookingService;

@RestController
@RequestMapping("/api/booking")
public class BookingController {
    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private BookingService bookingService;


    @GetMapping("/all")
    public List<BookingData> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @PostMapping("/new")
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingRepository.save(booking);
    }

    @GetMapping("/retrieve/{url}")
    public Booking getBooking(@PathVariable("url") String url) {
        final String uuid = url.substring(url.lastIndexOf('/') + 1);
        return bookingRepository.findById(uuid).orElse(null);
    }

}
