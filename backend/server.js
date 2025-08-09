import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ConnectDB from './config/db.js';
import postRouter from './routers/postRouters/postRouter.js'
import loginRouter from './routers/userRouters/loginRouter.js'
import signUpRouter from './routers/userRouters/signUpRouter.js'




dotenv.config();

const app= express();
app.use(cors());

app.use(express.json())


app.use('/users/login',loginRouter)
app.use('/users/register',signUpRouter)
app.use('/users/post',postRouter)

app.listen(process.env.PORT,()=>{
    ConnectDB()
    console.log(`Server is running on port ${process.env.PORT}`)
})