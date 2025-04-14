import Book from "../models/books.js";

export function getAllBooks(req, res) {
    Book.find().then(
        (books) => {
            res.json(books);
        }
    ).catch(
        () => {
            res.json({
                message: "not found"
            })
        }
    )
}

export function saveBooks(req, res) {
    const book = new Book(req.body)
    book.save().then(
        () => {
            res.json({
                message: "book saved"
            })
        }
    ).catch(
        () => {
            res.json({
                message: "save ERROR."
            })
        }
    )
}