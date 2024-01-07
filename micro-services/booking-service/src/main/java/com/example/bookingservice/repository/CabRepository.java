package com.example.bookingservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bookingservice.model.Cab;

public interface CabRepository extends JpaRepository<Cab, Long> {
    
}
