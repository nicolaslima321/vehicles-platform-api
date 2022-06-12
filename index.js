import express from 'express';
import dotenv from 'dotenv/config.js';
import databaseInstance from './config/database.js';

import DriverRepository from '/src/models/driver.js';

const app = express()
const port = 8080;

databaseInstance
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use(express.json());
// app.use(routes);

app.get('/', async (req, res) => {
  const drivers = await DriverRepository.findAll();
  console.log(drivers);

  res.json(drivers);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
