import React, { useState } from "react";
import "./PeriodosBitacoraLiderTecnico.css";
import Divider from "@mui/material/Divider";
import { Select } from "../../../shared/Select/Select.tsx";
import { Tabla } from "../../../shared/Tabla/Tabla.tsx";

const contratoOpciones = [
  { value: "110212A", label: "110212A" },
  { value: "110212B", label: "110212B" },
];

const proveedorOpciones = [
  { value: "ultrasist", label: "Ultrasist" },
  { value: "softstore", label: "Softstore" },
];

const periodoOpciones = [
  { value: "enero", label: "Enero" },
  { value: "febrero", label: "Febrero" },
];

const anioOpciones = [
  { value: "2023", label: "2023" },
  { value: "2024", label: "2024" },
];

const columnas = [
  { header: "Periodo", accessor: "periodo" },
  { header: "Año", accessor: "anio" },
  { header: "Estado", accessor: "estado" },
];

const datos = [
  { periodo: "Enero", anio: 2024, estado: "Validado" },
  { periodo: "Febrero", anio: 2024, estado: "Validado" },
  { periodo: "Marzo", anio: 2024, estado: "Validado" },
  { periodo: "Abril", anio: 2024, estado: "Validado" },
  { periodo: "Mayo", anio: 2024, estado: "En proceso" },
];

export const PeriodosBitacoraLiderTecnico = () => {
  const [formData, setFormData] = useState({
    contrato: "",
    proveedor: "",
    periodo: "",
    anio: "",
  });

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
        <Divider sx={{ bgcolor: "#959595", marginBottom: "12px" }} />
        <div className="contenedor-filtros">
          <Select
            label="Contrato"
            name="contrato"
            value={formData.contrato}
            onChange={handleSelectChange}
            options={contratoOpciones}
            placeholder="Selecciona un contrato"
            className="custom-select"
          />
          <Select
            label="Proveedor"
            name="proveedor"
            value={formData.proveedor}
            onChange={handleSelectChange}
            options={proveedorOpciones}
            placeholder="Selecciona un proveedor"
            className="custom-select"
          />
          <Select
            label="Periodo"
            name="periodo"
            value={formData.periodo}
            onChange={handleSelectChange}
            options={periodoOpciones}
            placeholder="Selecciona un periodo"
            className="custom-select"
          />
          <Select
            label="Año"
            name="anio"
            value={formData.anio}
            onChange={handleSelectChange}
            options={anioOpciones}
            placeholder="Selecciona un año"
            className="custom-select"
          />
        </div>
        <div className="contenedor-tabla">
          <Tabla columnas={columnas} datos={datos} />
        </div>
      </div>
    </>
  );
};
