import express from 'express';
import { addStudents, deleteStudents, getAllStudents, search, updateStudents } from '../controllers/studentController.js';


const studentRouter = express.Router();

studentRouter.get("/", getAllStudents);

studentRouter.post("/", addStudents);

studentRouter.put("/", updateStudents);

studentRouter.delete("/", deleteStudents);

studentRouter.get("/search", search);

export default studentRouter;

