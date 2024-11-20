# Fullstack Application Setup Guide

This repository contains a fullstack application with a **React-Vite frontend** and a **Laravel backend**. Follow the steps below to set up and run the project.

---

## **Table of Contents**

1. [Prerequisites](#prerequisites)  
2. [Cloning the Repository](#cloning-the-repository)  
3. [Setting Up the Backend (Laravel)](#setting-up-the-backend-laravel)  
4. [Setting Up the Frontend (React-Vite)](#setting-up-the-frontend-react-vite)  
5. [Environment Configuration](#environment-configuration)  
6. [Testing and Usage](#testing-and-usage)  
7. [Postman API Documentation](#postman-api-documentation)  
8. [Troubleshooting](#troubleshooting)

---

## **Prerequisites**

Ensure the following are installed on your system:

- PHP >= 8.1 and Composer  
- Node.js >= 16.x and npm or Yarn  
- MySQL
- Laravel CLI  
- Vite CLI  
- Git

---

## **Cloning the Repository**

1. Clone this repository:
   ```bash
   git clone https://github.com/artisticwrist/react-x-laravel.git
   cd react-x-laravel
   ```

2. Separate the folders for the **frontend** and **backend**:
   - Move the React-Vite files to a new folder, e.g., `frontend/`.
   - Move the Laravel files to another folder, e.g., `backend/`.

---

## **Setting Up the Backend (Laravel)**

1. Navigate to the `backend/` directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   composer install
   ```

3. Configure the environment:
   - Duplicate the `.env.example` file and rename it to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Set up the database connection, SMTP mailer, and other environment variables in `.env`.

4. Import the test database:
   - The test database is in the `database/` folder as an SQL file.
   - Import it into your MySQL server using a tool like phpMyAdmin or the MySQL CLI.

5. Run the migrations:
   ```bash
   php artisan migrate --seed
   ```

6. Start the Laravel development server:
   ```bash
   php artisan serve
   ```

   The default base URL is `http://127.0.0.1:8000`. Make sure the base URL matches the one used in the React frontend.

---

## **Setting Up the Frontend (React-Vite)**

1. Navigate to the `frontend/` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update the backend base URL:
   - Open the `Login.jsx`, `Register.jsx` (both in the `Pages/` folder), and `Navbar.jsx` (in the `Components/` folder).
   - Replace the base URL `http://127.0.0.1:8000/api` with your current backend URL.

4. Start the React development server:
   ```bash
   npm run dev
   ```

   The app should be accessible at `http://localhost:5173` or another port specified by Vite.

---

## **Environment Configuration**

### Laravel `.env` File:
Ensure the following are correctly set up in the `.env` file:

```env
APP_URL=http://127.0.0.1:8000
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_database_user
DB_PASSWORD=your_database_password

MAIL_MAILER=smtp
MAIL_HOST=your_smtp_host
MAIL_PORT=your_smtp_port
MAIL_USERNAME=your_email
MAIL_PASSWORD=your_email_password
MAIL_ENCRYPTION=your_encryption (tls/ssl)
MAIL_FROM_ADDRESS=your_from_email
MAIL_FROM_NAME="${APP_NAME}"
```

---

## **Testing and Usage**

### Backend Testing:
- Use the provided **Postman documentation** to test the backend API endpoints.
- https://documenter.getpostman.com/view/29651789/2sAYBRGu7t
- Endpoints include user authentication (`/login`, `/register`). 

### Frontend Testing:
- The frontend integrates state management and `localStorage` for managing the logged-in user.
- Log out functionality is implemented directly in the frontend.

### Database:
Ensure the Laravel backend is connected to the database before running the application.

---

## **Postman API Documentation**

The Postman documentation includes all API endpoints and testing details. Import the documentation into Postman to test the APIs.

---

## **Troubleshooting**

1. **CORS Issues:**  
   - Ensure CORS is properly configured in the Laravel backend (`App\Http\config\Cors`).
   - replace the react base url in the Cors.php file with your url for react-vite app

2. **Frontend/Backend Connection:**  
   - Double-check the base URL in `Login.jsx`, `Register.jsx`, and `Navbar.jsx`.

3. **Database Connection:**  
   - Verify the database credentials in `.env`.

4. **Mail Configuration:**  
   - Ensure SMTP is set up correctly in `.env`.

---

Feel free to contact me if you encounter any issues while setting up the project!
