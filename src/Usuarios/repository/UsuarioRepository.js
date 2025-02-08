import { pool } from "../../config/db.js";

export class UsuarioRepository {
  static async obtenerTodosUsuarios() {
    const [rows] = await pool.query("SELECT * FROM usuario");
    return rows;
  }
  static async obtenerUsuarioPorId(id) {
    const [rows] = await pool.query("SELECT * FROM usuario WHERE id = ?", [id]);
    return rows[0];
  }

  static async crearUsuario(usuario) {
    const { nombre, email, password, rol } = usuario;

    const [result] = await pool.query(
      "INSERT INTO usuario (nombre,email,password,rol) VALUES (?,?,?,?)",
      [nombre, email, password, rol]
    );
    return result.insertId;
  }
}
