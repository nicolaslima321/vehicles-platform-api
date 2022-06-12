import express from 'express';
import dotenv from 'dotenv/config.js';
import databaseInstance from './config/database.js';

import router from './src/router.js';

const app = express()
const port = 8080;

databaseInstance.authenticate()
  .then(() => {
    console.log('[SERVER] Connection has been established successfully.');
  })
  .catch(error => {
    console.error('[SERVER] Unable to connect to the database:', error);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
