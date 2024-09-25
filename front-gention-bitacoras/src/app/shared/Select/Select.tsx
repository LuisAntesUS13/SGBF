import React from "react";

interface Option {
  value: string | number;
  label: string;
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
    <div className={className} style={{ width: "100%" }}>
      {label && <label htmlFor={name}>{label}</label>}
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="form-select"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
