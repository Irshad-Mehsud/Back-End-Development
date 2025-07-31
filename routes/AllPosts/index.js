import express from 'express';
import AllPost from './post.js';
import getAllPosts from './get.js'; 
const router = express.Router();

router.post("/", AllPost);
router.get('/', getAllPosts);

export default router;