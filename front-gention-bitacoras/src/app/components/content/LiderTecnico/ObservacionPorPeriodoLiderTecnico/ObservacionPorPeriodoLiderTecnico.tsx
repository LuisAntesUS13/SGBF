import React from "react";
import "./ObservacionPorPeriodoLiderTecnico.css";

export const ObservacionPorPeriodoLiderTecnico = () => {
  return (
    <>
      <div className="consultor-bitacora contenido_principal ">
        <h1>Observación por periodo</h1>
        <div className="contenedor-datos-proyecto">
          <div className="datos-titulo-proyecto">
            <p className="titulo-proyecto">Observaciones por periodo</p>
          </div>
          <div className="datos">
            <p className="datos-proyecto">Periodo: </p>
            <p>Mayo</p>
          </div>
          <div className="datos">
            <p className="datos-proyecto">Fecha actual: </p>
            <p>30/05/2024</p>
          </div>
        </div>

        <hr />
        <div style={{ width: "80%" }} className="contenedor-contenido">
          <div className="contenedor-textarea-observaciones">
            <label className="label-observaciones">Observación</label>
            <textarea
              className="form-control textarea textarea-observaciones"
              aria-label="With textarea"
              style={{ resize: "none" }}
              placeholder="Escribir observación..."
            ></textarea>
            <div className="contenedor-boton-realizar-observacion">
              <div style={{ textAlign: "right" }} className="col-sm-3">
                <button
                  type="button"
                  className="btn btn-principal btn-realizar-observacion-actividad "
                >
                  Realizar observación
                </button>
              </div>
            </div>
          </div>

          <div className="contenedor-contenido-observaciones">
            <label className="label-observaciones">
              Observaciones realizadas
            </label>

            <div className="contenedor-observaciones-realizadas">
              <ul className="contenedor-observaciones-periodo-lidertecnico">
                <li>
                  Juan Guitérrez(11/01/2024): Primero, quiero reconocer el
                  esfuerzo que pusiste en la revisión de la documentación
                  técnica. Es evidente que te tomaste el tiempo de leerla
                  detenidamente y subrayar los puntos más importantes. Sin
                  embargo, hay algunas áreas que creo que podrías mejorar para
                  obtener mejores resultados en futuras revisiones.
                </li>
                <li>
                  Azir Aguilar(12/01/2024): Quiero destacar tu dedicación al
                  completar el análisis del informe técnico. Has demostrado una
                  buena comprensión del material al resaltar los aspectos clave.
                  Sin embargo, considero que podrías profundizar más en ciertos
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
