
# CRUD Operations Project

This project demonstrates a simple CRUD (Create, Read, Update, Delete) application for managing user data. It consists of a frontend for user interaction and a backend server with a database for data persistence. The application showcases how to perform CRUD operations seamlessly with a modern tech stack.

## Features

- **Add Users**: Add new users with name and email.
- **List Users**: View all users in a dynamic table.
- **Update Users**: Modify user details directly.
- **Delete Users**: Remove users from the system.
- **Real-time Updates**: UI updates dynamically after each operation.
- **Error Handling**: Displays messages for successful or failed operations.

## Technologies Used

### Frontend
- **HTML**: Markup for structuring the web interface.
- **CSS**: Basic styling for the interface.
- **JavaScript**: Client-side scripting for DOM manipulation and API interaction.

### Backend
- **Node.js**: JavaScript runtime for building the backend server.
- **Express.js**: Framework for setting up RESTful APIs.
- **MySQL**: Relational database for storing user data.
- **Body-parser**: Middleware for parsing request bodies.
- **CORS**: Middleware to handle cross-origin requests.

### Key Concepts Learned
- Setting up and running a Node.js server.
- Using RESTful APIs for CRUD operations.
- Connecting Node.js to a MySQL database.
- Fetching and sending data with `fetch` API in JavaScript.
- Dynamically updating the DOM based on API responses.
- Using middleware for request handling and cross-origin support.

## Requirements

### Prerequisites
1. **Node.js**: Ensure Node.js is installed on your system.
   - [Download Node.js](https://nodejs.org)
2. **MySQL**: Set up a MySQL server and create a database.
   - Database Name: `crud_example`
   - Table Schema:
     ```sql
     CREATE TABLE users (
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) NOT NULL
     );
     ```

### Installation

#### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node index.js
   ```
4. The server will run at `http://localhost:3000`.

#### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Open `index.html` in a browser.

### API Endpoints
- **GET /users**: Fetch all users.
- **POST /add-user**: Add a new user. Requires `name` and `email` in the request body.
- **PUT /update-user/:id**: Update a user's details. Requires `name` and `email` in the request body.
- **DELETE /delete-user/:id**: Delete a user by ID.

## Directory Structure

```
project/
|-- crud-backend/
|   |-- index.js (Backend server code)
|   |-- package.json (Backend dependencies)
|   |-- node_modules/ (Excluded via .gitignore)
|
|-- crud-frontend/
    |-- index.html (Frontend structure)
    |-- script.js (Frontend interaction with API)
    |-- style.css (Styling for the application)
```

## How to Run
1. Start the backend server.
2. Open `index.html` in the browser.
3. Perform CRUD operations and see real-time updates.
