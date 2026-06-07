# HLApp - Healthcare Appointment & Patient Management System

This is a full-stack web application developed for the Full Stack Programming Lab final project.

## Tech Stack
- **Frontend**: Next.js 14+ (App Router), React, Axios, React Hot Toast
- **Backend**: Node.js, Express.js, JWT Auth, bcrypt
- **Database**: MongoDB with Mongoose
- **Design System**: Vanilla CSS with modern clinical aesthetics, CSS Variables, Google Fonts (DM Sans + Playfair Display)

## Project Structure
- `/frontend` - Contains the Next.js application
- `/backend` - Contains the Node.js/Express API

## Features
- **Role-based Access Control**: Admin, Doctor, and Patient roles with JWT authentication.
- **Doctor & Patient Management**: Full CRUD operations.
- **Appointment System**: Booking, tracking statuses (Pending, Confirmed, Completed, Rejected).
- **Prescription & Medical Records**: Add and view patient medical histories and prescriptions.
- **Modern UI**: Clean clinical white with deep navy accents, sharp geometric cards, and responsive sidebar layouts.

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB (Running locally on default port 27017)

### 1. Backend Setup
1. Open a terminal and navigate to the backend directory:
   ```bash
   cd Final_Term_Project_HLApp/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Seed the database (This creates Admin, 15 Doctors, and 15 Patients):
   ```bash
   node seed.js
   ```
   *Note: Seed accounts use password `admin123`, `doctor123`, `patient123`.*
4. Start the backend server:
   ```bash
   npm start
   ```
   *The API will run on http://localhost:5000*

### 2. Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd Final_Term_Project_HLApp/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Next.js development server:
   ```bash
   npm run dev
   ```
   *The frontend will be available at http://localhost:3000*

## Testing the App
- **Admin**: Login with `admin@hlapp.com` / `admin123`
- **Doctor**: Login with `doctor1@hlapp.com` / `doctor123`
- **Patient**: Login with `patient1@hlapp.com` / `patient123`
