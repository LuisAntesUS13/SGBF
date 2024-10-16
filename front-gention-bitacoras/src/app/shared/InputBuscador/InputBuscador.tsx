import React from "react";
import '../../shared/InputBuscador/InputDuscador.css'

// Definir la interface para los props
interface InputProps {
  label?: string; // Etiqueta del input
  type?: string; // Tipo de input (text, email, password, etc.)
  name: string; // Nombre del input
  value: string; // Valor del input
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Evento para manejar cambios
  placeholder?: string; // Texto de marcador
  className?: string; // Props adicionales (ej. className)
  disabled?: boolean;
  mostrarResultados: boolean;
  resultados: any[];
  mostrarKey: string[];
  onSeleccionar: (row: any) => void;
}

export const InputBuscador: React.FC<InputProps> = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  className,
  disabled = false, // Valor por defecto es "false"
  mostrarResultados,
  resultados,
  mostrarKey,
  onSeleccionar
}) => {

  return (
    <>
       <div style={{ width: "100%" }} className="container">
          {label && (
            <label className="form-label" htmlFor={name}>
              {label}
            </label>
          )}
          <input
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${className || ""} form-control `}
            disabled={disabled}
          />
          {mostrarResultados && (
            <div className="border" >
                  <table className="table table-hover">
                      <tbody>
                        {resultados.map((row, rowIndex) => (
                            <tr key={rowIndex}  onClick={() => onSeleccionar(row)}>
                              {mostrarKey.map((key, colIndex) => (
                                <td className="clasetr" key={colIndex}>{row[key]}</td>
                              ))}
                            </tr>
                          ))}
                      </tbody>
                  </table>
              </div> )}
        </div>
    </>
  );
};
