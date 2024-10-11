import React from "react";
import { Submenu } from "../SubMenu/Submenu.tsx";
import "../Menu/Menu.css";
import "../../../custom.d.ts";
import logo from "../../../assets/imagenes/Logo_INFONAVIT.svg.png";

export const Menu = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <img className="imagen-logo-infonavit" src={logo} alt="Logo" />
        <div className="menu">
          <Submenu
            titulo={"Contratos y perfiles"}
            opciones={[
              { ruta: "contrato", subtitulo: "Contrato" },
              { ruta: "carga-de-perfiles", subtitulo: "Carga de perfiles" },
            ]}
          />
          <Submenu
            titulo={"Equipo de trabajo"}
            opciones={[
              {
                ruta: "equipos-de-trabajo",
                subtitulo: "Registro de equipo y líder",
              },
              {
                ruta: "reasignacion-de-lider",
                subtitulo: "Reasignación de líder",
              },
            ]}
          />
          <Submenu 
            titulo={"requerimientos"} 
            opciones={[
              
            ]} />
          <Submenu
            titulo={"Bitacoras"}
            opciones={[
              {
                ruta: "registro-de-bitacora",
                subtitulo: "Registro de bitacora",
              },
              {
                ruta: "autorizacion-de-bitacora",
                subtitulo: "Autorización de bitacora",
              },
            ]}
          />
          <Submenu
            titulo={"Asistencia"}
            opciones={[
              {
                ruta: "registro-de-asistencia",
                subtitulo: "Registro de asistencia",
              },
              {
                ruta: "control-de-asistencia",
                subtitulo: "Control de asistencia",
              },
            ]}
          />
          <Submenu
            titulo={"Administración"}
            opciones={[
              {
                ruta: "registro-de-asistencia",
                subtitulo: "Registro de asistencia",
              },
              {
                ruta: "control-de-asistencia",
                subtitulo: "Control de asistencia",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
