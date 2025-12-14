# Frontend Developer Intern Assignment – Task Manager App

Hi there! 👋  

This is my submission for the Frontend Developer Intern task. The project is a **Task Management Web App** built using **Next.js** for the frontend and **Node.js + Express + MongoDB** for the backend. The app demonstrates authentication, CRUD operations, and a modern, responsive UI.

---

## 📝 Project Overview

The Task Manager app allows users to:

- Register and log in securely with **JWT authentication**.
- View and update their profile.
- Create, edit, delete, and search tasks.
- Enjoy a modern, responsive UI designed with **Tailwind CSS**.
- Work with protected routes so only logged-in users can access the dashboard.

The backend is lightweight and modular, designed to be scalable with clear separation of routes, controllers, and models.

---

## ⚡ Features

### Frontend
- Built with **Next.js (App Router)**.
- **Responsive design** using Tailwind CSS.
- Authentication with JWT.
- Task CRUD operations.
- Search and filter tasks.
- Clean, modern, and minimalist UI inspired by Material Design principles.

### Backend
- **Node.js + Express** API server.
- **MongoDB** database connection via Mongoose.
- Routes:
  - `POST /auth/register` – Create a new user.
  - `POST /auth/login` – Login user and get JWT token.
  - `GET /user/profile` – Get logged-in user info.
  - `PUT /user/profile` – Update profile.
  - `GET /tasks` – List user tasks.
  - `POST /tasks` – Create task.
  - `PUT /tasks/:id` – Update task.
  - `DELETE /tasks/:id` – Delete task.
- Passwords hashed with **bcrypt**.
- JWT-based route protection middleware.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, Zustand (for state management)
- **Backend**: Node.js, Express, MongoDB, Mongoose, bcrypt, jsonwebtoken
- **Dev Tools**: Postman for API testing, Nodemon for backend development

---

## 🚀 Installation & Running Locally

### 1. Clone Repo

```bash
git clone <your-repo-url>
cd frontend-developer-task
