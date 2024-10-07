import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import "./DetallesDeActividadLiderTecnico.css";
import { Divider } from "@mui/material";
import { Input } from "../../../../shared/Input/Input.tsx";
import Grid from "@mui/material/Grid2";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const DetallesDeActividadLiderTecnico = () => {
  const [value, setValue] = React.useState(0);

  const [formData, setFormData] = useState({
    subdireccionGerencia: "Subdirección General de Tecnologías de Información",
    liderTecnico: "Juan Luis Gutiérrez López",
    aplicativoModulo: "SMAX",
    tipo: "Desarrollo del sistema",
    proyecto: "Continuidad operativa",
    jiraSmax: "S-1066361",
    descripcionCorta: "Sistema de gestión de bitácoras de fabricas",
    responsable: "Azir Aguilar Camacho",
    actividadAsignada: "Integración de equipos y orientación de equipos",
    horasLaboradas: "8",
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const realizarObservacion = () => {
    a11yProps(1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="contenido_principal">
        <h1>Validación de bitácoras</h1>
        <div className="contenedor-datos-proyecto">
          <div className="datos-titulo-proyecto">
            <p className="titulo-proyecto">Detalles de la actividad</p>
          </div>
          <div className="datos">
            <p className="datos-proyecto">Periodo: </p>
            <p>Junio - 2024</p>
          </div>
          <div className="datos">
            <p className="datos-proyecto">Fecha de actividad: </p>
            <p>13 / 06 / 2024</p>
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
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Actividad" {...a11yProps(0)} />
                <Tab label="Observaciones" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }} className="col-sm-6">
                  <Input
                    label="Subdirección/Gerencia"
                    type="text"
                    name="subdireccionGerencia"
                    value={formData.subdireccionGerencia}
                    onChange={handleInputChange}
                    disabled={true}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} className="col-sm-6">
                  <Input
                    label="Líder técnico"
                    type="text"
                    name="liderTecnico"
                    value={formData.liderTecnico}
                    onChange={handleInputChange}
                    disabled={true}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} className="col-sm-6">
                  <Input
                    label="Aplicativo/Modulo"
                    type="text"
                    name="aplicativoModulo"
                    value={formData.aplicativoModulo}
                    onChange={handleInputChange}
                    disabled={true}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} className="col-sm-6">
                  <Input
                    label="Tipo"
                    type="text"
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleInputChange}
                    disabled={true}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} className="col-sm-6">
                  <Input
                    label="Proyecto"
                    type="text"
                    name="proyecto"
                    value={formData.proyecto}
                    onChange={handleInputChange}
                    disabled={true}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} className="col-sm-6">
                  <Input
                    label="JIRA o SMAX/ID Incidente"
                    type="text"
                    name="jiraSmax"
                    value={formData.jiraSmax}
                    onChange={handleInputChange}
                    disabled={true}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} className="col-sm-6">
                  <Input
                    label="Descripción corta JIRA o SMAX/incidente"
                    type="text"
                    name="descripcionCorta"
                    value={formData.descripcionCorta}
                    onChange={handleInputChange}
                    disabled={true}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} className="col-sm-6">
                  <Input
                    label="Responsable"
                    type="text"
                    name="responsable"
                    value={formData.responsable}
                    onChange={handleInputChange}
                    disabled={true}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} className="col-sm-6">
                  <Input
                    label="Actividad asignada"
                    type="text"
                    name="actividadAsignada"
                    value={formData.actividadAsignada}
                    onChange={handleInputChange}
                    disabled={true}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} className="col-sm-6">
                  <Input
                    label="Horas  laboradas"
                    type="text"
                    name="horasLaboradas"
                    value={formData.horasLaboradas}
                    onChange={handleInputChange}
                    disabled={true}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 12 }} className="col-sm-6">
                  <label className="label-observaciones">
                    Actividad realizada
                  </label>
                  <textarea
                    disabled
                    className="form-control textarea"
                    aria-label="With textarea"
                    style={{ resize: "none" }}
                  >
                    Elaboración de junta
                  </textarea>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} className="col-sm-6">
                  <button type="button" className="btn btn-principal">
                    Descargar evidencias
                  </button>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} className="col-sm-6">
                  <button
                    type="button"
                    className="btn btn-principal "
                    onClick={realizarObservacion}
                  >
                    Realizar observacion
                  </button>
                </Grid>
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <div>
                <div className="contenedor-textarea-observaciones">
                  <label className="label-observaciones">Observación</label>
                  <textarea
                    className="form-control textarea textarea-observaciones"
                    aria-label="With textarea"
                    style={{ resize: "none" }}
                    placeholder="Escribir observación..."
                  ></textarea>
                  <div className="contenedor-boton-realizar-observacion-actividad">
                    <div className="col-sm-3">
                      <button type="button" className="btn btn-principal ">
                        Realizar observación
                      </button>
                    </div>
                  </div>
                </div>

                <label className="label-observaciones">
                  Observaciones realizadas
                </label>
                <div className="contenedor-observaciones-realizadas">
                  <ul className="contenedor-observaciones">
                    <li>
                      11/01/2024: Primero, quiero reconocer el esfuerzo que
                      pusiste en la revisión de la documentación técnica. Es
                      evidente que te tomaste el tiempo de leerla detenidamente
                      y subrayar los puntos más importantes. Sin embargo, hay
                      algunas áreas que creo que podrías mejorar para obtener
                      mejores resultados en futuras revisiones.
                    </li>
                    <li>
                      12/01/2024: Quiero destacar tu dedicación al completar el
                      análisis del informe técnico. Has demostrado una buena
                      comprensión del material al resaltar los aspectos clave.
                      Sin embargo, considero que podrías profundizar más en
                      ciertos detalles y ofrecer sugerencias adicionales para
                      enriquecer aún más el análisis en futuras revisiones.
                    </li>
                  </ul>
                </div>
              </div>
            </CustomTabPanel>
          </div>
        </div>
      </div>
    </>
  );
};
