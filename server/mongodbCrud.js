// Getting the module from node_modules.
const express = require("express");

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
app.post("/books", (req, res) => {
  // ...
  console.log("A POST Request was made!");
});

// HTTP GET /books/:id
app.get("/books/:id", (req, res) => {
  // ...
  console.log(`A GET Request was made! Getting book ${req.params.id}`);
});

// HTTP PATCH /books/:id
app.patch("/books/:id", (req, res) => {
  // ...
  console.log(`A PATCH Request was made! Updating book ${req.params.id}`);
});

// HTTP DELETE /books/:id
app.delete("/books/:id", (req, res) => {
  // ...
  console.log(`A DELETE Request was made! Deleting book ${req.params.id}`);
});

// Binding our application to port 3000.
app.listen(PORT, () => console.log(`Server is up on port ${PORT}.`));
