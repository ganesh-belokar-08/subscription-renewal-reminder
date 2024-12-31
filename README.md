# Subscription Renewal Reminder

Subscription Renewal Reminder is a web application that helps users keep track of their subscriptions and sends them reminders when their subscriptions are about to expire. This project includes a backend built with Node.js and Express, and a frontend built with React.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- Track multiple subscriptions
- Receive email reminders before subscription expiry
- User authentication and authorization
- Responsive user interface

## Installation

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local or cloud instance)
- Git

### Backend Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/ganesh-belokar-08/subscription-renewal-reminder.git
    cd subscription-renewal-reminder/server
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the `/server` directory with the following content:
    ```plaintext
    MONGODB_URI=mongodb://localhost:27017/subscription-reminder
    PORT=5000
    ```

4. Start the backend server:
    ```sh
    npm start
    ```

### Frontend Setup

1. Navigate to the `/client` directory:
    ```sh
    cd ../client
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the frontend development server:
    ```sh
    npm start
    ```

## Usage

- Open your browser and navigate to `http://localhost:3000` to access the frontend.
- The backend server runs on `http://localhost:5000`.



