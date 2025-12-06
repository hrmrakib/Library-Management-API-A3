import express from "express";
import bookRoutes from "./app/modules/book/Book.route";
import borrowRoutes from "./app/modules/borrow/Borrow.route";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/books", bookRoutes);
app.use("/api/borrow", borrowRoutes);

export default app;
