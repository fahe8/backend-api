import { UsuarioService } from "../Services/UsuarioService.js";

export class UsuarioController {
  static async obtenerTodosUsuarios(req, res) {
    try {
      const usuarios = await UsuarioService.obtenerTodosUsuarios();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener usuarios" });
    }
  }

  static async iniciarSesion(req, res) {
    try {
      const usuario = await UsuarioService.iniciarSesion(req.body);
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el usuario" });
    }
  }

  static async crearUsuario(req, res) {
    try {
      const usuarioId = await UsuarioService.crearUsuario(req.body);
      res.json(usuarioId);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
