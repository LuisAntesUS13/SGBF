export class BitacoraService {
  async getBitacoras(periodo) {
    const response = await fetch(
      "http://localhost:3500/bitacora/catalogo/getBitacora",
      {
        method: "POST",
        body: JSON.stringify({ periodo }),
      }
    );

    return response.json();
  }
}

export class PeriodosServices {
  async getPeriodos() {
    const response = await fetch(
      "http://localhost:3500/bitacora/catalogo/getPeriodos",
      {
        method: "POST",
      }
    );

    return response.json();
  }
}
