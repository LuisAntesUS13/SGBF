// CurrencyInput.tsx
import React, { useState, ChangeEvent, forwardRef } from "react";

interface CurrencyInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const CurrencyInput = forwardRef<HTMLInputElement, CurrencyInputProps>(
  ({ value = "", onChange, placeholder = "0.00" }, ref) => {
    const [internalValue, setInternalValue] = useState<string>(
      formatCurrency(value)
    );

    function formatCurrency(value: string): string {
      // Elimina caracteres no numéricos excepto el punto decimal.
      const cleanedValue = value.replace(/[^0-9.]/g, "");

      // Divide en parte entera y decimal.
      const parts = cleanedValue.split(".");

      // Asegúrate de que solo haya un punto decimal.
      if (parts.length > 2) {
        return formatCurrency(parts[0] + "." + parts.slice(1).join(""));
      }

      const integerPart = parts[0];
      const decimalPart = parts[1] ? `.${parts[1].slice(0, 2)}` : "";

      // Formatea la parte entera con comas.
      const formattedInteger = integerPart.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ","
      );

      return `${formattedInteger}${decimalPart}`;
    }

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
      const rawValue = e.target.value;
      const formattedValue = formatCurrency(rawValue);
      setInternalValue(formattedValue);

      // Llamada al callback onChange con el valor sin formatear.
      if (onChange) onChange(rawValue.replace(/,/g, ""));
    }

    return (
      <input
        type="text"
        ref={ref}
        value={internalValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        style={{ fontSize: "18px", padding: "5px", width: "200px" }}
      />
    );
  }
);
