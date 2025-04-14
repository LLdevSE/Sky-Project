import express from 'express';
import { getAllItems, saveItems } from '../controllers/itemsController.js';

const itemRouter = express.Router();

itemRouter.get("/", getAllItems);
itemRouter.post("/", saveItems);

export default itemRouter;