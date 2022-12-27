const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const { json } = require("express");
const app = express();
const port = process.env.PORT || 5000;

// using middleware
app.use(cors());
app.use(json());

// localhost server setup
const server = app.listen(port, "localhost", () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`🌐 Running at: http://${host}:${port}`);
});

// basic server setup
app.get("/", (req, res) => {
  res.send("Server running");
});

// for courses route
const courses = require("./routes/courses");
app.use("/courses", courses);
