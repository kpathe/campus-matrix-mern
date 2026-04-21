import express from 'express';
import multer from 'multer';
import streamifier from 'streamifier';
import cloudinary from '../utils/cloudinary.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', verifyToken, upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No image provided" });
  }

  const uploadStream = cloudinary.uploader.upload_stream(
    { folder: 'campus_matrix_profiles' },
    (error, result) => {
      if (error) {
        console.error("Cloudinary Upload Error:", error);
        return res.status(500).json({ message: "Cloudinary upload failed" });
      }
      res.status(200).json({ imageUrl: result.secure_url });
    }
  );

  streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
});

export default router;
