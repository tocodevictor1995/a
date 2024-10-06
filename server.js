const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', require ('/routes')); 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)});
    
    
    
    
    
    const { initDb } = require('/data/db');
    const contactsRoutes = require('/routes/contacts');
    require('dotenv').config();
    
    
    
    app.use(express.json());
    
    app.use('/contacts', contactsRoutes);
    
    app.get('/', (req, res) => {
      res.send('Hello World!');
    });
    
    initDb((err) => {
      if (err) {
        console.log(err);
      } else {
        
        });
      }
    });