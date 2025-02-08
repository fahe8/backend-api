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
    const { nombre, horaApertura, horaCierre, activo, usuarioId } = empresa;

    const [result] = await pool.query(
      "INSERT INTO empresa (nombre, horaApertura, horaCierre, activo, usuarioId) VALUES (?,?,?,?,?)",
      [nombre, horaApertura, horaCierre, activo, usuarioId]
    );
    return result.insertId;
  }
}
