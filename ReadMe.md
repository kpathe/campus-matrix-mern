# Campus Matrix

Campus Matrix is a full-stack web application designed to empower students through mentor-mentee matching, secure messaging, goal tracking, and more. Built with React, Vite, Express, MongoDB, and Socket.IO.

## Features

- **Mentor-Mentee Matching:** Smart matching based on interests, streams, and language.
- **Secure Messaging:** Real-time chat with Socket.IO and read receipts.
- **Goal Tracking:** Set, view, and track academic or personal goals.
- **Profile Management:** Rich user profiles with skills, interests, and LinkedIn integration.
- **Badges & Rewards:** Celebrate achievements and milestones.
- **Event Scheduling & Resources:** Access campus guides, FAQs, and event info.

## Project Structure

```
campus-matrix/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── client/         # Production build output for frontend
│   ├── server.js       # Express server
│   └── package.json
├── frontend/
│   ├── src/            # React source code
│   ├── public/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB

### Setup

#### 1. Clone the repository

```sh
git clone https://github.com/yourusername/campus-matrix.git
cd campus-matrix
```

#### 2. Backend Setup

```sh
cd backend
npm install
```

Create a `.env` file in `backend/`:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Start the backend server:

```sh
npm run dev
```

#### 3. Frontend Setup

```sh
cd ../frontend
npm install
```

Start the frontend development server:

```sh
npm run dev
```

The frontend will run on [http://localhost:5173](http://localhost:5173) and proxy API requests to the backend.

## Build & Deployment

To build the frontend for production:

```sh
npm run build
```

Copy the build output (`dist/`) into `backend/client/` for serving via Express.

## API Endpoints

See the backend `routes/` folder for REST API endpoints:

- `/api/auth` - Authentication (signup, login, logout, check-auth)
- `/api/profile` - Profile creation and retrieval
- `/api/goals` - Goal CRUD operations
- `/api/chat` - Chat creation and listing
- `/api/messages` - Messaging within chats

## Technologies Used

- **Frontend:** React, Vite, Tailwind CSS, Framer Motion, React Router, Axios, Socket.IO Client
- **Backend:** Express, MongoDB, Mongoose, Socket.IO, JWT, bcryptjs



---

Made with ❤️ for the FluxWave Hackathon.