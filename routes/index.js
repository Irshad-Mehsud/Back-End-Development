import express from 'express';
import user from './user/index.js'; // Adjust the import path as necessary
import comments from './comments/index.js'; // Adjust the import path as necessary
import AllPosts from './AllPosts/index.js'; // Adjust the import path as necessary
const router = express.Router();
// These are all the routes for the application
// You can add more routes here as needed
router.use("/user", user );
router.use("/comments", comments);
router.use("/AllPosts", AllPosts);
export default router;