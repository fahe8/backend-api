import { UsuarioRepository } from "../../Usuarios/repository/UsuarioRepository.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export class AuthService {
  static async iniciarSesion(loginData) {
    const { email, password } = loginData;

    const usuario = await UsuarioRepository.obtenerUsuarioPorEmail(email);
    bcrypt;
    const esContrasenaCorrecta = await bcrypt.compare(
      password,
      usuario.password
    );
    if (!esContrasenaCorrecta) {
      throw new Error("Contraseña Incorrecta");
    }

    // const token = jwt.sign();
    return usuario;
  }
}
