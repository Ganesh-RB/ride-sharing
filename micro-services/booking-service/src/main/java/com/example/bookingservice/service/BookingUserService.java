package com.example.bookingservice.service;

import com.example.bookingservice.dto.BookingData;
import com.example.bookingservice.repository.BookingUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Service
public class BookingUserService {
    @Autowired
    private BookingUserRepository bookingUserRepository;

    @Autowired
    private BookingService bookingService;

    private boolean isJourneyCompleted(BookingData bookingData){
        Date date = Date.valueOf(LocalDate.now());
        return bookingData.getEndDate().compareTo(date) < 0;
    }

    private boolean isJourneyUpcoming(BookingData bookingData){
        Date date = Date.valueOf(LocalDate.now());
        return bookingData.getEndDate().compareTo(date) >= 0;
    }

    public List<BookingData> getUpcomingBookings(int userId) {
        return bookingUserRepository.findByUserId(userId).stream()
                .map(bookingUser -> bookingService.getBookingById(bookingUser.getBookingId()))
                .filter(bookingData -> bookingData.map(this::isJourneyUpcoming).orElse(false))
                .map(bookingData -> bookingData.orElse(null))
                .toList();
    }

    public List<BookingData> getCompletedBookings(int userId) {
        return bookingUserRepository.findByUserId(userId).stream()
                .map(bookingUser -> bookingService.getBookingById(bookingUser.getBookingId()))
                .filter(bookingData -> bookingData.map(this::isJourneyCompleted).orElse(false))
                .map(bookingData -> bookingData.orElse(null))
                .toList();
    }
}
