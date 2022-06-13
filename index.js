import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv/config.js';
import databaseInstance from './config/database.js';

import router from './src/router.js';

const app = express()

app.use(cors())

const port = 4444;

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

app.listen(port);
