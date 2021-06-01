import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
      maxLength: [20, "Character limit for name is 20"],
    },
    account: {
      type: String,
      required: [true, "Please add your email or phone"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      trim: true,
    },
    avatar: {
      type: String,
      default:
        "https://staticg.sportskeeda.com/editor/2021/01/2341d-16121122234769-800.jpg",
    },
    role: {
      type: String,
      default: "user",
    },
    type: {
      type: String,
      default: "normal",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
