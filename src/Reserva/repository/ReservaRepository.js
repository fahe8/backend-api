import { pool } from "../../config/db.js";

export class ReservaRepository {
  static async obtenerTodasReservas() {
    const [rows] = await pool.query("SELECT * FROM reserva");
    return rows;
  }

  static async obtenerReservaPorId(id) {
    const [rows] = await pool.query("SELECT * FROM reserva WHERE id = ?", [id]);
    return rows[0];
  }

  static async crearReserva(reserva) {
    const { fecha, horaInicio, horaFinal, canchaId } = reserva;

    const [result] = await pool.query(
      "INSERT INTO reserva (fecha, hora_inicio, hora_final, cancha_id) VALUES (?, ?, ?, ?)",
      [fecha, horaInicio, horaFinal, canchaId]
    );
    return result.insertId;
  }
}
