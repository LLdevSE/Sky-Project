import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import verifyJWT from "./middlewares/auth.js";
import orderRouter from "./routes/orderRouter.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();

app.use(cors());

//Mongodb connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to the database.");
  })
  .catch(() => {
    console.log("connection failed.");
  });

//Middlewares
app.use(bodyParser.json());
app.use(verifyJWT);

//Routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);

//Server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
