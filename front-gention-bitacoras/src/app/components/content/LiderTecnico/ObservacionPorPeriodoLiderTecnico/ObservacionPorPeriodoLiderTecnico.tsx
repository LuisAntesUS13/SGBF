import React, { useState } from "react";
import "./ObservacionPorPeriodoLiderTecnico.css";

export const ObservacionPorPeriodoLiderTecnico = () => {
  const [observacion, setObservacion] = useState("");
  const [listaObservacion, setListObservacion] = useState<string[]>([]);
  const [remitente, setRemitente] = useState("Luis Eduardo Antes Villa");

  const fechaActual = new Date().toLocaleDateString();

  const handleObservacionChange = (event) => {
    setObservacion(event.target.value);
  };

  const handleSubmit = () => {
    if (observacion.trim() !== "") {
      setListObservacion([...listaObservacion, observacion]); // Agrega el valor actual del textarea a la lista
      setObservacion(""); // Limpia el textarea
    }
  };

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
              value={observacion}
              style={{ resize: "none" }}
              placeholder="Escribir observación..."
              onChange={handleObservacionChange}
            ></textarea>
            <div className="contenedor-boton-realizar-observacion">
              <div style={{ textAlign: "right" }} className="col-sm-3">
                <button
                  type="button"
                  className="btn btn-principal btn-realizar-observacion-actividad "
                  onClick={handleSubmit}
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
                {listaObservacion.map((item) => (
                  <li>
                    {remitente}({fechaActual}): {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
