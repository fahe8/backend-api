import { pool } from "../../config/db.js";
export class EmpresaReporitory {
  static async obtenerTodosEmpresa() {
    const [rows] = await pool.query("SELECT * FROM empresa");
    return rows;
  }

  static async obtenerEmpresaPorId(id) {
    const [rows] = await pool.query("SELECT * FROM empresa WHERE id = ?", [id]);
    return rows[0];
  }

  static async crearEmpresa(empresa) {
    const [result] = pool.query(
      "INSERT INTO empresa (id, nombre, horaApertura, horaCierre, activo, usuarioId) VALUES (?,?,?,?,?)",
      [id, nombre, horaApertura, horaCierre, activo, usuarioId]
    );
    return result;
  }
}
