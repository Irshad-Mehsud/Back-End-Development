import express from "express";
import joi from "joi";
import { bookSchema } from "./Schema/index.js";

const app = express();
const PORT = 8000;

// Middleware to parse JSON
app.use(express.json());

// In-memory book storage
const BookDetails = [];

// POST: Add a new book
app.post("/bookdetail", async (req, res) => {
  try {
    await bookSchema.validateAsync(req.body);

    const newBook = {
      ...req.body,
      id: Date.now().toString(36),
    };

    BookDetails.push(newBook);
    console.log("✅ Book Added:", newBook);

    res.status(201).send("Book Added Successfully");
  } catch (error) {
    console.error("❌ Validation error:", error.message);
    res.status(400).json({ error: error.message });
  }
});

// GET: Retrieve all books
app.get("/bookdetail", (req, res) => {
  res.status(200).json(BookDetails);
});

// PUT: Update a book by ID
app.put("/bookdetail/:id", (req, res) => {
  const { id } = req.params;
  const index = BookDetails.findIndex((book) => book.id === id);

  if (index === -1) {
    return res.status(404).send("Book not found");
  }

  // Optionally validate the body again with bookSchema if required
  BookDetails[index] = { ...req.body, id }; // Maintain original ID
  console.log("✅ Book Updated:", BookDetails[index]);

  res.send("The Book Detail is updated successfully.");
});

// DELETE: Delete a book by ID
app.delete("/bookdetail/:id", (req, res) => {
  const { id } = req.params;
  const index = BookDetails.findIndex((book) => book.id === id);

  if (index === -1) {
    return res.status(404).send("Book not found");
  }

  BookDetails.splice(index, 1);
  console.log("🗑️ Book Deleted with ID:", id);
  res.send("The Book Detail is deleted successfully.");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at: http://localhost:${PORT}`);
});
