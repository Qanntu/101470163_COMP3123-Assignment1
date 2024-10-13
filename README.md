COMP3123 Assignment: CRUD API for User and Employee Management
Project Description
This project is a backend API built using Node.js, Express, and MongoDB. It provides CRUD operations for managing users and employees. The API allows users to sign up, log in, and manage employee records.

Features
User management (Signup and Login)
Employee management (Create, Read, Update, and Delete employees)
RESTful API design
MongoDB for data storage
Secure password hashing using bcrypt
API Endpoints
User Management
POST /api/v1/users/signup – Create a new user
POST /api/v1/users/login – Log in a user
Employee Management
GET /api/v1/employees – Get all employees
POST /api/v1/employees – Create a new employee
GET /api/v1/employees/:employeeid – Get an employee by ID
PUT /api/v1/employees/:employeeid – Update an employee by ID
DELETE /api/v1/employees/:employeeid – Delete an employee by ID
Technologies Used
Node.js – Runtime environment
Express.js – Web framework for Node.js
MongoDB – NoSQL database
Mongoose – ODM for MongoDB
bcrypt – For secure password hashing
dotenv – For managing environment variables
Getting Started
Prerequisites
Node.js (v14 or higher)
MongoDB instance (local or cloud-based like MongoDB Atlas)
Installation Steps
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/your-repository.git
Install the dependencies:
bash
Copy code
npm install
Create a .env file in the root directory and add your MongoDB URI:
bash
Copy code
MONGO_URI=your_mongodb_connection_string
Start the server:
bash
Copy code
npm start
Usage
Signup a new user:
Endpoint: POST /api/v1/users/signup
Request Body:
json
Copy code
{
  "username": "exampleuser",
  "email": "user@example.com",
  "password": "password123"
}
Login a user:
Endpoint: POST /api/v1/users/login
Request Body:
json
Copy code
{
  "email": "user@example.com",
  "password": "password123"
}
Create a new employee:
Endpoint: POST /api/v1/employees
Request Body:
json
Copy code
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "position": "Developer",
  "salary": 50000,
  "date_of_joining": "2023-01-15",
  "department": "IT"
}
Get all employees:
Endpoint: GET /api/v1/employees
Sample User for Testing
Username: testuser
Email: testuser@example.com
Password: testpassword