# CampusMatrix

CampusMatrix digitizes a college mentor-mentee scheme, connecting senior student mentors with junior mentees based on academic focus, skills, and language preferences. Built for the Fluxwave Hackathon 2025, where it won 2nd place, the platform has been used by 20 to 40 real students.

Live: https://campusmatrix.onrender.com  
Repository: https://github.com/kpathe/campus-matrix-mern

## Features

- AI-Driven Mentor Matching: Recommends mentors and mentees using Gemini 2.5 Flash, paired with an algorithmic fallback based on skill, interest, and language overlap.
- Academic Year Hierarchy: Enforces seniority rules requiring mentors to belong to a higher academic year than mentees.
- Mentee Capacity Cap: Restricts each mentor to a hard limit of 5 accepted mentees.
- Approval-Gated Real-Time Chat: Socket.IO-based chat requiring mutual request acceptance before conversation rooms open; includes typing indicators and message read tracking.
- Mentor-Assigned Tasks and Points: Mentors assign deadline-bound tasks to connected mentees; completion awards gamification points (50 on time, 20 late, 30 to mentor) and unlocks tier badges.
- Dynamic Leaderboard: Ranks students using a composite score combining internal task points, GitHub metrics (repositories, followers), and LeetCode activity (solved problems, submission calendar).
- Auth and Profile Management: JWT authentication via HTTP-only cookies, OTP email verification, password recovery, Cloudinary avatar uploads, and customizable user profiles.
- Peer Networking and Notifications: Campus directory with follow/unfollow capability and real-time in-app notification triggers for requests and task updates.
- Responsive Interface: Dark and light mode toggle with responsive UI across mobile and desktop.

## How the AI Matching Works

1. Database Filtering and Rule Verification:
   The backend validates the target role (mentor or mentee) and ensures the requester has a completed profile. Mentees can only have one active mentor. Candidates are filtered strictly by academic seniority (mentors must have `year > mentee.year`), mentor capacity (mentors with 5 accepted mentees are excluded), mentee exclusivity (mentees already paired are excluded), gender preference (if specified), and existing connection history.

2. Payload and Prompt Construction:
   The current user's profile (`department`, `skills`, `interests`, `languages`, `bio`) and candidate profiles are serialized into JSON. The prompt instructs Google Gemini (`gemini-2.5-flash` via `@google/genai`) to evaluate compatibility and output strictly a raw JSON array of objects containing `id`, compatibility `score` (0-100), and a one-sentence `matchReason`.

3. Response Parsing and Validation:
   The response is stripped of Markdown code fences (```json and ```) and parsed via `JSON.parse`. Validated scores and reasons are indexed into an in-memory lookup table.

4. Rule-Based Fallback:
   If `GEMINI_API_KEY` is missing, the API call fails, JSON parsing encounters an error, or a candidate is omitted in the response, an algorithmic fallback computes compatibility:
   `score = min(100, 35 + (skillOverlap * 15) + (interestOverlap * 10) + (languageOverlap * 8))`
   Candidates are returned sorted in descending order of compatibility score.

## Tech Stack

| Layer | Technologies |
| --- | --- |
| Frontend | React 19, Vite 6, Tailwind CSS 4, React Router 7, Axios, Socket.IO Client, Framer Motion, Lucide React, Radix UI |
| Backend | Node.js, Express 5, Socket.IO 4, Mongoose 8, MongoDB, JSON Web Token (JWT), bcryptjs, Cookie-Parser, Multer |
| AI | Google GenAI SDK (`@google/genai`), Gemini 2.5 Flash (`gemini-2.5-flash`) |
| Deployment & Services | Render (unified Web Service serving Node.js API and SPA build), Cloudinary (image storage), Mailtrap / Resend / Brevo (transactional OTP email) |

## Project Structure

```
campus-matrix/
├── backend/
│   ├── controllers/      # Route controllers (auth, matching, chat, goals, leaderboard)
│   ├── middleware/       # JWT verification middleware
│   ├── models/           # Mongoose schemas (User, Profile, Connection, Chat, Goal, etc.)
│   ├── routes/           # Express route definitions
│   ├── scripts/          # Database seeding scripts
│   ├── utils/            # External stats aggregator, Cloudinary, and mail handlers
│   ├── build-client.js   # Production build script copying frontend dist into backend/client
│   ├── server.js         # Express server and Socket.IO configuration
│   └── package.json
├── frontend/
│   ├── public/           # Static assets, logos, and default avatars
│   ├── src/
│   │   ├── api/          # Axios instance and base configurations
│   │   ├── components/   # UI components and navigation
│   │   ├── pages/        # Views (Dashboard, Matching, Messages, Goals, Leaderboard, etc.)
│   │   ├── App.jsx       # Route declarations and theme management
│   │   └── main.jsx      # React entry point
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── .gitignore
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- MongoDB Atlas or local MongoDB instance

### Installation
```sh
git clone https://github.com/kpathe/campus-matrix-mern.git
cd campus-matrix
```

### Backend Setup
```sh
cd backend
npm install
```

Create `.env` in `backend/`:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
GEMINI_API_KEY=your_gemini_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
MAILTRAP_API_TOKEN=your_mailtrap_token
EMAIL_FROM=noreply@campusmatrix.com
ADMIN_SECRET=your_admin_secret
```

