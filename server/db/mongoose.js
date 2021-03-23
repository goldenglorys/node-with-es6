// Directory - server/db/mongoose.js

// It’s not scalable or efficient conjucting db connection in the api file. When we write unit tests for this API,
// the unit tests are going to use their own test data(or fixtures) on their own test databases.
// So, we want a way to be able to create connections for different purposes — some for testing
// environments(that we can spin up and tear down at will), others for development environments, and others for production
// environments.To do that, we’ll build a factory.

const mongoose = require("mongoose");

const MONGODB_URL =
  "mongodb+srv://534L:11NXC4WnKjRDf7Ly@cluster0.qrzbw.mongodb.net/bookInfo?retryWrites=true&w=majority";

module.exports = () =>
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err.message);
    });

// The benefits of making our connection as a function are that we can call that function later in
// code to connect to the database from files aimed at production and those aimed at local and
// remote integration testing both on - device and with a remote CI / CD pipeline / build server.
