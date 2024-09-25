import React from "react";

// Definir la interface para los props
interface InputProps {
  label?: string; // Etiqueta del input
  type?: string; // Tipo de input (text, email, password, etc.)
  name: string; // Nombre del input
  value: string; // Valor del input
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Evento para manejar cambios
  placeholder?: string; // Texto de marcador
  className?: string; // Props adicionales (ej. className)
}

export const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <div style={{ width: "100%" }}>
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
      />
    </div>
  );
};
