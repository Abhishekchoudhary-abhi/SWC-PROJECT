package com.cinepass.backend.service;

import com.cinepass.backend.config.RabbitMQConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

@Service
public class NotificationConsumer {

    private static final Logger logger = LoggerFactory.getLogger(NotificationConsumer.class);

    @RabbitListener(queues = RabbitMQConfig.QUEUE_NAME)
    public void consumeNotification(String message) {
        logger.info("Received notification from queue: {}", message);
        // Logic to send Email, SMS or Push notification via FCM
    }
}
