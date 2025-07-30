import express from 'express';
import router from './routes/index.js'; // Adjust the import path as necessary
const app = express();
const PORT = 3000;
// Middleware to parse JSON request bodies
app.use(express.json());


app.use("/api",router)

// app.post("/user", (req, res) => {
//     console.log("User POST request received:", req.body);
//     res.status(200).send("User POST request processed successfully");
// })

app.listen(PORT,()=>{
    console.log(`Sever is running on http://localhost:${PORT}`);
})