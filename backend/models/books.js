import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    author: String
})

const Book = mongoose.model("books", booksSchema);
export default Book;