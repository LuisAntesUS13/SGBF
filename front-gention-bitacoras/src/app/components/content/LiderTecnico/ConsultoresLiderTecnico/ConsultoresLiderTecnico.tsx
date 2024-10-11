import React from "react";
import { useNavigate } from "react-router-dom";
import { Tabla } from "../../../../shared/Tabla/Tabla.tsx";

const columnas = [
  { header: "Consultor", accessor: "consultor" },
  { header: "Observaciones", accessor: "observaciones" },
  { header: "Autorizado", accessor: "autorizado" },
];

const datos = [
  {
    consultor: "Luis Eduardo Antes Villa",
    observaciones: "",
    autorizado: "Validado",
  },
  {
    consultor: "Mariana Ilse Borrego Campos",
    observaciones: "",
    autorizado: "Validado",
  },
  {
    consultor: "Jessica López Escalante",
    observaciones: "",
    autorizado: "Validado",
  },
  {
    consultor: "Lennin Beltran Rubio",
    observaciones: "Con observación",
    autorizado: "Validado",
  },
];

export const ConsultoresLiderTecnico = () => {
  const navigate = useNavigate();

  const handleRowClick = (row) => {
    navigate("/validacion-bitacora-lider-tecnico");
  };
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
          </div>
          <hr />

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
