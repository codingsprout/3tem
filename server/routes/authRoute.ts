import express from "express";
import authControl from "../controllers/authControl";
import { validRegister } from "../middleware/validity";

const router = express.Router();

router.post("/register", validRegister, authControl.register);

export default router;
