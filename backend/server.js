const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URL = process.env.MONGO_URL || "mongodb://mongodb:27017/server_monitor";
const DB_NAME = "server_monitor";
const COLLECTION = "readings";

let col;

async function connectMongo() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();

  const db = client.db(DB_NAME);
  col = db.collection(COLLECTION);

  await col.createIndex({ timestamp: -1 });

  console.log("✅ Mongo connected:", MONGO_URL);
}

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.get("/latest", async (req, res) => {
  const doc = await col.find().sort({ timestamp: -1 }).limit(1).toArray();
  res.json(doc[0] || null);
});

app.get("/data", async (req, res) => {
  const limit = Math.min(parseInt(req.query.limit || "120", 10), 500);
  const docs = await col.find().sort({ timestamp: -1 }).limit(limit).toArray();
  res.json(docs.reverse()); // oldest -> newest for charts
});

connectMongo()
  .then(() => {
    app.listen(4000, () => {
      console.log("✅ API running on http://localhost:4000");
    });
  })
  .catch((err) => {
    console.error("❌ Mongo connection failed:", err);
    process.exit(1);
  });
