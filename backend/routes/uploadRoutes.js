import express from 'express';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../utils/cloudinary.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'campus_matrix_profiles',
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
  },
});

const upload = multer({ storage });

router.post('/', verifyToken, upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No image provided" });
  }

  console.log("Cloudinary Upload Success via Multer Engine:", req.file.path);
  res.status(200).json({ imageUrl: req.file.path });
});

export default router;
