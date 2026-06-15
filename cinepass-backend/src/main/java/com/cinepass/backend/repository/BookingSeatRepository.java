package com.cinepass.backend.repository;

import com.cinepass.backend.entity.BookingSeat;
import com.cinepass.backend.entity.BookingStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface BookingSeatRepository extends JpaRepository<BookingSeat, Long> {
    boolean existsByBookingShowIdAndSeatIdAndBookingStatusIn(Long showId, Long seatId, Collection<BookingStatus> statuses);
    List<BookingSeat> findByBookingId(Long bookingId);
}
