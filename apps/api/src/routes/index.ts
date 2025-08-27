import { Router } from "express";
import usersRouter from "./users";

const router = Router();

// Mount routes
router.use("/users", usersRouter);

export default router;
