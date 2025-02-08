import express from "express";
import dotenv from "dotenv";
import routerUsuarios from "./src/Usuarios/routes/UsuarioRoutes.js";
import routerEmpresa from "./src/Empresa/routes/EmpresaRoutes.js";
import routerCancha from "./src/Cancha/routes/CanchaRoutes.js";
import routerReserva from "./src/Reserva/routes/ReservaRoutes.js";
import { pool } from "./src/config/db.js";

dotenv.config();
const app = express();
app.use(express.json());

// Rutas
app.use("/api/usuarios", routerUsuarios);
app.use("/api/empresas", routerEmpresa);
app.use("/api/canchas", routerCancha);
app.use("/api/reservas", routerReserva);

//Correr servidor
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Corriendo en el puerto: ", PORT);
});

//Probar conexión base de datos
async function testDBConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("✅ Conexión exitosa a la base de datos");
    connection.release(); // Liberar la conexión
  } catch (error) {
    console.error("❌ Error al conectar con la base de datos:", error.message);
  }
}
// testDBConnection();
