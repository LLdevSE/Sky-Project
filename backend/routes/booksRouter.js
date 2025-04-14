import express from 'express';
import { getAllBooks, saveBooks } from '../controllers/booksController.js';

const booksRouter = express.Router();

booksRouter.get("/", getAllBooks);
booksRouter.post("/", saveBooks);

export default booksRouter;

