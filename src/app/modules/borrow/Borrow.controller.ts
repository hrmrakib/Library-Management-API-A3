import { Request, Response } from "express";
import Borrow from "./Borrow.model";

export const borrowBook = async (req: Request, res: Response) => {
  try {
    const borrow = await Borrow.create(req.body);

    res.status(201).json({
      success: true,
      message: "Book borrowed successfully",
      borrow,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to borrow book",
      error,
    });
  }
};

