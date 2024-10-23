export function convertirNumeroSeparadoComas(numero : string) : string {
    let monto_variable = numero;
    try {
        const [integerPart, decimalPart] = numero.toString().split(".");
        const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        // Unir la parte entera formateada con la parte decimal (si existe)
         monto_variable =  decimalPart !== undefined ? `${formattedInteger}.${decimalPart}` : formattedInteger;
    } catch (ex) {
        monto_variable = numero;
    }
    return monto_variable
}
  

export function convertirAFecha(fechaString) {
    const [dia, mes, anio] = fechaString.split("/"); // Separar en día, mes y año
    return new Date(anio, mes - 1, dia);
}