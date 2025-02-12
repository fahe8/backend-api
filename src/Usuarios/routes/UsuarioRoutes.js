import express from "express";
import { UsuarioController } from "../controllers/UsuarioController.js";

const router = express.Router();

router.get("/", UsuarioController.obtenerTodosUsuarios);
router.post("/login", UsuarioController.iniciarSesion);
router.post("/", UsuarioController.crearUsuario);

export default router;
