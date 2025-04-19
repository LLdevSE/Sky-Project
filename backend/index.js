import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import verifyJWT from './middlewares/auth.js';
import orderRouter from './routes/orderRouter.js';



const app = express();

//Mongodb connection
mongoose.connect("mongodb+srv://admin:admin1234@cluster0.cvatdig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(
  () => {
    console.log("connected to the database.");
  }
).catch(
  () => {
    console.log("connection failed.")
  }
)

//Middlewares
app.use(bodyParser.json());
app.use(verifyJWT);


//Routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);

//Server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



