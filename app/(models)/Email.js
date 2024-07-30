import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const emailSchema = new Schema(
  {
    // email: String,
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const Email = mongoose.models.Email || mongoose.model("Email", emailSchema);

export default Email;
