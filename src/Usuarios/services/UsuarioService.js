import jwt from "jsonwebtoken";
import { UsuarioRepository } from "../repository/UsuarioRepository.js";
import bcrypt from "bcrypt";
export class UsuarioService {
  static async obtenerTodosUsuarios() {
    return await UsuarioRepository.obtenerTodosUsuarios();
  }

  static async iniciarSesion(loginData) {
    const { email, password } = loginData;
    const usuario = await UsuarioRepository.inicairSesion(email, password);
    const esContrasenaCorrecta = await bcrypt.compare(
      password,
      usuario.password
    );
    if (!esContrasenaCorrecta) {
      throw new Error("Contraseña Incorrecta");
    }

    const token = jwt.sign();
    return usuario;
  }
  static async obtenerUsuarioPorId(id) {
    return await UsuarioRepository.obtenerUsuarioPorId(id);
  }

  static async crearUsuario(usuarioData) {
    const { nombre, email, telefono, password, rol } = usuarioData;
    const passwordEncriptada = await bcrypt.hash(password, 10);

    return await UsuarioRepository.crearUsuario(
      nombre,
      email,
      telefono,
      passwordEncriptada,
      rol
    );
  }
}
