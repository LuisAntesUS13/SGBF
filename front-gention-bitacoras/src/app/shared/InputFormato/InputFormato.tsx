import React, { useRef } from "react";

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
}

export const InputFormat: React.FC<InputProps> = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  className,
  disabled = false, // Valor por defecto es "false"
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const formatNumber = (value: string): string => {
    if (!value) return value;

    // Remover cualquier cosa que no sea un número o un punto decimal
    const numericValue = value.replace(/[^0-9.]/g, "");

    // Verificar si es un número válido
    if (isNaN(parseFloat(numericValue))) return numericValue;

    const [integerPart, decimalPart] = numericValue.split(".");

    // Formatear solo la parte entera con comas
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Unir la parte entera formateada con la parte decimal (si existe)
    return decimalPart !== undefined ? `${formattedInteger}.${decimalPart}` : formattedInteger;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = inputRef.current;
    if (!inputElement) return;
    const cursorPosition = inputElement.selectionStart || 0; // 
    
    const rawValue = e.target.value;
    const formattedValue = formatNumber(rawValue);

    const event = {
        target: {
          value: formattedValue,
          name: name,
        },
    } as React.ChangeEvent<HTMLInputElement>;

    onChange(event);

    // Restaurar la posición del cursor
    const newPosition = cursorPosition + (formattedValue.length - rawValue.length);
    setTimeout(() => {
      inputElement.setSelectionRange(newPosition, newPosition); // Establecer el cursor en la posición correcta
    }, 0);
  };



  return (
    <div style={{ width: "100%" }}>
      {label && (
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        ref={inputRef}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`${className || ""} form-control `}
        disabled={disabled}
      />
    </div>
  );
};
