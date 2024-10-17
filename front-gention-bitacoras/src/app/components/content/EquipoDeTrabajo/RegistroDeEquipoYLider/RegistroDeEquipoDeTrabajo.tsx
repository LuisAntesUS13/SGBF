import React, { useEffect, useState } from "react";
import { Separador } from "../../../../shared/SeparadorTexto/SeparadorTexto.tsx";

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Option, Select } from "../../../../shared/Select/Select.tsx";
import { Paginador } from "../../../../shared/Paginador/Paginador.tsx";
import { useNavigate } from "react-router-dom";
import {
  getConsultores,
  getContratos,
  getLideresTecnicos,
} from "../../../../services/equipoDeTrabajo.service.tsx";
import ResponsiveDatePickers from "../../../../shared/DatePicker/DatePicker.tsx";
import "../RegistroDeEquipoYLider/RegistroDeEquipoDeTrabajo.css";

export const RegistroDeEquipoDeTrabajo = () => {
  const navigate = useNavigate();

  const handleAsginarEquipoClick = () => {
    navigate("/equipos-de-trabajo");
  };

  const [dataPerfiles, setDataPerfiles] = useState([]);
  const [contrato, setContrato] = useState<Option[]>([]);
  const [liderTecnico, setLiderTecnico] = useState<Option[]>([]);
  const [consultor, setConsultor] = useState<Option[]>([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [registrosPorPagina, setRegistrosPorPagina] = useState(10);

  const handlePaginacion = (pagina, registros) => {
    setPaginaActual(pagina);
    setRegistrosPorPagina(registros);
  };
  const [formData, setFormData] = useState({
    contrato: "",
    liderTecnico: "",
    consultores: "",
    fechaInicio: "",
  });

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getContrato = async () => {
    try {
      const result = await getContratos();
      const resultadoFormateado: Option[] = result.data.map((contrato) => ({
        id: contrato.id_contrato,
        nombre: contrato.no_contrato,
      }));
      setContrato(resultadoFormateado);
    } catch (error) {
      console.log(error);
    }
  };

  const getLiderTecnico = async () => {
    try {
      const result = await getLideresTecnicos();
      const resultadoFormateado: Option[] = result.data.map((liderTecnico) => ({
        id: liderTecnico.id_usuario,
        nombre: liderTecnico.nombre_completo,
      }));
      setLiderTecnico(resultadoFormateado);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContrato();
    getLiderTecnico();
  }, []);

  const getConsultor = async () => {
    try {
      const result = await getConsultores();
      const resultadoFormateado: Option[] = result.data.map((consultor) => ({
        id: consultor.id_usuario,
        nombre: consultor.nombre_completo,
      }));
      setConsultor(resultadoFormateado);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContrato();
    getLiderTecnico();
    getConsultor();
  }, []);

  return (
    <>
      <div className="contenido_principal">
        <h3>Registro de equipos de trabajo</h3>
        <hr />
        <div className="row">
          <div className="card">
            <div className="card-header row">
              <div className="col-sm-3   ">
                <button
                  type="button"
                  className="btn btn-accion-sec"
                  title="Buscar"
                  onClick={handleAsginarEquipoClick}
                >
                  <KeyboardReturnIcon />
                </button>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="card-body row">
                <Separador texto="Datos del contrato y líder técnico" />
                <div className="col-sm-3">
                  <Select
                    label="Contrato"
                    name="contrato"
                    value={formData.contrato}
                    onChange={handleSelectChange}
                    options={contrato}
                    className="form-select"
                  />
                </div>
                <div className="col-sm-3">
                  <Select
                    label="Líder técnico"
                    name="liderTecnico"
                    value={formData.liderTecnico}
                    onChange={handleSelectChange}
                    options={liderTecnico}
                    className="form-select"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="card-body row">
                <Separador texto="Selección de consultores" />
                <div className="col-sm-3">
                  <Select
                    label="Consultores"
                    name="consultores"
                    value={formData.consultores}
                    onChange={handleSelectChange}
                    options={consultor}
                    className="form-select"
                  />
                </div>
                <div className="col-sm-3">
                  <ResponsiveDatePickers />
                </div>
                {/* <label className="form-label">Fecha de inicio</label>
                  <input
                    type="date"
                    className="form-control"
                    name="fechaTermino"
                  /> */}

                <div className="col-sm-2">
                  <button
                    type="button"
                    className="btn btn-principal"
                    title="Buscar"
                    style={{ marginTop: "30px" }}
                  >
                    Asignar
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="card-body row">
                <hr />
                <table className="table table-hover">
                  <thead>
                    <tr className="valoresCentrados">
                      <th scope="col" className="valoresCentrados">
                        Consultor
                      </th>
                      <th scope="col" className="valoresCentrados">
                        Perfil
                      </th>
                      <th scope="col" className="valoresCentrados">
                        Fecha de Inicio
                      </th>
                      <th scope="col" className="valoresCentrados">
                        Estatus
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataPerfiles.map((dato, i) => (
                      <tr>
                        <td className="valoresCentrados"></td>
                        <td className="valoresCentrados"></td>
                        <td className="valoresCentrados"></td>
                        <td className="valoresCentrados"></td>
                        <td className="valoresCentrados"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Paginador
                  totalRegistros={dataPerfiles.length > 0 ? 1 : 0}
                  paginaActual={paginaActual}
                  registrosPorPagina={registrosPorPagina}
                  onCambioPagina={handlePaginacion}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
