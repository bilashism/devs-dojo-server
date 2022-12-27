import { config } from "dotenv";
import express, { json } from "express";
import cors from "cors";
import courses from "./routes/courses.js";

config();
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
app.use("/courses", courses);
