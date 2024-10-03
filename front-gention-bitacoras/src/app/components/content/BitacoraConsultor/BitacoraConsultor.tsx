import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Select } from "../../../shared/Select/Select.tsx";
import "./BitacoraConsultor.css";
import { Tabla } from "../../../shared/Tabla/Tabla.tsx";
import { useNavigate } from "react-router-dom";
import { BitacoraService } from "../../../services/bitacoras/bitacoras.service.ts";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/es.js";

const bitacorasService = new BitacoraService();

const columnas = [
  { header: "CONSULTOR", accessor: "consultor" },
  { header: "PROYECTO", accessor: "proyecto" },
  { header: "JIRA o SMAX ASOCIADO/ID INCIDENTE ", accessor: "identificador" },
  {
    header: "DESCRIPCIÓN CORTA JIRA o SMAX/INCIDENTE",
    accessor: "descripcion",
  },
  { header: "ACTIVIDAD ASIGNADA", accessor: "actividadAsignada" },
  { header: "ACTIVIDAD REALIZADA", accessor: "actividadRealizada" },
  { header: "HORAS REALIZADAS", accessor: "horasRealizadas" },
  { header: "FECHA", accessor: "fecha" },
];

const datos = [
  {
    consultor: "Luis Eduardo Antes Villa",
    proyecto: "Continuidad operativa",
    identificador: "S-1066361",
    descripcion: "Sistema de gestión de Bitácoras de Fábricas",
    actividadAsignada: "Integración de equipos y orientación de proyecto",
    actividadRealizada: "Elaboración de junta para la orientación de proyecto",
    horasRealizadas: 8,
    fecha: "13/06/2024",
  },
  {
    consultor: "Luis Eduardo Antes Villa",
    proyecto: "Continuidad operativa",
    identificador: "S-1066361",
    descripcion: "Sistema de gestión de Bitácoras de Fábricas",
    actividadAsignada: "Integración de equipos y orientación de proyecto",
    actividadRealizada: "Elaboración de junta para la orientación de proyecto",
    horasRealizadas: 8,
    fecha: "13/06/2024",
  },
  {
    consultor: "Carlos Ramírez López",
    proyecto: "Optimización de procesos",
    identificador: "S-1066362",
    descripcion: "Implementación de un sistema de control de calidad",
    actividadAsignada: "Análisis de procesos actuales",
    actividadRealizada: "Recolección de datos y evaluación de puntos críticos",
    horasRealizadas: 6,
    fecha: "14/06/2024",
  },
  {
    consultor: "Ana María Fernández",
    proyecto: "Automatización de líneas de producción",
    identificador: "S-1066363",
    descripcion: "Integración de software para control automatizado",
    actividadAsignada: "Implementación de sensores y controles",
    actividadRealizada: "Pruebas y ajustes en el sistema automatizado",
    horasRealizadas: 7,
    fecha: "15/06/2024",
  },
  {
    consultor: "Roberto Sánchez Ruiz",
    proyecto: "Mejora de la logística interna",
    identificador: "S-1066364",
    descripcion: "Optimización de rutas de distribución dentro de la planta",
    actividadAsignada: "Análisis y rediseño de rutas de entrega",
    actividadRealizada: "Simulación de nuevas rutas y tiempos de entrega",
    horasRealizadas: 5,
    fecha: "16/06/2024",
  },
  {
    consultor: "Gabriela Torres Pineda",
    proyecto: "Reducción de tiempos de inactividad",
    identificador: "S-1066365",
    descripcion: "Implementación de sistema de monitoreo en tiempo real",
    actividadAsignada: "Instalación y configuración de software de monitoreo",
    actividadRealizada: "Pruebas en línea de producción y ajuste de parámetros",
    horasRealizadas: 8,
    fecha: "17/06/2024",
  },
];

const periodoOpciones = [
  { id: "1", nombre: "Enero" },
  { id: "2", nombre: "Febrero" },
  { id: "3", nombre: "Marzo" },
  { id: "4", nombre: "Abril" },
];

export const BitacoraConsultor = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    periodo: "",
  });

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRowClick = () => {
    navigate("/detalles-actividad-consultor");
  };

  const handleObservacionesClick = () => {
    navigate("/observacion-por-periodo-consultor");
  };

  const handleRegistroActvidadClick = () => {
    navigate("/registro-de-actividad-consultor");
  };
  const fetchBitacoras = async () => {
    const bitacoras = await bitacorasService.getBitacoras(formData.periodo);
  };

  useEffect(() => {
    fetchBitacoras();
  }, [formData.periodo]);

  return (
    <>
      <div className="contenido_principal">
        <h1>Bitácora y registro de actividades</h1>
        <div className="contenedor-datos-proyecto">
          <div className="datos-titulo-proyecto">
            <p className="titulo-proyecto">
              Periodos y actividades registradas
            </p>
          </div>
        </div>
        <Divider sx={{ bgcolor: "#959595", margin: "12px 0px" }} />

        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
          <DemoContainer components={["DatePicker"]}>
            <DatePicker label="DatePicker básico" format="DD/MM/YYYY" />
          </DemoContainer>
        </LocalizationProvider>

        <div>
          <div className="contenedor-filtro-botones">
            <div className="col-sm-3">
              <Select
                label="Periodo"
                name="periodo"
                value={formData.periodo}
                onChange={handleSelectChange}
                options={periodoOpciones}
                className="form-select"
              />
            </div>

            <div className="contenedor-botones">
              <button
                type="button"
                className="btn btn-principal btn-registro-actividad"
                title="Registrar"
                onClick={handleRegistroActvidadClick}
              >
                Registrar actividad
              </button>

              <button
                type="button"
                className="btn btn-principal btn-observacion-periodo"
                title="Observacion"
                onClick={handleObservacionesClick}
              >
                Observación por periodo
              </button>
            </div>
          </div>
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
