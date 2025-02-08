import { EmpresaReporitory } from "../repository/EmpresaRepository.js";

export class EmpresaService {
  static async obtenerTodosEmpresa() {
    return await EmpresaReporitory.obtenerTodosEmpresa();
  }

  static async obtenerEmpresaPorId(id) {
    return await EmpresaReporitory.obtenerEmpresaPorId(id);
  }

  static async crearEmpresa(empresa) {
    return await EmpresaReporitory.crearEmpresa(empresa);
  }
}
