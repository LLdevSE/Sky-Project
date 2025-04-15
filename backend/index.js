import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import studentRouter from './routes/studentRouter.js';
import itemRouter from './routes/itemsRouter.js';

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

app.use("/student", studentRouter);

app.use("/items", itemRouter);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



