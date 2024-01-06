package com.example.bookingservice.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table(name = "booking_user")
@Builder
@Getter
@AllArgsConstructor
@Setter
@NoArgsConstructor
public class BookingUser {
    @Id
    private long bookingId;
    @Id
    private long userId;
    private Date bookingDate;
}
