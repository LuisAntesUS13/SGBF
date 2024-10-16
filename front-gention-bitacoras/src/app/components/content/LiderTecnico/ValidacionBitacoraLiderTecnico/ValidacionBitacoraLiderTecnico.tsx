import React, { useEffect, useState } from "react";
import "./ValidacionBitacoraLiderTecnico.css";
import { Tabla } from "../../../../shared/Tabla/Tabla.tsx";
import { ListaEstados } from "../../../../shared/ListaEstados/ListaEstados.tsx";
import { useNavigate } from "react-router-dom";
import { ActividadConsultorService } from "../../../../services/actividades/actividades.service.ts";

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
    fecha: "13/05/2024",
  },
  {
    proyecto: "Continuidad operativa",
    identificador: "S-1066361",
    descripcion: "Sistema de gestión de Bitácoras de Fábricas",
    actividadAsignada: "Integración de equipos y orientación de proyecto",
    actividadRealizada: "Elaboración de junta para la orientación de proyecto",
    horasRealizadas: 8,
    fecha: "13/05/2024",
  },
  {
    proyecto: "Optimización de procesos",
    identificador: "S-1066362",
    descripcion: "Implementación de un sistema de control de calidad",
    actividadAsignada: "Análisis de procesos actuales",
    actividadRealizada: "Recolección de datos y evaluación de puntos críticos",
    horasRealizadas: 6,
    fecha: "14/05/2024",
  },
  {
    proyecto: "Automatización de líneas de producción",
    identificador: "S-1066363",
    descripcion: "Integración de software para control automatizado",
    actividadAsignada: "Implementación de sensores y controles",
    actividadRealizada: "Pruebas y ajustes en el sistema automatizado",
    horasRealizadas: 7,
    fecha: "15/05/2024",
  },
  {
    proyecto: "Mejora de la logística interna",
    identificador: "S-1066364",
    descripcion: "Optimización de rutas de distribución dentro de la planta",
    actividadAsignada: "Análisis y rediseño de rutas de entrega",
    actividadRealizada: "Simulación de nuevas rutas y tiempos de entrega",
    horasRealizadas: 5,
    fecha: "16/05/2024",
  },
  {
    proyecto: "Reducción de tiempos de inactividad",
    identificador: "S-1066365",
    descripcion: "Implementación de sistema de monitoreo en tiempo real",
    actividadAsignada: "Instalación y configuración de software de monitoreo",
    actividadRealizada: "Pruebas en línea de producción y ajuste de parámetros",
    horasRealizadas: 8,
    fecha: "17/05/2024",
  },
];

const actividadConsultorService = new ActividadConsultorService();

export const ValidacionBitacoraLiderTecnico = () => {
  const [seleccionado, setSeleccionado] = useState<number | null>(null);

  const fetchActvidadConsultor = async () => {
    const actividad = await actividadConsultorService.getActividadConsultor(
      formData.consultor
    );
  };

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

  const [formData, setFormData] = useState({
    consultor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const irAObservaciones = () => {
    navigate("/observacion-por-periodo-consultores");
  };

  const handleRowClick = () => {
    navigate("/detalles-actividad-lider-tecnico");
  };

  useEffect(() => {
    // fetchActvidadConsultor();
  }, []);

  return (
    <>
      <div className="contenido_principal">
        <div>
          <h1>Validación de bitácoras</h1>
          <div className="contenedor-datos-proyecto">
            <div className="datos-titulo-proyecto">
              <p className="titulo-proyecto">
                Sistema de gestión de bitácoras de fábricas. (Junio - 2024)
              </p>
            </div>
            <div className="datos">
              <p className="datos-proyecto">Líder: </p>
              <p>Juan Guitérrez</p>
            </div>
            <div className="datos">
              <p className="datos-proyecto">Responsable: </p>
              <p>Azir Aguilar</p>
            </div>
            <div className="datos">
              <p className="datos-proyecto">Fabrica: </p>
              <p>Ultrasist</p>
            </div>
            <div className="datos">
              <p className="datos-proyecto">Consultor </p>
              <p>Luis Eduardo Antes Villa</p>
            </div>
          </div>
          <hr />
          <div></div>
          <div className="contenedor-filtros-botones">
            <div className="contenedor-lista-estados">
              <ListaEstados
                listadoEstatus={listadoEstatus}
                onSeleccionar={manejarSeleccion}
              />
            </div>
            <div className="contenedor-botones-autorizacion-observacion">
              <label>Autorización y observación por periodo</label>
              <div className="contenedor-botones">
                <button className="btn btn-principal">Autorizar</button>
                <button
                  className="btn btn-principal"
                  onClick={irAObservaciones}
                >
                  Observación
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
