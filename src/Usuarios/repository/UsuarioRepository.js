import { Usuario } from "../../models/Usuario.js";

export class UsuarioRepository {
  static async obtenerTodosUsuarios() {
    return await Usuario.findAll(); // Equivalente a SELECT * FROM usuario
  }

  static async obtenerUsuarioPorId(id_usuario) {
    return await Usuario.findByPk(id_usuario); // Equivalente a SELECT * FROM usuario WHERE id_usuario = ?
  }

  static async crearUsuario(nombre, email, telefono, password, rol) {
    const nuevoUsuario = await Usuario.create({
      nombre,
      email,
      telefono,
      password,
      rol,
    });
    return nuevoUsuario.id_usuario; // Retorna el ID del usuario creado
  }

  static async iniciarSesion(email) {
    return await Usuario.findOne({ where: { email } }); // Busca el usuario por email
  }
}
