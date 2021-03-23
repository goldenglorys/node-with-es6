// Getting the module from node_modules.
const express = require("express");
const mongoose = require("mongoose");

// Database connection and model.
require("./db/mongoose")();
const Book = require("./models/book.js");

// This creates our Express App.
const app = express();

// Define middleware.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Listening on port 3000 (arbitrary).
// Not a TCP or UDP well-known port.
// Does not require superuser privileges.
const PORT = 3000;

// HTTP POST /books
app.post("/books", async (req, res) => {
  try {
    const book = new Book(req.body.book);
    await book.save();
    return res.status(201).send({ book });
  } catch (e) {
    console.log(e);
    if (e instanceof mongoose.Error.ValidationError) {
      return res.status(400).send({ error: "ValidationError" });
    } else {
      return res.status(500).send({ error: "Internal Error" });
    }
  }
});

// HTTP GET /books/:id
app.get("/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) return res.status(404).send({ error: "Not Found" });

    return res.send({ book });
  } catch (e) {
    if (e instanceof mongoose.Error.CastError) {
      return res.status(400).send({ error: "Not a valid ID" });
    } else {
      return res.status(500).send({ error: "Internal Error" });
    }
  }
});

// HTTP PATCH /books/:id
app.patch("/books/:id", async (req, res) => {
  const { id } = req.params;
  const { updates } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(id, updates, {
      runValidators: true,
      new: true,
    });

    if (!updatedBook) return res.status(404).send({ error: "Not Found" });

    return res.send({ book: updatedBook });
  } catch (e) {
    if (e instanceof mongoose.Error.CastError) {
      return res.status(400).send({ error: "Not a valid ID" });
    } else {
      return res.status(500).send({ error: "Internal Error" });
    }
  }
});

// HTTP DELETE /books/:id
app.delete("/books/:id", async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);

    if (!deletedBook) return res.status(404).send({ error: "Not Found" });

    return res.send({ book: deletedBook });
  } catch (e) {
    if (e instanceof mongoose.Error.CastError) {
      return res.status(400).send({ error: "Not a valid ID" });
    } else {
      return res.status(500).send({ error: "Internal Error" });
    }
  }
});

// Binding our application to port 3000.
app.listen(PORT, () => console.log(`Server is up on port ${PORT}.`));
