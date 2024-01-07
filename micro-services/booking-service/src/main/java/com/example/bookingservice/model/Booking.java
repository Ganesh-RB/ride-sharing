package com.example.bookingservice.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "booking")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Booking {

    private Date startDate;
    private Date endDate;
    private long bookerId;
    private long fromId;
    private long toId;
    private long price;
    private long cabId;
        
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid")
    @Column(name = "uuid", unique = true)
    private String uuid;


}

// example request 
/*
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