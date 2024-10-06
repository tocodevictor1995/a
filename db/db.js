const { MongoClient } = require('mongodb');

let _db;

const initDb = async (callback) => {
  if (_db) {
    console.log('Database is already initialized!');
    return callback(null, _db);
  }
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    _db = client.db('contacts');
    callback(null, _db);
  } catch (err) {
    callback(err);
  }
};

const getDb = () => {
  if (!_db) {
    throw Error('Database not initialized');
  }
  return _db;
};

module.exports = { initDb, getDb };