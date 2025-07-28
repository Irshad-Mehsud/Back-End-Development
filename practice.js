import express from "express";
import joi from "joi";
import { bookSchema } from "./Schema/index.js";
const app = express();
const PORT = 8000;

// Middleware to parse JSON
app.use(express.json());

// In-memory book storage
const BookDetails = [];

// POST route: Add new book
app.post("/bookdetail", async (req, res) => {
  try {
    await bookSchema.validateAsync(req.body);

    const newBook = {
      ...req.body,
      id: Date.now().toString(36),
    };

    BookDetails.push(newBook);
    console.log("Book Added:", newBook);

    res.status(201).send("Book Added Successfully");
  } catch (error) {
    console.error("Validation error:", error.message);
    res.status(400).json({ error: error.message }); // 👈 this returns detailed feedback
  }
});



// GET route: Get all books
app.get("/bookdetail", (req, res) => {
  res.send(BookDetails);
});

// PUT route: Update a book by ID
app.put("/bookdetail/:id", (req, res) => {
  const id = req.params.id;
  console.log("Book ID to update:", id); // 🟢 Debug log
  console.log("Current Books:", BookDetails); // 🟢 Debug log
  const index = BookDetails.findIndex((book) => book.id === id);
  if (index === -1) {
    return res.status(404).send("Book not found");
  }
  BookDetails[index] = { ...req.body, id }; // Keep the same ID
  console.log("Book Updated:", BookDetails[index]); // 🟢 Debug log
  res.send("The Book Detail is updated successfully.");
});

app.delete("/bookdetail/:id",(req,res)=>{
const id=req.params.id;
const index=BookDetails.findIndex((book)=>book.id === id);
BookDetails.splice(index,1);
res.send("The Book Detail is deleted successfully.");
})

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Your server is running on http://localhost:${PORT}`);
});
