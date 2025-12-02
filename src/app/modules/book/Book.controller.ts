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

export const getSingleBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findById(req.params.id);

    res.status(200).json({
      success: true,
      message: "Book retrieved successfully",
      book,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to retrieve book",
      error,
    });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      book,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update book",
      error,
    });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      book,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to delete book",
      error,
    });
  }
};
