import { Router } from "express";
import { createUser, getUserByID, getUsers } from "../controllers/user.controller.js";

const userRouter= new Router();

userRouter.get("/api/users",getUsers)

userRouter.get("/api/user/:ID",getUserByID)

userRouter.post("/api/user",createUser)


export default userRouter;