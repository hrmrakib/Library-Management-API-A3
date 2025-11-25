import mongoose, { Schema } from "mongoose";
import { IBorrow } from "./Borrow.interface";
import Book from "../book/Book.model";

const borrowSchema = new Schema<IBorrow>(
  {
    book: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, "Quantity must be at least 1"],
    },
    dueDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

borrowSchema.pre("save", async function (next) {
  const book = await Book.findById(this.book);
  if (!book) {
    return next(new Error("Book not found"));
  }

  if (book.copies < this.quantity) {
    return next(new Error("Not enough copies available"));
  }

  book.copies -= this.quantity;
  await book.save();
  next();
});

const Borrow = mongoose.model<IBorrow>("Borrow", borrowSchema);
export default Borrow;
