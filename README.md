# MongoDB Assignment - Node Events

A Node.js and Express.js web application for managing events, built using MongoDB and Mongoose. This project also features user authentication using Passport.js and rendering views with EJS.

## Features

- **Event Management**: Create, read, edit, and delete events.
- **User Authentication**: Sign up, log in, and manage user sessions.
- **Flash Messages**: Interactive notifications for users (e.g., successful login, error messages).
- **Responsive UI**: Styled using Bootstrap.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: Passport.js, bcrypt-nodejs
- **Template Engine**: EJS
- **Other**: express-validator, connect-flash, multer (for file uploads)

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/) running locally or accessible via a cluster (e.g., MongoDB Atlas).

## Getting Started

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/Alixxq9/MongoDB-assignment.git
   cd MongoDB-assignment
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Database**:
   Update `config/database.js` to match your local or remote MongoDB connection string if necessary.

4. **Seed Database** (optional):
   To seed some initial events:
   ```bash
   node seed/event-seed.js
   ```

5. **Start the application**:
   ```bash
   npm start
   ```
   The server will start, typically on port 3000 (check `app.js` or console output for details). Navigate to `http://localhost:3000`.

## Author
Ali rashid almajed
