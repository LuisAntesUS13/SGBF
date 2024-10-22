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
import "../RegistroDeEquipoYLider/RegistroDeEquipoDeTrabajo.css";
import { InputCalendario } from "../../../../shared/Calendario/InputCalendatio.tsx";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

interface Fila {
  contrato: string;
  liderTecnico: string;
  consultores: string;
  fechaInicio: string;
}

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
  const [formData, setFormData] = useState<Fila>({
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

  const [filas, setFilas] = useState<Fila[]>([]);

  const agregarFila = () => {
    setFilas((prev) => [...prev, formData]);
    setFormData({
      contrato: "",
      liderTecnico: "",
      consultores: "",
      fechaInicio: "",
    });
    console.log(filas);
    console.log(formData);
  };

  useEffect(() => {
    getContrato();
    getLiderTecnico();
    getConsultor();
  }, []);
  // Ejecuta funciones cada vez que se agrega una nueva fila

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
                    placeholder="Seleccione una opción"
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
                    placeholder="Seleccione una opción"
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
                    placeholder="Seleccione una opción"
                    value={formData.consultores}
                    onChange={handleSelectChange}
                    options={consultor}
                    className="form-select"
                  />
                </div>
                <div className="col-sm-3">
                  <InputCalendario
                    label="Fecha de inicio de actividades"
                    name="fechaInicio"
                    value={formData.fechaInicio}
                    onChange={handleSelectChange}
                  />
                </div>

                <div className="col-sm-2">
                  <button
                    type="button"
                    className="btn btn-principal"
                    title="Buscar"
                    style={{ marginTop: "30px" }}
                    onClick={agregarFila}
                  >
                    Asignar
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="card-body row">
                <hr />
                <table className="table ">
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
                      <th className="valoresCentrados"> Algo</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {filas.map((fila, index) => (
                      <tr key={index} className="valoresCentrados">
                        <td>td{fila.contrato}</td>
                        <td>{fila.liderTecnico}</td>
                        <td>{fila.consultores}</td>
                        <td>{fila.fechaInicio}</td>
                        <td>
                          <PersonRemoveIcon className="person-remove-icon" />
                        </td>
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
