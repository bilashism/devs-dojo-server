const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// using cors to resolve cors issues
app.use(cors());

app.listen(port, () => {
  console.log("running on:", port);
});

// basic server setup
app.get("/", (req, res) => {
  res.send("Server running");
});

// courses data
const courses = require("./data/courses/courses.json");

app.get("/courses", (req, res) => {
  res.send(courses);
});
