# CinePass - Premium Movie & Event Booking Platform

CinePass is a production-ready, full-stack application inspired by BookMyShow, built with modern enterprise technologies.

## 🚀 Quick Start (Docker)

Ensure you have Docker and Docker Compose installed.

1. Clone the repository.
2. Run `docker-compose up --build`.
3. Frontend will be available at `http://localhost:3000`.
4. Backend API will be available at `http://localhost:8080`.
5. Swagger UI: `http://localhost:8080/swagger-ui.html`.

## 🛠 Tech Stack

### Backend
- **Java 21 & Spring Boot 3.2**
- **Spring Security (JWT)** for Authentication.
- **Spring Data JPA & PostgreSQL** for Persistence.
- **Redis** for real-time seat locking (10min sessions).
- **RabbitMQ** for asynchronous notification processing.
- **Spring WebSocket (SockJS/STOMP)** for live seat status updates.

### Frontend
- **Next.js 14+ (App Router)** & **TypeScript**.
- **Tailwind CSS** for premium dark aesthetics.
- **Redux Toolkit** for state management.
- **React Query** for server-state synchronization.
- **Framer Motion** for micro-animations and transitions.

## 🔐 Key Features
- **OTP-based Authentication** (Mocked in `AuthService`).
- **Real-time Seat Booking** with Redis locking to prevent race conditions.
- **Multi-city & Multi-screen** support.
- **Payment Integration** (Mocked `PaymentService` ready for Stripe/Razorpay).
- **QR Code & PDF Ticket** generation logic.
- **Admin & Super Admin** Role-based Access Control.

## 📂 Project Structure
- `/cinepass-backend`: Spring Boot application.
- `/cinepass-frontend`: Next.js application.
- `docker-compose.yml`: Local orchestraion.

## 🛑 Environment Variables
Default values are provided in `docker-compose.yml`. For production, update these in a `.env` file.
# SWC-PROJECT
