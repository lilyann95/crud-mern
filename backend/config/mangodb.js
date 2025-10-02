import mongoose from "mongoose";

const connectMongoDB = () => {
  mongoose.connection.on("connected", () => {
    console.log("DB Connected");
  });

  mongoose.connect(`${process.env.MANGODB_URI}/bookstore`, {
    autoIndex: true,
  });
};

export default connectMongoDB;
