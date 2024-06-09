import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import config from "../../config";
import bcrypt from "bcrypt";

const userSchema = new Schema<TUser>(
  {
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    needsPasswordCheck: { type: Boolean, default: true },
    role: { type: String, enum: ["admin", "student", "faculty"] },
    status: { type: String, enum: ["in-progrees", "blocked"] },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const user = this; // doc

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

// set '' after saving password
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

export const User = model<TUser>("User", userSchema);
