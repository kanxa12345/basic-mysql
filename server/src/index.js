const express = require("express");
const userRoute = require("./routes/userRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(userRoute);
require("dotenv").config();

const connection = require("./db/connection");
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  connection.connect((err) => {
    if (err) throw err;
    console.log("Database connected");
  });
});
