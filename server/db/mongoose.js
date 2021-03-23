// Directory - server/db/mongoose.js

const mongoose = require("mongoose");

const MONGODB_URL =
  "mongodb+srv://534L:534L@cluster0.qrzbw.mongodb.net/bookInfoDevEnvDb?retryWrites=true&w=majority";

module.exports = () =>
  mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
