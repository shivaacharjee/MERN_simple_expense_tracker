# Personal Expense Tracker (MERN Stack)

This is a simple personal expense tracking application built using the MERN stack. The app allows users to add, view, and delete expenses and see a basic summary of their spending.

## Features

- Add personal expenses
- Delete expenses
- Categorize expenses
- View total spending
- Simple and clean user interface

## Tech Stack

- MongoDB – Database
- Express.js – Backend framework
- React – Frontend library
- Node.js – JavaScript runtime

## Project Structure

expense-tracker/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Expense.js
│   ├── routes/
│   │   └── expenseRoutes.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── api.js
│   │   └── index.js
│   └── package.json
│
└── README.md

## Prerequisites

- Node.js (LTS version)
- MongoDB Community Edition
- npm

## How to Run the Project Locally

### 1. Clone the repository

git clone <your-github-repository-url>
cd expense-tracker

### 2. Start MongoDB

Make sure MongoDB is running locally.

### 3. Backend Setup

cd backend
npm install
npm run dev

The backend server will run on:
http://localhost:5000

### 4. Frontend Setup

Open a new terminal window.

cd frontend
npm install
npm start

The frontend will run on:
http://localhost:3000

## How the Application Works

- React runs on port 3000 and serves the UI
- Node.js with Express runs on port 5000 and exposes REST APIs
- React communicates with the backend using HTTP requests
- Backend uses Mongoose to store data in MongoDB

## API Endpoints

POST /api/expenses        - Add a new expense  
GET  /api/expenses        - Fetch all expenses  
DELETE /api/expenses/:id  - Delete an expense  

## AI Usage Disclosure

AI was used to assist with:
- Generating initial MERN boilerplate
- Creating basic CRUD APIs
- Structuring the project folders

All code was reviewed, understood, and adjusted manually.

## Notes

This project is created for learning and assignment purposes. Advanced features such as authentication and authorization are intentionally kept out to keep the application simple.
 