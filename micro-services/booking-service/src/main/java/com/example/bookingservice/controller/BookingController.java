package com.example.bookingservice.controller;

import java.util.List;

import com.example.bookingservice.dto.BookingJoinData;
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
    public BookingData createBooking(@RequestBody Booking booking) {
        return bookingService.createBooking(booking);
    }

    @PostMapping("/join")
    public BookingData joinBooking(@RequestBody BookingJoinData bookingJoinData){
        return bookingService.joinBooking(bookingJoinData);
    }

    @GetMapping("/retrieve/{url}")
    public BookingData getBooking(@PathVariable("url") String url) {
        return bookingService.getBooking(url);
    }

}

/*
Create a booking

{
    "startDate": "2021-01-01",
    "endDate": "2021-01-02",
    "bookerId": 1,
    "fromId": 1,
    "toId": 2,
    "price": 100,
    "carId": 1
}


 */