import { Router, Request, Response } from "express";
import { User, CreateUserRequest, ApiResponse } from "../types";

const router = Router();

router.get("/", (req: Request, res: Response<ApiResponse<User[]>>) => {
  const users: User[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      createdAt: new Date().toISOString(),
    },
  ];

  res.json({
    success: true,
    data: users,
  });
});

router.post(
  "/",
  (
    req: Request<{}, {}, CreateUserRequest>,
    res: Response<ApiResponse<User>>
  ) => {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: "Name and email are required",
      });
    }

    const newUser: User = {
      id: Date.now(),
      name,
      email,
      createdAt: new Date().toISOString(),
    };

    return res.status(201).json({
      success: true,
      data: newUser,
    });
  }
);

export default router;
