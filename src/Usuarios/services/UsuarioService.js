import { UsuarioRepository } from "../repository/UsuarioRepository.js";

export class UsuarioService {
  static async obtenerTodosUsuarios() {
    return await UsuarioRepository.obtenerTodosUsuarios();
  }
  static async obtenerUsuarioPorId(id) {
    return await UsuarioRepository.obtenerUsuarioPorId(id);
  }

  static async crearUsuario(usuarioData) {
    return await UsuarioRepository.crearUsuario(usuarioData);
  }
}
