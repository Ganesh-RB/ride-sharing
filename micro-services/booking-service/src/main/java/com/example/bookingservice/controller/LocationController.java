package com.example.bookingservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.bookingservice.repository.LocationRepository;

import com.example.bookingservice.model.Location;

@RestController
@RequestMapping("/api/location")
public class LocationController {
    @Autowired
    private LocationRepository locationRepository;

    @GetMapping("/all")
    public List<Location> getAllLocations() {
        return locationRepository.findAll();
    }

    @PostMapping("/new")
    public List<Location> createLocation(@RequestBody List<Location> locations) {
        return locationRepository.saveAll(locations);
    }

}

/*
Sample request body for /api/location/new
{
    [
        {"name": "IITH"},
        {"name": "RGIA"},
        {"name": "Secunderabad"},
        {"name": "Kachiguda"},
        {"name": "Hitech City"},
        {"name": "Miyapur"},
        {"name": "Lingampally"},
        {"name": "Sangareddy"},
        {"name": "Patencheru"}        
    ]
}


 */
