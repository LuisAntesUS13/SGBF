import { Divider } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { Input } from "../../../../shared/Input/Input.tsx";
import { Select } from "../../../../shared/Select/Select.tsx";
import "./RegistroDeActividadConsultor.css";

const aplicativoModuloOpciones = [
  { id: "1", nombre: "Acceso alterno Portal Empresarial" },
  { id: "2", nombre: "Aclaración de pagos" },
  { id: "3", nombre: "Acceso alterno Portal Infonavit" },
];

const tipoOpciones = [
  { id: "1", nombre: "Administrativo" },
  { id: "2", nombre: "Apoyo operativo" },
  { id: "3", nombre: "Control Cambio" },
  { id: "4", nombre: "Jira" },
  { id: "5", nombre: "Incidente" },
  { id: "6", nombre: "Vacaciones" },
];

export const RegistroDeActividadConsultor = () => {
  const [formData, setFormData] = useState({
    subdireccionGerencia: "Subdirección General de Tecnologías de Información",
    liderTecnico: "Juan Luis Gutiérrez López",
    proyecto: "Continuidad operativa",
    responsable: "Azir Aguilar Camacho",
    jiraSmax: "",
    descripcionCorta: "",
    aplicativoModulo: "",
    tipo: "",
    actividadAsignada: "",
    horasLaboradas: "",
    actividadRealizada: "",
  });

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div className="contenido_principal">
        <h1>Registro de actividades</h1>
        <div className="contenedor-datos-proyecto">
          <div className="datos-titulo-proyecto">
            <p className="titulo-proyecto">Registrar actividad</p>
          </div>
          <div className="datos">
            <p className="datos-proyecto">Periodo: </p>
            <p>Junio - 2024</p>
          </div>

          <div className="datos">
            <p className="datos-proyecto">Fecha actual: </p>
            <p>29 / 09 / 2024</p>
          </div>
        </div>
        <Divider sx={{ bgcolor: "#959595", margin: "12px 0px" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "80%" }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  label="Subdirección/Gerencia"
                  type="text"
                  name="subdireccionGerencia"
                  value={formData.subdireccionGerencia}
                  onChange={handleInputChange}
                  disabled={true}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  label="Líder técnico"
                  type="text"
                  name="liderTecnico"
                  value={formData.liderTecnico}
                  onChange={handleInputChange}
                  disabled={true}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  label="Proyecto"
                  type="text"
                  name="proyecto"
                  value={formData.proyecto}
                  onChange={handleInputChange}
                  disabled={true}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  label="Responsable"
                  type="text"
                  name="responsable"
                  value={formData.responsable}
                  onChange={handleInputChange}
                  disabled={true}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  label="JIRA o SMAX/ID Incidente"
                  type="text"
                  name="jiraSmax"
                  value={formData.jiraSmax}
                  onChange={handleInputChange}
                  disabled={false}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  label="Descripción corta JIRA o SMAX/incidente"
                  type="text"
                  name="descripcionCorta"
                  value={formData.descripcionCorta}
                  onChange={handleInputChange}
                  disabled={false}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Select
                  label="Aplicativo/Modulo"
                  name="aplicativoModulo"
                  value={formData.aplicativoModulo}
                  onChange={handleSelectChange}
                  options={aplicativoModuloOpciones}
                  placeholder="Seleccione una opcion"
                  className="form-select"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Select
                  label="Tipos"
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleSelectChange}
                  options={tipoOpciones}
                  placeholder="Seleccione una opcion"
                  className="form-select"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  label="Actividad asignada"
                  type="text"
                  name="actividadAsignada"
                  value={formData.actividadAsignada}
                  onChange={handleInputChange}
                  disabled={false}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  label="Horas laboradas"
                  type="number"
                  name="horasLaboradas"
                  value={formData.horasLaboradas}
                  onChange={handleInputChange}
                  disabled={false}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <label className="label-observaciones">
                  Actividad realizada
                </label>
                <textarea
                  className="form-control textarea"
                  aria-label="With textarea"
                  value={formData.actividadRealizada}
                  style={{ resize: "none" }}
                >
                  Elaboración de junta
                </textarea>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <label className="form-label">Carga de evidencias</label>
                <input
                  className="form-control"
                  style={{ marginTop: "12px" }}
                  type="file"
                  placeholder="Selecciona el archivo a subir"
                  name="archivo"
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={1}
              direction={"row-reverse"}
              sx={{ margin: "20px 0px 20px 0px" }}
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <button
                  type="button"
                  className="btn btn-principal btn-registrar"
                >
                  Registrar actividad
                </button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};
