import express from 'express';
import router from './routes/index.js'; // Adjust the import path as necessary
import mongoose from './db/index.js'; // Import the mongoose instance
import cors from "cors";


const app = express();
app.use(cors());
const PORT = 4000;
// Middleware to parse JSON request bodies
app.use(express.json());


app.use("/api",router)

// app.post("/user", (req, res) => {
//     console.log("User POST request received:", req.body);
//     res.status(200).send("User POST request processed successfully");
// })
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err)
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB')
});
app.listen(PORT,()=>{
    console.log(`Sever is running on http://localhost:${PORT}`);
})