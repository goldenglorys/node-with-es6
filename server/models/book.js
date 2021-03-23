const mongoose = require("mongoose");
const validator = require("validator");

// Define the schema:
const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  isbn: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isISBN(value)) {
        throw new Error("ISBN is invalid.");
      }
    },
  },
  author: {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
  },
  publishingDate: {
    type: String,
  },
  finishedReading: {
    type: Boolean,
    required: true,
    default: false,
  },
});

// Create the "Book" model of name Book with schema bookSchema.
const Book = mongoose.model("Book", bookSchema);

// Provide the model as a default export.
module.exports = Book;
