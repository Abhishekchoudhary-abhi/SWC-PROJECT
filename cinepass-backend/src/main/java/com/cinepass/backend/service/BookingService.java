package com.cinepass.backend.service;

import com.cinepass.backend.entity.*;
import com.cinepass.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Duration;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private ShowRepository showRepository;

    @Autowired
    private SeatRepository seatRepository;

    @Autowired
    private BookingSeatRepository bookingSeatRepository;

    @Autowired
    private StringRedisTemplate redisTemplate;

    private static final String SEAT_LOCK_PREFIX = "seat_lock:";
    private static final long LOCK_DURATION_MINUTES = 10;

    @Transactional
    public Booking initiateBooking(User user, Long showId, List<Long> seatIds) {
        Show show = showRepository.findById(showId)
                .orElseThrow(() -> new RuntimeException("Show not found"));

        // Check if any seat is already booked or locked
        for (Long seatId : seatIds) {
            if (isSeatLocked(showId, seatId) || isSeatAlreadyBooked(showId, seatId)) {
                throw new RuntimeException("One or more seats are not available");
            }
        }

        // Lock seats in Redis
        for (Long seatId : seatIds) {
            lockSeat(showId, seatId);
        }

        List<Seat> seats = seatRepository.findAllById(seatIds);
        double totalAmount = seats.stream().mapToDouble(s -> show.getBasePrice()).sum();

        Booking booking = Booking.builder()
                .user(user)
                .show(show)
                .totalAmount(totalAmount)
                .status(BookingStatus.PENDING)
                .bookingId(UUID.randomUUID().toString())
                .build();

        Booking savedBooking = bookingRepository.save(booking);

        List<BookingSeat> bookingSeats = seats.stream().map(seat -> 
            BookingSeat.builder()
                .booking(savedBooking)
                .seat(seat)
                .priceAtBooking(show.getBasePrice())
                .build()
        ).collect(Collectors.toList());

        bookingSeatRepository.saveAll(bookingSeats);

        return savedBooking;
    }

    private void lockSeat(Long showId, Long seatId) {
        String key = SEAT_LOCK_PREFIX + showId + ":" + seatId;
        redisTemplate.opsForValue().set(key, "LOCKED", Duration.ofMinutes(LOCK_DURATION_MINUTES));
    }

    private boolean isSeatLocked(Long showId, Long seatId) {
        String key = SEAT_LOCK_PREFIX + showId + ":" + seatId;
        return redisTemplate.hasKey(key);
    }

    private boolean isSeatAlreadyBooked(Long showId, Long seatId) {
        return bookingSeatRepository.existsByBookingShowIdAndSeatIdAndBookingStatusIn(
            showId, seatId, List.of(BookingStatus.CONFIRMED, BookingStatus.PENDING));
    }

    @Transactional
    public void confirmBooking(Long bookingId, String transactionId) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        
        booking.setStatus(BookingStatus.CONFIRMED);
        // QR Code generation logic would go here
        bookingRepository.save(booking);

        // Remove Redis locks
        List<BookingSeat> seats = bookingSeatRepository.findByBookingId(bookingId);
        for (BookingSeat bs : seats) {
            String key = SEAT_LOCK_PREFIX + booking.getShow().getId() + ":" + bs.getSeat().getId();
            redisTemplate.delete(key);
        }
    }
}
