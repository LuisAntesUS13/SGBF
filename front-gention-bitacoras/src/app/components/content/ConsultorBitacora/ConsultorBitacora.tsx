import React from "react";
import "../ConsultorBitacora/ConsultorBitacora.css";
import Divider from "@mui/material/Divider";

export const ConsultorBitacora = () => {
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
      </div>
    </>
  );
};
