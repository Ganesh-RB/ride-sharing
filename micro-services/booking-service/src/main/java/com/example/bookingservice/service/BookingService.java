package com.example.bookingservice.service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.bookingservice.dto.BookingJoinData;
import com.example.bookingservice.model.BookingUser;
import com.example.bookingservice.repository.BookingUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bookingservice.dto.BookingData;
import com.example.bookingservice.model.Booking;
import com.example.bookingservice.repository.BookingRepository;
import com.example.bookingservice.repository.CabRepository;
import com.example.bookingservice.repository.LocationRepository;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private BookingUserRepository bookingUserRepository;

    @Autowired
    private CabRepository cabRepository;

    @Autowired
    private LocationRepository locationRepository;

    public static String generateUrl(String uuid) {
        return "http://localhost:8080/api/booking/retrieve/" + uuid;
    }

    public List<BookingData> getAllBookings() {
        List<BookingData> bookings = new ArrayList<>();
        bookingRepository.findAll().forEach(booking -> {
            bookings.add(BookingData.builder()
                    .startDate(booking.getStartDate())
                    .endDate(booking.getEndDate())
                    .bookerId(booking.getBookerId())
                    .from(locationRepository.findById(booking.getFromId()).orElse(null))
                    .to(locationRepository.findById(booking.getToId()).orElse(null))
                    .price(booking.getPrice())
                    .cab(cabRepository.findById(booking.getCabId()).orElse(null))
                    .url(generateUrl(booking.getUuid()))
                    .build());
        });

        return bookings;
    }

    public Optional<BookingData> getBookingById(String bookingId){
        return bookingRepository.findById(bookingId).
                map(booking -> BookingData.builder()
                        .startDate(booking.getStartDate())
                        .endDate(booking.getEndDate())
                        .bookerId(booking.getBookerId())
                        .from(locationRepository.findById(booking.getFromId()).orElse(null))
                        .to(locationRepository.findById(booking.getToId()).orElse(null))
                        .price(booking.getPrice())
                        .cab(cabRepository.findById(booking.getCabId()).orElse(null))
                        .url(generateUrl(booking.getUuid()))
                        .build());
        
    }

    public static String getUuid(String url) {
        return url.substring(url.lastIndexOf('/') + 1);
    }

    public BookingData getBooking(String uuid) {
        Booking booking = bookingRepository.findById(uuid).orElse(null);
        if (booking == null)
            return null;

        return BookingData.builder().startDate(booking.getStartDate())
                .endDate(booking.getEndDate())
                .bookerId(booking.getBookerId())
                .from(locationRepository.findById(booking.getFromId()).orElse(null))
                .to(locationRepository.findById(booking.getToId()).orElse(null))
                .price(booking.getPrice())
                .cab(cabRepository.findById(booking.getCabId()).orElse(null))
                .url(generateUrl(booking.getUuid()))
                .build();
    }

    public BookingData joinBooking(BookingJoinData bookingJoinData) {
        bookingUserRepository.save(BookingUser.builder()
                        .userId(bookingJoinData.getUserId())
                        .bookingId(getUuid(bookingJoinData.getUrl()))
                        .bookingDate( Date.valueOf(LocalDate.now()))
                        .build());
        return getBooking(getUuid(bookingJoinData.getUrl()));
    }

    public BookingData createBooking(Booking booking) {
        bookingRepository.save(booking);
        bookingUserRepository.save(BookingUser.builder()
                .userId(booking.getBookerId())
                .bookingId(booking.getUuid())
                .bookingDate(Date.valueOf(LocalDate.now()))
                .build());
        return getBooking(booking.getUuid());
    }
}
