import { Request, Response } from "express";
import Book from "./Book.model";

export const createBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.create(req.body);

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      book,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Failed to create book",
      error,
    });
  }
};

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find({});

    res.status(200).json({
      success: true,
      message: "Books retrieved successfully",
      books,
    });
  } catch (error) {}
};
