import { Divider } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { Input } from "../../../../shared/Input/Input.tsx";
import { Select } from "../../../../shared/Select/Select.tsx";
import "./RegistroDeActividadConsultor.css";
import { Actividad } from "../../../../model/interface/equiposDeTrabajo.interface.tsx";
import { ToastContainer, toast } from "react-toastify";

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

  const [fieldActividadClases, setFieldActividadClases] = useState({
    jiraSmax: "form-control",
    descripcionCorta: "form-control",
    aplicativoModulo: "form-control",
    tipo: "form-control",
    actividadAsignada: "form-control",
    horasLaboradas: "form-control",
    actividadRealizada: "form-control",
  });

  const guardarActividad = async () => {
    const newFieldActividadClases: Actividad = {
      subdireccionGerencia: "form-control",
      liderTecnico: "form-control",
      proyecto: "form-control",
      responsable: "form-control",
      jiraSmax: "form-control",
      descripcionCorta: "form-control",
      aplicativoModulo: "form-control",
      tipo: "form-control",
      actividadAsignada: "form-control",
      horasLaboradas: "form-control",
      actividadRealizada: "form-control",
    };

    let isValid = true; // Variable para verificar si el formulario es válido
    console.log(isValid);

    for (const key in formData) {
      // Verifica si el campo no es opcional
      if (formData[key] === null || formData[key] === "") {
        newFieldActividadClases[key as keyof Actividad] =
          "form-control invalid-class";
        isValid = false;
        console.log(isValid);
      }
    }

    setFieldActividadClases(newFieldActividadClases);

    if (isValid) {
      toast.success("Se agregó el equipo correctamente", {});
    } else {
      toast.error("Los campos  marcados son obligatorios", {});
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value === null || value === "") {
      setFieldActividadClases((prev) => ({
        ...prev,
        [name]: "form-control invalid-class", // Clase adicional si está vacío
      }));
    } else {
      setFieldActividadClases((prev) => ({
        ...prev,
        [name]: "form-control", // Clase normal
      }));
    }
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
                  className={fieldActividadClases.jiraSmax}
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
                  className={fieldActividadClases.descripcionCorta}
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
                  className={fieldActividadClases.aplicativoModulo}
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
                  className={fieldActividadClases.aplicativoModulo}
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
                  className={fieldActividadClases.actividadAsignada}
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
                  className={fieldActividadClases.horasLaboradas}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <label className="label-observaciones">
                  Actividad realizada
                </label>
                <textarea
                  aria-label="With textarea"
                  name="actividadRealizada"
                  value={formData.actividadRealizada}
                  style={{ resize: "none" }}
                  onChange={handleInputChange}
                  className={fieldActividadClases.actividadRealizada}
                ></textarea>
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
                  onClick={() => {
                    guardarActividad();
                  }}
                >
                  Registrar actividad
                </button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        limit={4}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};
