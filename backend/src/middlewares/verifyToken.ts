import { NextFunction, Request, Response } from "express";
import jwt, { JsonWebTokenError } from "jsonwebtoken";
import { ENV } from "../lib/env";

export interface AuthRequest extends Request {
  _id?: string;
}

export const verifyToken = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send({ message: "You are unauthorized" });
  }
  jwt.verify(
    token,
    ENV.JWT_SECRET,
    (err: JsonWebTokenError | null, data: any) => {
      if (err) {
        return res.status(401).send({ message: "You are unauthorized" });
      }
      req._id = data._id;
      next();
    }
  );
};
