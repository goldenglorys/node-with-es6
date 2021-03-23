const express = require("express");
const app = express();

const PORT = 3000;

// Our middleware function.
const myMiddleware = (req, res, next) => {
  console.log(`Middleware has fired at time ${Date().now}`);
  next();
};

// Tell Express to use the middleware.
app.use(myMiddleware);

// This middleware will put the data on an object called body available on req
app.use(express.urlencoded({ extended: true }));

// Another type of middleware provided by express is express.json()
// used to package any JSON Payloads sent up in a request from the client onto req.body,
// while express.urlencoded will package any incoming requests with strings, arrays, or other URL Encoded data onto req.body.
// In short, both manipulate req.body, but.json() is for JSON Payloads and.urlencoded() is for, among others, POST Query Parameters.

app.get("/my-test-route", (undefined, res) => {
  console.log("A GET Request was made to /my-test-route.");
  res.send("<h1>Hello, World!</h1>");
});

app.post("/email-list", (req, res) => {
  console.log("User Name: ", req.body.nameInput);
  console.log("User Email: ", req.body.emailInput);
});

app.listen(PORT, () => console.log(`Server is up on port ${PORT}.`));
