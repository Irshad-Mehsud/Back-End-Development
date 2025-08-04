import express from 'express';
import postUser from './post.js'; // Adjust the import path as necessary
import getUser from './get.js'; // Adjust the import path as necessary
import deleteUser from './delete.js'; // Adjust the import path as necessary
import updateUser from './update.js';
const router = express.Router();

router.post("/", postUser);
router.get('/', getUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

export default router;