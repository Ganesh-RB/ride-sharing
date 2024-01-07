package com.example.bookingservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bookingservice.model.Cab;
import com.example.bookingservice.repository.CabRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CabService {
    @Autowired
    private CabRepository cabRepository;

    public List<Cab> getAvailableCabs() {
        return cabRepository.findAll();
    }

    public Cab getRandomCab() {
        List<Cab> cabs = cabRepository.findAll();
        return cabs.get((int) (Math.random() * cabs.size()));
    }
}