Run backend in development:
```sh
npm run dev
```

### Frontend Setup
```sh
cd ../frontend
npm install
npm run dev
```
The client runs at `http://localhost:5173` and proxies `/api` and `/socket.io` to port 5000.

### Production Build and Deployment
To build the frontend and serve it from Express:
```sh
cd backend
npm run build
npm start
```
`build-client.js` builds the React client and copies `frontend/dist` to `backend/client`, which Express serves statically alongside API routes.

## API

### Auth (`/api/auth`)
- `POST /api/auth/signup` - Register a new user account.
- `POST /api/auth/login` - Authenticate user and issue JWT cookie.
- `POST /api/auth/logout` - Clear user session cookie.
- `GET /api/auth/me` - Fetch authenticated user details.
- `GET /api/auth/check-auth` - Validate active authentication status.
- `POST /api/auth/verify-email` - Verify email using OTP code.
- `POST /api/auth/resend-verification-otp` - Resend verification OTP code.
- `POST /api/auth/forgot-password` - Request password reset OTP.
- `POST /api/auth/verify-reset-otp` - Verify password reset OTP code.
- `POST /api/auth/reset-password` - Reset account password with verified OTP token.
- `PUT /api/auth/change-password` - Update current user password.
- `DELETE /api/auth/account` - Delete current user account and profile.

### Profile & Networking (`/api/profile`, `/api/upload`, `/api/connect`)
- `POST /api/profile/create-profile` - Create a student or mentor profile.
- `PUT /api/profile/edit-profile` - Update profile information.
- `GET /api/profile/me` - Get profile details and follow counts for current user.
- `GET /api/profile/user/:username` - Fetch public profile by username.
- `GET /api/profile/search` - Search users by name, username, or email.
- `POST /api/profile/refresh-stats` - Recompute dynamic coding stats and streaks.
- `PUT /api/profile/handles` - Update GitHub, LeetCode, and GFG usernames.
- `POST /api/upload` - Upload profile image to Cloudinary.
- `GET /api/connect` - Browse user directory with follow statuses.
- `POST /api/connect/follow` - Follow another student.
- `DELETE /api/connect/follow/:userId` - Unfollow a student.
- `GET /api/connect/followers/:userId` - List followers for a user.
- `GET /api/connect/following/:userId` - List users followed by a user.

### Matching (`/api/matches`)
- `GET /api/matches/potential?targetRole=mentor|mentee` - Fetch ranked mentor or mentee recommendations.
- `POST /api/matches/request` - Send a mentorship connection request.
- `GET /api/matches/my-connections` - List active connections and pending requests.
- `PUT /api/matches/status` - Accept or decline a mentorship connection request.

### Chat & Real-Time Messaging (`/api/chat`, `/api/messages`, Socket.IO)
- `GET /api/chat/search?q=` - Search users to initiate a chat request.
- `GET /api/chat/requests` - Fetch pending incoming and outgoing chat requests.
- `POST /api/chat` - Request or open a chat conversation with a user.
- `GET /api/chat` - List all accepted chat conversations.
- `PUT /api/chat/:chatId/request-status` - Accept or decline a chat request.
- `POST /api/messages/send` - Send a message to an accepted chat.
- `GET /api/messages/:chatId` - Retrieve message history for an accepted chat.
- `Socket: addUser` - Client event to register connected user ID.
- `Socket: joinRoom` - Client event to subscribe to a chat room.
- `Socket: newMessage` - Bidirectional event to deliver and broadcast messages within a room.
- `Socket: typing` / `stopTyping` - Bidirectional events to broadcast typing status in a room.

### Tasks & Goals (`/api/goals`)
- `GET /api/goals` - Retrieve personal goals and assigned tasks for current user.
- `POST /api/goals` - Create a self goal or assign a task to an accepted mentee.
- `GET /api/goals/assigned` - List tasks assigned by the mentor to mentees.
- `GET /api/goals/assignable-mentees` - Retrieve accepted mentees eligible for task assignment.
- `PUT /api/goals/:id` - Mark task completed and award gamification points.
- `DELETE /api/goals/:id` - Delete personal goal or mentor-assigned task.

### Leaderboard (`/api/leaderboard`)
- `GET /api/leaderboard` - Retrieve top students ranked by total dynamic score.

<!-- Screenshots: Add platform screenshots here -->
