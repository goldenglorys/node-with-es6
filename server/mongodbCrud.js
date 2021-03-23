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

// We will build our API here.
// ...

// Binding our application to port 3000.
app.listen(PORT, () => console.log(`Server is up on port ${PORT}.`));
