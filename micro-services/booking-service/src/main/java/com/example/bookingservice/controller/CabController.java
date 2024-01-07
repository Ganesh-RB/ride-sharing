package com.example.bookingservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bookingservice.model.Cab;
import com.example.bookingservice.repository.CabRepository;
import com.example.bookingservice.service.CabService;

@RestController
@RequestMapping("/api/cab")
public class CabController {
    @Autowired
    private CabRepository cabRepository;

    @Autowired
    private CabService cabService;

    @GetMapping("/all")
    public List<Cab> getAllCabs() {
        return cabRepository.findAll();
    }

    @PostMapping("/new")
    public Cab createCab(@RequestBody Cab cab) {
        return cabRepository.save(cab);
    }

    @PostMapping("/new/bulk")
    public List<Cab> createCabs(@RequestBody List<Cab> cabs) {
        return cabRepository.saveAll(cabs);
    }

    @GetMapping("/{id}")
    public Cab getCab(@PathVariable("id") Long id) {
        return cabRepository.findById(id).orElse(null);
    }

    @GetMapping("/assign")
    public Cab assignCab() {
        return cabService.getRandomCab();
    }
}

/*
Sample request body for /api/cab/new/bulk
[
    {
        "driverName": "John Doe",
        "carNumber": "TS 07 1234",
        "driverNumber": "9876543210",
    }
    {
        "driverName": "Ritesh Agarwal",
        "carNumber": "TS 07 1235", 
        "driverNumber": "9876543211",
    }
    {
        "driverName": "Sham kumar",
        "carNumber": "TS 07 1236",
        "driverNumber": "9876543212",
    }
    
    
]
*/