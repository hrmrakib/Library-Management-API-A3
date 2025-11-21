import mongoose from "mongoose";
import config from "../config";

export async function connectDB() {
  console.log("Connecting to DB");
  await mongoose.connect(config.DATABASE_URL as string);
  console.log("Connected to DB");
}
