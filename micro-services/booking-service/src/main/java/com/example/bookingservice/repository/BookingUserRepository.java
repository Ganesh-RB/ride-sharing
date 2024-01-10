package com.example.bookingservice.repository;

import com.example.bookingservice.model.BookingUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingUserRepository extends JpaRepository<BookingUser, Long>{

    List<BookingUser> findByUserId(long userId);
}
