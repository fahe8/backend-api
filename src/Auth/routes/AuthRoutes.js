import express from "express";
import { AuthController } from "../controllers/AuthController.js";

const router = express.Router();
router.post("/", AuthController.iniciarSesion);

export default router;
