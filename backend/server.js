import express from "express";
import cors from "cors";
import "dotenv/config";
import bookRoute from "./routes/bookRoute.js";
import authRoute from "./routes/authRoute.js";
import connectMongoDB from "./config/mangodb.js";

//app config
const app = express();
const port = process.env.PORT || 4000;
connectMongoDB();

//middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/auth", authRoute);
app.use("/api/books", bookRoute);
app.get("/", (req, res) => {
  res.send("API2 is working");
});

//server start
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
