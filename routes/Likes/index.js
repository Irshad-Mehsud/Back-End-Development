import express from 'express';
import getLikes from './get.js'; // Adjust the import path as necessary
import postLikes from './post.js'; // Adjust the import path as necessary

const router = express.Router();

router.post("/", postLikes);
router.get('/', getLikes);

export default router;