import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: { type: Number, required: true },
  description: { type: String, required: true },
});

const bookModel = mongoose.models.books || mongoose.model("books", bookSchema);

export default bookModel;
