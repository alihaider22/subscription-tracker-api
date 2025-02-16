import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ title: "Get all Users" });
});

userRouter.get("/:id", (req, res) => {
  res.send({ title: "Get User by ID" });
});

userRouter.post("/", (req, res) => {
  res.send({ title: "Create new User" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ title: "Update User by ID" });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ title: "Delete User by ID" });
});

export default userRouter;
