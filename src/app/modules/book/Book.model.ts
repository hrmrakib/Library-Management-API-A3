import mongoose, { Model } from "mongoose";
import { Genre, IBook } from "./Book.interface";

const bookSchema = new mongoose.Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      enum: Object.values(Genre),
      required: true,
    },
    isbn: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    copies: {
      type: Number,
      required: true,
      min: 0,
    },
    available: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

bookSchema.methods.updateAvailability = async function () {
  this.available = this.copies > 0;
};

bookSchema.pre("save", function (next) {
  this.available = this.copies > 0;
  next();
});

const Book: Model<IBook> = mongoose.model<IBook>("Book", bookSchema);
export default Book;
