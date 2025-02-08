import { pool } from "../../config/db.js";

export class CanchaRepository {
  static async obtenerTodasCanchas() {
    const [rows] = await pool.query("SELECT * FROM cancha");
    return rows;
  }

  static async obtenerCanchaPorId(id) {
    const [rows] = await pool.query("SELECT * FROM cancha WHERE id = ?", [id]);
    return rows[0];
  }

  static async crearCancha(cancha) {
    const { nombre, activo, empresaId } = cancha;

    const [result] = await pool.query(
      "INSERT INTO cancha (nombre, activo, empresa_id) VALUES (?, ?, ?)",
      [nombre, activo, empresaId]
    );
    return result.insertId;
  }
}
