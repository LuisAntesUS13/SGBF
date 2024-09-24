import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Menu } from "../shared/Menu/Menu.tsx";

export const Enrutador = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/contrato" element={<h1>Contrato</h1>} />
        <Route path="/carga-de-perfiles" element={<h1>Carga de perfiles</h1>} />
        <Route
          path="/registro-de-equipo-y-lider"
          element={<h1>Registro de equipo y líder</h1>}
        />
        <Route
          path="/reasignacion-de-lider"
          element={<h1>Reasignación de líder</h1>}
        />
        <Route path="/Requerimientos" element={<h1>Requerimientos</h1>} />
        <Route
          path="/registro-de-bitacora"
          element={<h1>Registro de bitacora</h1>}
        />
        <Route
          path="/autorizacion-de-bitacora"
          element={<h1>Autorización de bitacora</h1>}
        />
        <Route
          path="/registro-de-asistencia"
          element={<h1>Registro de asistencia</h1>}
        />
        <Route
          path="/control-de-asistencia"
          element={<h1>Control de asistencia</h1>}
        />
        <Route
          path="/control-de-asistencia"
          element={<h1>Control de asistencia</h1>}
        />
      </Routes>
    </>
  );
};
