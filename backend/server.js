import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser'; // ✅ NEW
import authRoutes from './routes/authRoutes.js'; // ✅ Add this line

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // ✅ Your frontend port
  credentials: true               // ✅ Important for cookies
}));

app.use(cookieParser());          // ✅ NEW
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes); // ✅ Register routes

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
