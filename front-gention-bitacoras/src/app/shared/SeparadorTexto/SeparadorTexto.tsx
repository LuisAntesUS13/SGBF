import React from "react";
import "../../shared/SeparadorTexto/SeparadorTexto.css";

export const Separador = ({ texto = "Texto", colorTexto = "#0e159d", colorLInea = "black" }) => {
    const colorDinamicoLinea = {
        color: colorLInea || 'black', // Si no se pasa un color, usar negro por defecto
    };

    const colorDinamicoTexto = {
    color: colorTexto || '#0e159d', // Si no se pasa un color, usar negro por defecto
    };

    return ( <>
        <div className="line-with-text">
            <hr style={colorDinamicoLinea} />
            <b style={colorDinamicoTexto} ><span>{texto}</span></b>
            <hr style={colorDinamicoLinea} />
        </div>
      </>);
}