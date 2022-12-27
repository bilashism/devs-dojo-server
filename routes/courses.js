import { db, ObjectId } from "../utilities/mongodb.js";
import { Router } from "express";

const coursesRouter = Router();

/* This is a route handler for the GET /courses route. It is using the MongoDB driver to query the
courses collection and return all the documents in the collection. */
coursesRouter.get("/", async (req, res) => {
  const query = {};
  const options = {};
  const coursesCollection = db.collection("courses");
  const courses = await coursesCollection.find(query, options).toArray();
  res.send(courses);
});

/* This is a route handler for the GET /courses/:id route. It is using the MongoDB driver to query the
courses collection and return the document with the specified id. */
coursesRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const options = {};
  const coursesCollection = db.collection("courses");
  const course = await coursesCollection.findOne(query, options);
  res.send(course);
});

export default coursesRouter;
