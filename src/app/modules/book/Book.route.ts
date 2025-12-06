import { Router } from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getSingleBook,
  updateBook,
} from "./Book.controller";

const router = Router();

router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/:bookId", getSingleBook);
router.put("/:bookId", updateBook);
router.delete("/:bookId", deleteBook);

export default router;
