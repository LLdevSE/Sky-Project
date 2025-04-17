import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import jwt, { decode } from "jsonwebtoken";
import productRouter from './routes/produtRouter.js';


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
app.use(bodyParser.json()); // Parse JSON request bodies

//  URL-encoded request bodies
app.use(
  (req, res, next) => {
    const header = req.header("Authorization");
    if (header != null) {
      const token = header.replace("Bearer ", "");
      jwt.verify(token, "sample1234", (err, decoded) => {
        if (decode != null) {
          req.user = decoded;
        }
      })
    }
    next();
  }
)


//Routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

//Server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



