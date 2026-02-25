# 🎓 College Website & Student Monitoring System

A full-stack web application built to manage college information and monitor student activities in real-time.
This project includes a public-facing college website, an admin dashboard, and a backend API with authentication and real-time communication.

---

## 📌 Table of Contents

* Project Overview
* Features
* Tech Stack
* Project Structure
* System Architecture
* Database Design
* Installation Guide
* Environment Variables
* API Endpoints
* Socket.io Events
* Authentication Flow
* Future Improvements
* Author

---

## 📖 Project Overview

This system is designed to:

* Provide public information about the college
* Allow students to register and login
* Enable admin to monitor and manage students
* Send real-time notifications using Socket.io
* Maintain secure authentication using Passport.js

The project follows a modular architecture separating frontend, dashboard, and backend services.

---

## 🚀 Features

### 👨‍🎓 Student Features

* Student Registration & Login
* View College Information
* Profile Management
* Real-Time Notifications
* Secure Authentication

### 👨‍💼 Admin Dashboard Features

* Admin Login
* Add / Update / Delete Students
* Monitor Student Activities
* Post Announcements
* Real-Time Alerts
* Dashboard Analytics

### 🔄 Real-Time Communication

* Live notifications using Socket.io
* Instant data update across connected users
* Real-time student login tracking

---

## 🛠️ Tech Stack

### Frontend (Public Website)

* React.js
* React Router
* Axios
* Tailwind CSS (if used)

### Dashboard (Admin Panel)

* React.js
* Protected Routes
* Context API / Redux (if used)

### Backend

* Node.js
* Express.js
* MySQL
* Passport.js (Authentication)
* Socket.io
* JWT (if implemented)

### Database

* MySQL

---

## 📁 Project Structure

```
college-website-project/
│
├── frontend/              # Public College Website (React)
│   ├── src/
│   ├── public/
│   └── package.json
│
├── dashboard/             # Admin Dashboard (React)
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/               # Backend Server (Node + Express)
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── socket/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🏗️ System Architecture

Frontend (React)
⬇
Backend API (Node.js + Express)
⬇
MySQL Database

Real-Time Layer:
Socket.io connects frontend and backend for instant updates.

---

## 🗄️ Database Design (Example Tables)

### Students Table

| Field      | Type              |
| ---------- | ----------------- |
| id         | INT (Primary Key) |
| name       | VARCHAR           |
| email      | VARCHAR           |
| password   | VARCHAR           |
| role       | VARCHAR           |
| created_at | TIMESTAMP         |

### Announcements Table

| Field       | Type      |
| ----------- | --------- |
| id          | INT       |
| title       | VARCHAR   |
| description | TEXT      |
| created_at  | TIMESTAMP |

---

## ⚙️ Installation Guide

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/college-website.git
cd college-website
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

### 4️⃣ Dashboard Setup

```bash
cd dashboard
npm install
npm start
```

---

## 🔐 Environment Variables (.env)

Create a `.env` file inside backend folder:

```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=college_db
JWT_SECRET=your_secret_key
SESSION_SECRET=your_session_secret
```

---

## 🔌 API Endpoints (Sample)

### Authentication Routes

| Method | Endpoint           | Description      |
| ------ | ------------------ | ---------------- |
| POST   | /api/auth/register | Register Student |
| POST   | /api/auth/login    | Login User       |
| POST   | /api/auth/logout   | Logout           |

### Student Routes

| Method | Endpoint          | Description      |
| ------ | ----------------- | ---------------- |
| GET    | /api/students     | Get All Students |
| POST   | /api/students     | Add Student      |
| PUT    | /api/students/:id | Update Student   |
| DELETE | /api/students/:id | Delete Student   |

### Announcement Routes

| Method | Endpoint           | Description           |
| ------ | ------------------ | --------------------- |
| GET    | /api/announcements | Get All Announcements |
| POST   | /api/announcements | Create Announcement   |

---

## 📡 Socket.io Events

| Event Name        | Description                    |
| ----------------- | ------------------------------ |
| studentLoggedIn   | Triggered when student logs in |
| newAnnouncement   | Broadcast new announcement     |
| adminNotification | Send real-time alert           |

---

## 🔐 Authentication Flow

1. User submits login form
2. Backend validates credentials using Passport.js
3. Session or JWT is generated
4. Protected routes are accessible only with valid authentication
5. Dashboard routes are role-protected (Admin only)

---

## 📊 Security Measures

* Password hashing (bcrypt)
* Session / JWT authentication
* Protected API routes
* Role-based access control
* Input validation

---

## 🚀 Future Improvements

* Email verification system
* OTP-based authentication
* File upload system
* Attendance tracking
* Cloud deployment (AWS / Render)
* Docker support
* CI/CD pipeline

---

## 👨‍💻 Author

Nishant Kumar Rawani
Computer Science Engineering Student
---
