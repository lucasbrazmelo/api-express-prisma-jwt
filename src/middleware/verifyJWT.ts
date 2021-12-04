import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const config = dotenv.config();

export async function verifyJWT(req: express.Request,res: express.Response,next: express.NextFunction) {
  let token = <string>req.headers["authorization"];

  if (!token)
    return res.status(401).json({ auth: false, message: "No token provided." });

  try {
    res.locals.jwtPayload = <any>jwt.verify(token.split(" ")[1], "123456");
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ auth: false, message: "Failed to authenticate token." });
  }
}

export async function loginJWT(request: express.Request,response: express.Response) {
  if (request.body.userId && request.body.password){
    let user: object | null  = await prisma.usuarios.findFirst({
      where: {
        email: request.body.userId,
        senha: request.body.password
      },
      select: {
        email: true,
        nome: true,
        id: true
      }
    });
    if(user){
      const token = jwt.sign({ user:user }, "123456", {expiresIn: 300});
      return response.json({ auth: true, token: token });
    }
  }
  return response.status(500).json({ message: "Login inválido!" });
}
