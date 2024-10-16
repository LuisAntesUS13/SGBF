import React from "react";

export interface Option {
  id: string | number;
  nombre: string;
}

interface SelectProps {
  label?: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[]; // Lista de opciones que se mostrarán
  placeholder?: string;
  className?: string; // Para estilos adicionales
}

export const Select: React.FC<SelectProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  className,
}) => {
  return (
    <div style={{ width: "100%" }}>
      {label && <label htmlFor={name}>{label}</label>}
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={className}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.nombre}
          </option>
        ))}
      </select>
    </div>
  );
};
