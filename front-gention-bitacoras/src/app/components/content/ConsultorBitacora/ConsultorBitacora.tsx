import React, { useState } from "react";
import "../ConsultorBitacora/ConsultorBitacora.css";
import Divider from "@mui/material/Divider";
import { Input } from "../../../shared/Input/Input.tsx";

export const ConsultorBitacora = () => {
  const [formData, setFormData] = useState({
    username: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div className="consultor-bitacora contenido_principal">
        <div>
          <h1>Validación de bitácoras</h1>
          <div className="subtitle">
            <p className="lider-tecnico">Líder técnico:</p>
            <p>Juan Luis Gutiérrez López</p>
          </div>
        </div>
        <Divider />
        <div className="contenedor-filtros">
          <Input
            label=""
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="custom-input"
          />
          <Input
            label=""
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="custom-input"
          />
          <Input
            label=""
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="custom-input"
          />
          <Input
            label=""
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="custom-input"
          />
        </div>
      </div>
    </>
  );
};
