package com.cinepass.backend.service;

import com.cinepass.backend.entity.Payment;
import com.cinepass.backend.entity.PaymentStatus;
import com.cinepass.backend.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public Payment processPayment(Long bookingId, String gateway, Double amount) {
        // In a real app, this would call Razorpay/Stripe API
        Payment payment = Payment.builder()
                .transactionId("PAY-" + UUID.randomUUID())
                .gatewayName(gateway)
                .status(PaymentStatus.SUCCESS)
                .amount(amount)
                .build();
        
        return paymentRepository.save(payment);
    }
}
