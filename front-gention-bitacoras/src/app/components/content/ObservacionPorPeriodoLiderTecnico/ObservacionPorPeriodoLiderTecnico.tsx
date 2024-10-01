import { Divider } from "@mui/material";
import React from "react";
import "./ObservacionPorPeriodoLiderTecnico.css";

export const ObservacionPorPeriodoLiderTecnico = () => {
  return (
    <>
      <div className="consultor-bitacora contenido_principal ">
        <h1>Observación por periodo. (Enero - 2024)</h1>

        <Divider sx={{ bgcolor: "#959595", margin: "13px 0px" }} />
        <div style={{ width: "80%" }} className="contenedor-contenido">
          <div className="contenedor-textarea-observaciones">
            <label className="label-observaciones">Observación</label>
            <textarea
              className="form-control textarea textarea-observaciones"
              aria-label="With textarea"
              style={{ resize: "none" }}
              placeholder="Escribir observación..."
            ></textarea>
            <div style={{ textAlign: "right" }}>
              <button
                type="button"
                className="btn btn-principal btn-realizar-observacion"
              >
                Realizar observación
              </button>
            </div>
          </div>

          <div className="contenedor-contenido-observaciones">
            <label className="label-observaciones">
              Observaciones realizadas
            </label>
            <div className="contenedor-observaciones-realizadas">
              <ul className="contenedor-observaciones">
                <li>
                  11/01/2024: Primero, quiero reconocer el esfuerzo que pusiste
                  en la revisión de la documentación técnica. Es evidente que te
                  tomaste el tiempo de leerla detenidamente y subrayar los
                  puntos más importantes. Sin embargo, hay algunas áreas que
                  creo que podrías mejorar para obtener mejores resultados en
                  futuras revisiones.
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
      </div>
    </>
  );
};
