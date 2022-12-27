const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// Connection URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_CLUSTER_URL}/?retryWrites=true&w=majority`;

/* Creating a new MongoClient object. */
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});

/**
 * It connects to the database
 */
const connectToDb = async () => await client.connect();
/* Creating a new database object. */
const db = client.db(`${process.env.DB_NAME}`);
/**
 * It closes the connection to the database.
 */
const closeDbConnection = async () => await client.close();

/* Exporting the functions to be used in other files. */
module.exports = { connectToDb, db, closeDbConnection, ObjectId };
