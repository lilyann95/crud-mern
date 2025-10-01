import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true, Unique: true },
  password: { type: Password, required: true },
  addressLine: { type: String, required: true },
  zipCode: { type: String, required: true },
  city: { type: String, required: true },
});

const userModel = mongoose.models.users || mongoose.model("users", userSchema);

export default userModel;
