import { Divider } from "@mui/material";
import React from "react";

export const DetallesPorPeriodoConsultor = () => {
  return (
    <>
      <div className="contenido_principal">
        <h1>Registro de actividades</h1>
        <div className="contenedor-datos-proyecto">
          <div className="datos-titulo-proyecto">
            <p className="titulo-proyecto">Observaciones por periodo</p>
          </div>
          <div className="datos">
            <p className="datos-proyecto">Periodo: </p>
            <p>Junio - 2024</p>
          </div>
          <div className="datos">
            <p className="datos-proyecto">Líder técnico: </p>
            <p>Juan Luis Gutiérrez López</p>
          </div>
          <div className="datos">
            <p className="datos-proyecto">Responsable: </p>
            <p>Azir Aguilar Camacho</p>
          </div>
        </div>
        <Divider sx={{ bgcolor: "#959595", margin: "12px 0px" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="contenedor-observaciones-realizadas"
            style={{ width: "80%" }}
          >
            <ul className="contenedor-observaciones">
              <li>
                11/01/2024: Primero, quiero reconocer el esfuerzo que pusiste en
                la revisión de la documentación técnica. Es evidente que te
                tomaste el tiempo de leerla detenidamente y subrayar los puntos
                más importantes. Sin embargo, hay algunas áreas que creo que
                podrías mejorar para obtener mejores resultados en futuras
                revisiones.
              </li>
              <li>
                12/01/2024: Quiero destacar tu dedicación al completar el
                análisis del informe técnico. Has demostrado una buena
                comprensión del material al resaltar los aspectos clave. Sin
                embargo, considero que podrías profundizar más en ciertos
                detalles y ofrecer sugerencias adicionales para enriquecer aún
                más el análisis en futuras revisiones.
              </li>
            </ul>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
