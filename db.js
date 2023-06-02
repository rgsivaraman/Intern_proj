const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017'; // Replace with your MongoDB connection string
const dbName = 'your-database-name'; // Replace with your database name

let db;

async function connect() {
  const client = new MongoClient(url, { useUnifiedTopology: true });
  await client.connect();
  db = client.db(dbName);
}

function getDb() {
  return db;
}

module.exports = { connect, getDb };
