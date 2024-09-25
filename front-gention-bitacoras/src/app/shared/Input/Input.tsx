import React from "react";

export const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
