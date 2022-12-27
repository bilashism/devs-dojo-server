const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const { json } = require("express");
const app = express();
const port = process.env.PORT || 5000;

// using cors to resolve cors issues
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

// Connection URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_CLUSTER_URL}/?retryWrites=true&w=majority`;

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});

async function run() {
  try {
    const db = client.db("devsDojo");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// // single course data
// app.get("/course/:id", (req, res) => {
//   const courseId = req.params.id;
//   const course = courses.find(course => course.id === courseId);
//   res.send(course);
// });
