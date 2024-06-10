import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TLogin } from "./auth.interface";
import bcrypt from 'bcrypt';

const loginUser = async (payLoad: TLogin) => {
  //   const result;
  
const isUserExists = await User.findOne({id: payLoad.id})


if(!isUserExists){
  throw new AppError(httpStatus.NOT_FOUND, "This user is not found")
}

if(isUserExists.isDeleted){
  throw new AppError(httpStatus.FORBIDDEN, "This user is deleted")
}
if(isUserExists.status === 'blocked'){
  throw new AppError(httpStatus.FORBIDDEN, "This user is blocked")
}

const match = await bcrypt.compare(payLoad.passward, isUserExists.password);
if(!match){
  throw new AppError(httpStatus.NOT_FOUND, "User name or password is worng")
}

  return;
};

export const AuthService = {
  loginUser,
};
