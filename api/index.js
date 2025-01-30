import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
dotenv.config();



const app=express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log('connected to MongoDB');
})
.catch((error)=>{
  console.log('Error connecting to MongoDB:',error)
})

app.listen(3000,()=>{
  console.log('server is running on port 3000 ');
})

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);