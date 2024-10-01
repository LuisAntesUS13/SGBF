import React, { useState } from "react";
import "./PeriodosBitacoraLiderTecnico.css";
import Divider from "@mui/material/Divider";
import { Select } from "../../../shared/Select/Select.tsx";
import { Tabla } from "../../../shared/Tabla/Tabla.tsx";
import { useNavigate } from "react-router-dom";

const contratoOpciones = [
  { id: "110212A", nombre: "110212A" },
  { id: "110212B", nombre: "110212B" },
];

const proveedorOpciones = [
  { id: "ultrasist", nombre: "Ultrasist" },
  { id: "softstore", nombre: "Softstore" },
];

const periodoOpciones = [
  { id: "enero", nombre: "Enero" },
  { id: "febrero", nombre: "Febrero" },
];

const anioOpciones = [
  { id: "2023", nombre: "2023" },
  { id: "2024", nombre: "2024" },
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

  const navigate = useNavigate();

  const handleRowClick = (row) => {
    navigate("/validacion-bitacora-lider-tecnico");
  };

  return (
    <>
      <div className="consultor-bitacora contenido_principal">
        <h1>Validación de bitácoras</h1>
        <div className="subtitle">
          <p className="lider-tecnico">Líder técnico:</p>
          <p>Juan Luis Gutiérrez López</p>
        </div>
        <Divider sx={{ bgcolor: "#959595", margin: "12px 0px" }} />
        <div className="contenedor-filtros">
          <Select
            label="Contrato"
            name="contrato"
            value={formData.contrato}
            onChange={handleSelectChange}
            options={contratoOpciones}
            placeholder="Selecciona un contrato"
            className="form-select"
          />
          <Select
            label="Proveedor"
            name="proveedor"
            value={formData.proveedor}
            onChange={handleSelectChange}
            options={proveedorOpciones}
            placeholder="Selecciona un proveedor"
            className="form-select"
          />
          <Select
            label="Periodo"
            name="periodo"
            value={formData.periodo}
            onChange={handleSelectChange}
            options={periodoOpciones}
            placeholder="Selecciona un periodo"
            className="form-select"
          />
          <Select
            label="Año"
            name="anio"
            value={formData.anio}
            onChange={handleSelectChange}
            options={anioOpciones}
            placeholder="Selecciona un año"
            className="form-select"
          />
        </div>
        <div className="contenedor-tabla">
          <Tabla
            columnas={columnas}
            datos={datos}
            onRowClick={handleRowClick}
          />
        </div>
      </div>
    </>
  );
};
