import express from 'express';
import postUser from './post.js'; // Adjust the import path as necessary
import getUser from './get.js'; // Adjust the import path as necessary
const router = express.Router();

router.post("/", postUser);
router.get('/', getUser);

export default router;