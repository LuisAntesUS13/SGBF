export class BitacoraService {
  async getBitacoras(periodo) {
    const response = await fetch(
      "http://localhost:3500/bitacora/catalogo/getAreas",
      {
        method: "POST",
        body: JSON.stringify({ periodo }),
      }
    );

    return response.json();
  }
}
