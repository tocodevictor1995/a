const express = require('express');
const { initDb } = require('./config/db');
const contactsRoutes = require('./routes/contacts');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/contacts', contactsRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT, (0.0.0.0/0) => {
      console.log(`Server running on port ${PORT}`);
    });
  }
});