import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Contratos } from "../components/content/contratros/Contratos.tsx";
import { FormularioContratos } from "../components/content/contratros/FormularioContratos.tsx";
import { PeriodosBitacoraLiderTecnico } from "../components/content/LiderTecnico/PeriodosBitacoraLiderTecnico/PeriodosBitacoraLiderTecnico.tsx";
import { ValidacionBitacoraLiderTecnico } from "../components/content/LiderTecnico/ValidacionBitacoraLiderTecnico/ValidacionBitacoraLiderTecnico.tsx";
import { DetallesDeActividadLiderTecnico } from "../components/content/LiderTecnico/DetallesDeActividadLiderTecnico/DetallesDeActividadLiderTecnico.tsx";
import { ObservacionPorPeriodoLiderTecnico } from "../components/content/LiderTecnico/ObservacionPorPeriodoLiderTecnico/ObservacionPorPeriodoLiderTecnico.tsx";
import { BitacoraConsultor } from "../components/content/Consultor/BitacoraConsultor/BitacoraConsultor.tsx";
import { DetallesDeActividadConsultor } from "../components/content/Consultor/DetallesDeActividadConsultor/DetallesDeActividadConsultor.tsx";
import { ObservacionPorPeriodoConsultor } from "../components/content/Consultor/ObservacionDetallesPorPeriodoConsultor/ObservacionPorPeriodoConsultor.tsx";
import { ConsultoresLiderTecnico } from "../components/content/LiderTecnico/ConsultoresLiderTecnico/ConsultoresLiderTecnico.tsx";
import { DatosPerfiles } from "../components/content/contratros/CargaPerfiles.tsx";
import { RegistroDeActividadConsultor } from "../components/content/Consultor/RegistroDeActividadConsultor/RegistroDeActividadConsultor.tsx";
import { FormularioConsultores } from "../components/content/contratros/FormularioConsultores.tsx";
import { ReasignacionLider } from "../components/content/EquipoDeTrabajo/ReasignacionLider/ReasingacionLider.tsx";
import { ReasignacionLiderActualizar } from "../components/content/EquipoDeTrabajo/ReasignacionLider/ReasinacionLiderActualizar.tsx";
import { Requerimientos } from "../components/content/Requerimientos/Requerimientos.tsx";

export const Enrutador = () => {
  return (
    <>
      <Routes>
        <Route path="/contrato" element={<Contratos />} />
        <Route path="/contrato/registrar" element={<FormularioContratos />} />
        <Route path="/contrato/actualizar" element={<FormularioContratos />} />
        <Route path="/carga-de-perfiles" element={<DatosPerfiles />} />
        <Route path="/carga-de-perfiles/consultor" element={<FormularioConsultores />} />
        <Route
          path="/registro-de-equipo-y-lider"
          element={<h1>Registro de equipo y líder</h1>}
        />
        <Route path="/reasignacion-de-lider" element={<ReasignacionLider />} />
        <Route path="/reasignacion-de-lider/actualizar" element={<ReasignacionLiderActualizar />} />
        <Route path="/requerimientos" element={<Requerimientos />} />
        <Route
          path="/validacion-bitacora-lider-tecnico"
          element={<ValidacionBitacoraLiderTecnico />}
        />
        <Route
          path="/detalles-actividad-lider-tecnico"
          element={<DetallesDeActividadLiderTecnico />}
        />
        <Route
          path="/detalles-actividad-consultor"
          element={<DetallesDeActividadConsultor />}
        />
        <Route
          path="/consultores-lider-tecnico"
          element={<ConsultoresLiderTecnico />}
        />
        <Route
          path="/observacion-por-periodo-consultor"
          element={<ObservacionPorPeriodoConsultor />}
        />
        <Route
          path="/registro-de-actividad-consultor"
          element={<RegistroDeActividadConsultor />}
        />
        <Route
          path="/observacion-por-periodo-consultores"
          element={<ObservacionPorPeriodoLiderTecnico />}
        />
        <Route
          path="/reasignacion-de-lider"
          element={<h1>Reasignación de líder</h1>}
        />
        <Route path="/Requerimientos" element={<h1>Requerimientos</h1>} />
        <Route path="/registro-de-bitacora" element={<BitacoraConsultor />} />
        <Route
          path="/autorizacion-de-bitacora"
          element={<PeriodosBitacoraLiderTecnico />}
        />
        <Route
          path="/registro-de-asistencia"
          element={<h1>Registro de asistencia</h1>}
        />
        <Route
          path="/control-de-asistencia"
          element={<h1>Control de asistencia</h1>}
        />
      </Routes>
    </>
  );
};
