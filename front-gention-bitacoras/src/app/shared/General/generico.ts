export function convertirNumeroSeparadoComas(numero : string) : string {
    let monto = numero;
    try {
        const [integerPart, decimalPart] = numero.toString().split(".");
        const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        // Unir la parte entera formateada con la parte decimal (si existe)
        monto =  decimalPart !== undefined ? `${formattedInteger}.${decimalPart}` : formattedInteger;
    } catch (ex) {
        monto = numero;
    }
    return monto
}
  

export function convertirAFecha(fechaString) {
    const [dia, mes, anio] = fechaString.split("/"); // Separar en día, mes y año
    return new Date(anio, mes - 1, dia);
}