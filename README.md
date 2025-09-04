# Expenso - Expense Tracker

A modern, expense tracking application built with React and Node.js.

## Features

- **User Authentication**: Secure login and registration with profile image upload
- **Expense Management**: Add, view, and delete expenses with categories
- **Income Tracking**: Track income sources and amounts
- **Visual Analytics**: Interactive charts and graphs for financial insights
- **Glassmorphism UI**: Modern, transparent design with backdrop blur effects
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

### Frontend
- React 18
- Tailwind CSS
- Recharts (for data visualization)
- React Router DOM
- React Hot Toast (notifications)
- Axios (HTTP client)

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Multer (file uploads)
- Cloudinary (image storage)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Cloudinary account (for image uploads)

### Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Start the backend server:
```bash
npm start
```

### Frontend Setup
```bash
cd frontend/expense-tracker
npm install
```

Start the development server:
```bash
npm start
```

## Project Structure

```
Expenso-Alt/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── utils/
├── frontend/expense-tracker/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── assets/
│   └── package.json
└── README.md
```

## Key Components

- **Authentication**: Login/Signup with glassmorphism design
- **Dashboard**: Financial overview with charts and recent transactions
- **Income Management**: Add and track income sources
- **Expense Management**: Categorize and track expenses
- **Charts**: Interactive visualizations using Recharts
- **Error Handling**: Comprehensive error boundaries and user feedback

## Design Features

- **Glassmorphism**: Transparent panels with backdrop blur effects
- **Custom Color Palette**: Hero color (#FF3200) with consistent theming
- **Responsive Layout**: Mobile-first design approach
- **Smooth Animations**: CSS transitions and hover effects
- **Modern Typography**: Poppins font family throughout

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/user` - Get user info

### Income
- `GET /api/income` - Get all income records
- `POST /api/income` - Add new income
- `DELETE /api/income/:id` - Delete income record

### Expenses
- `GET /api/expense` - Get all expense records
- `POST /api/expense` - Add new expense
- `DELETE /api/expense/:id` - Delete expense record

### Dashboard
- `GET /api/dashboard` - Get dashboard data


## Live Demo

- Frontend: https://expenso-frontend.onrender.com
- Backend (reference): https://expenso-yq33.onrender.com

Note: On free hosting, the first request after a period of inactivity may take 10–60s due to cold starts.

## Demo Credentials

- Email: demo@example.com
- Password: Demo@123


## Deployment Notes (Render)

- Frontend env:
  - `VITE_BASE_URL=https://expenso-yq33.onrender.com`
- Backend env:
  - `MONGO_URI=...` 
  - `JWT_SECRET=...` 
  - `CLIENT_URL=https://expenso-frontend.onrender.com`
  - Do not set `PORT` (Render provides it automatically)
- SPA routing: add a rewrite rule on the Static Site → Redirects/Rewrites:
  - Source: `/*` → Destination: `/index.html` → Action: `Rewrite`

## License

This project is open source and available under the MIT License.
