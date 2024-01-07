package com.example.bookingservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bookingservice.model.Location;

public interface LocationRepository extends JpaRepository<Location, Long> {
    
}
