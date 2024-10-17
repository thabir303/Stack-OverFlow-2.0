const express = require('express');
const multer = require('multer');
const { createPost, getPosts } = require('../controllers/postController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const path = require('path');

// Multer configuration for local file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename with extension
  },
});

const upload = multer({ storage });

const router = express.Router();

router.post('/', authMiddleware, upload.single('snippet'), createPost);
router.get('/', authMiddleware, getPosts);

module.exports = router;

