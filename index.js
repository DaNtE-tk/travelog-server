import express from 'express';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

import cors from 'cors';

app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use(express.json({limit:"30mb", extended:true}));

app.use('/posts',postRoutes);

//mongodb-cloud->atlas

const PORT = process.env.PORT||5000;

const connection_url = process.env.CONNECTION_URL
mongoose.connect(connection_url)
    .then(()=>app.listen(PORT,()=> console.log(`<---------Server running on port : ${PORT}-------------->`)))
    .catch((error)=> console.log(error.message));


// mongoose.set('userFindAndModify',false);
mongoose.set('strictQuery', false);


