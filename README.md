# COMP3123 Assignment: CRUD API for User and Employee Management

## Project Description
This project is a backend API built using **Node.js**, **Express**, and **MongoDB**. It provides **CRUD operations** for managing users and employees. The API allows users to sign up, log in, and manage employee records.

## Features
- User management (Signup and Login)
- Employee management (Create, Read, Update, and Delete employees)
- RESTful API design
- MongoDB for data storage
- Secure password hashing using **bcrypt**

## API Endpoints

### User Management
1. `POST /api/v1/users/signup` – Create a new user
2. `POST /api/v1/users/login` – Log in a user

### Employee Management
1. `GET /api/v1/employees` – Get all employees
2. `POST /api/v1/employees` – Create a new employee
3. `GET /api/v1/employees/:employeeid` – Get an employee by ID
4. `PUT /api/v1/employees/:employeeid` – Update an employee by ID
5. `DELETE /api/v1/employees/:employeeid` – Delete an employee by ID
