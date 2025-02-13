import { AuthService } from "../services/AuthService.js";

export class AuthController {
  static async iniciarSesion(req, res) {
    try {
      const usuario = await AuthService.iniciarSesion(req.body);
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}
