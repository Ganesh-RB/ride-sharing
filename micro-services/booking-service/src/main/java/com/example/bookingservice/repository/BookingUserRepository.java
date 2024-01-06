package com.example.bookingservice.repository;

import com.example.bookingservice.model.BookingUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingUserRepository extends JpaRepository<BookingUser, Long>{
}
