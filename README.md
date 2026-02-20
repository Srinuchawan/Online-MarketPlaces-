# Online Marketplace Project

## Project Overview
This project is a full-stack Online Marketplace platform, similar to Fiverr, where users can register as buyers or sellers, browse services (gigs), place orders, and make payments. The project includes user authentication, gig management, order processing, and payment integration with Stripe.

---

## Features

### User Features
- User registration and login with JWT authentication
- Update user profile and manage account
- Browse and search gigs by category or keyword
- Place orders and make payments
- View orders and order status
- Review services

### Seller Features
- Register as a seller
- Create, update, and delete gigs
- Manage received orders and mark them as completed
- Receive payments via Stripe

### Admin / Common Features
- JWT-based authentication and secure cookies
- Responsive UI built with React & SCSS
- Backend API built with Express.js & MongoDB
- Payment integration using Stripe API

---

## Tech Stack

**Frontend:**
- React.js
- React Router
- Axios
- SCSS for styling
- Vite as build tool

**Backend:**
- Node.js & Express.js
- MongoDB with Mongoose
- bcrypt for password hashing
- JWT for authentication
- Stripe for payment handling
- Cookie-parser and CORS for secure connections

---

## Folder Structure



---

## Setup & Installation

### Backend
1. Navigate to the backend folder:
   ```bash
   cd backend

2. install depedencey
   npm install

3 .env 
 MONGO_URI=mongodb://localhost:27017/Marketplace
JWT_KEY=your_jwt_secret_here
STRIPE_SECRET_KEY=your_stripe_secret_key_here
PORT=8800

4.start backend 
   node server.js
Backend server is running!
Connected to mongoDB!

#      frontend
1.install depedency
 npm install --legacy-peer-deps

2. npm run dev

open browser - http://localhost:5173/
