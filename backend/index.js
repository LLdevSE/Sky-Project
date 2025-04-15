import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import studentRouter from './routes/studentRouter.js';
import itemRouter from './routes/itemsRouter.js';
import userRouter from './routes/userRouter.js';
import { loginUser } from './controllers/userController.js';

const app = express();

mongoose.connect("mongodb+srv://admin:admin1234@cluster0.cvatdig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(
  () => {
    console.log("connected to the database.");
  }
).catch(
  () => {
    console.log("connection failed.")
  }
)

app.use(bodyParser.json());

app.use("/api/student", studentRouter);

app.use("/api/items", itemRouter);

app.use("/api/user", userRouter);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



