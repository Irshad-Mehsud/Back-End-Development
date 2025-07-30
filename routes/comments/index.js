import express from 'express';
import getComments from './get.js'; // Adjust the import path as necessary
import postComments from './post.js'; // Adjust the import path as necessary

const router = express.Router();

router.post("/", postComments);
router.get('/', getComments);

export default router;
