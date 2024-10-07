export class ActividadConsultorService {
  async getActividadConsultor(nombre) {
    const response = await fetch(
      "http://localhost:3500/bitacora/catalogo/getActividad",
      {
        method: "POST",
        body: JSON.stringify({ nombre }),
      }
    );

    return response.json();
  }
}

export class ActividadService {
  async getActividad(periodo) {
    const response = await fetch(
      "http://localhost:3500/bitacora/catalogo/getActividad",
      {
        method: "POST",
        body: JSON.stringify({ periodo }),
      }
    );

    return response.json();
  }
}
