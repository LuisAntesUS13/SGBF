import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Select } from "../../../../shared/Select/Select.tsx";
import "./BitacoraConsultor.css";
import { Tabla } from "../../../../shared/Tabla/Tabla.tsx";
import { useNavigate } from "react-router-dom";
import {
  BitacoraService,
  PeriodosServices,
} from "../../../../services/bitacoras/bitacoras.service.ts";
import { ListaEstados } from "../../../../shared/ListaEstados/ListaEstados.tsx";

const bitacorasService = new BitacoraService();
const periodosService = new PeriodosServices();

const columnas = [
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
    proyecto: "Continuidad operativa",
    identificador: "S-1066361",
    descripcion: "Sistema de gestión de Bitácoras de Fábricas",
    actividadAsignada: "Integración de equipos y orientación de proyecto",
    actividadRealizada: "Elaboración de junta para la orientación de proyecto",
    horasRealizadas: 8,
    fecha: "13/06/2024",
  },
  {
    proyecto: "Continuidad operativa",
    identificador: "S-1066361",
    descripcion: "Sistema de gestión de Bitácoras de Fábricas",
    actividadAsignada: "Integración de equipos y orientación de proyecto",
    actividadRealizada: "Elaboración de junta para la orientación de proyecto",
    horasRealizadas: 5,
    fecha: "13/06/2024",
  },
  {
    proyecto: "Continuidad operativa",
    identificador: "S-1066361",
    descripcion: "Sistema de gestión de Bitácoras de Fábricas",
    actividadAsignada: "Integración de equipos y orientación de proyecto",
    actividadRealizada: "Elaboración de junta para la orientación de proyecto",
    horasRealizadas: 3,
    fecha: "13/06/2024",
  },
  {
    proyecto: "Optimización de procesos",
    identificador: "S-1066362",
    descripcion: "Implementación de un sistema de control de calidad",
    actividadAsignada: "Análisis de procesos actuales",
    actividadRealizada: "Recolección de datos y evaluación de puntos críticos",
    horasRealizadas: 8,
    fecha: "14/06/2024",
  },
  {
    proyecto: "Automatización de líneas de producción",
    identificador: "S-1066363",
    descripcion: "Integración de software para control automatizado",
    actividadAsignada: "Implementación de sensores y controles",
    actividadRealizada: "Pruebas y ajustes en el sistema automatizado",
    horasRealizadas: 8,
    fecha: "15/06/2024",
  },
  {
    proyecto: "Mejora de la logística interna",
    identificador: "S-1066364",
    descripcion: "Optimización de rutas de distribución dentro de la planta",
    actividadAsignada: "Análisis y rediseño de rutas de entrega",
    actividadRealizada: "Simulación de nuevas rutas y tiempos de entrega",
    horasRealizadas: 8,
    fecha: "16/06/2024",
  },
  {
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
  { id: "1", nombre: `Enero - ${"Validado"}` },
  { id: "2", nombre: `Febrero- ${"Validado"}` },
  { id: "3", nombre: `Marzo - ${"Validado"}` },
  { id: "3", nombre: `Abri - ${"Validado"}` },
  { id: "3", nombre: `Mayo - ${"Validado"}` },
  { id: "3", nombre: `Junio - ${"Validado"}` },
  { id: "3", nombre: `Julio - ${"Validado"}` },
  { id: "3", nombre: `Agosto - ${"Validado"}` },
  { id: "3", nombre: `Septiembre - ${"Validado"}` },
  { id: "4", nombre: `Octubre - ${"En proceso"}` },
];

export const BitacoraConsultor = () => {
  const [seleccionado, setSeleccionado] = useState<number | null>(null);

  const listadoEstatus = [
    { idStatus: 1, nombre: "Espera de revisión", activo: true, total: 0 },
    { idStatus: 2, nombre: "Espera de autorización", activo: false, total: 0 },
    { idStatus: 7, nombre: "En observación", activo: false, total: 0 },
    { idStatus: 8, nombre: "Finalizada", activo: false, total: 0 },
  ];

  const manejarSeleccion = (id: number) => {
    setSeleccionado(id);
    // Aquí puedes realizar otras acciones con el estatus seleccionado si lo deseas
    console.log(`Estatus seleccionado: ${id}`);
  };
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    periodo: "4",
  });

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    fetchBitacoras();
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
    // const bitacoras = await bitacorasService.getBitacoras(formData.periodo);
  };

  const fetchPeriodos = async () => {
    // const periodos = await periodosService.getPeriodos();
  };

  useEffect(() => {
    fetchPeriodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <div className="contenedor-datos-proyecto">
            <div className="datos">
              <p className="datos-proyecto">Fabrica: </p>
              <p>Ultrasist</p>
            </div>
            <div className="datos">
              <p className="datos-proyecto">Nombre del consultor: </p>
              <p>Luis Eduardo Antes Villa</p>
            </div>
          </div>
        </div>
        <Divider sx={{ bgcolor: "#959595", margin: "12px 0px" }} />

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
          </div>

          <div className="contenedor-filtros-botones">
            <div className="contenedor-lista-estados">
              <ListaEstados
                listadoEstatus={listadoEstatus}
                onSeleccionar={manejarSeleccion}
              />
            </div>

            <div className="contenedor-botones-autorizacion-observacion">
              <div className="contenedor-botones">
                <button
                  type="button"
                  className="btn btn-registro-actividad  btn-principal"
                  title="Registrar"
                  onClick={handleRegistroActvidadClick}
                >
                  Registrar Actividad
                </button>
                <button
                  type="button"
                  className="btn btn-observacion-periodo btn-principal "
                  title="Observacion"
                  onClick={handleObservacionesClick}
                >
                  Observación por periodo
                </button>
              </div>
            </div>
          </div>

          <div className="contenedor-componente-tabla">
            <Tabla
              columnas={columnas}
              datos={datos}
              onRowClick={handleRowClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};
