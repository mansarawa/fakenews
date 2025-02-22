import express from 'express';

import cors from 'cors';
import dotenv from 'dotenv';

import http from 'http';
import { connectToDb } from './config/dbConfig.js';
import { addCategory } from './routes/Category.js';


dotenv.config();


const app = express();
const server = http.createServer(app);


app.use(cors());
app.use(express.json());
await connectToDb()
app.use('/',addCategory)

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
