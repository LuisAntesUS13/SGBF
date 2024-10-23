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
import { ToastContainer, toast } from "react-toastify";
import { EquipoDeTrabajo } from "../../../../model/interface/equiposDeTrabajo.interface.tsx";

interface Fila {
  contrato: string;
  liderTecnico: string;
  consultor: string;
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
    consultor: "",
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
    const datoDeContrato = contrato.find((e) => e.id == formData.contrato);
    const datoDeLiderTecnico = liderTecnico.find(
      (e) => e.id == formData.liderTecnico
    );
    const datoDeConsultor = consultor.find((e) => e.id == formData.consultor);

    setFilas((prev) => [
      ...prev,
      {
        contrato: datoDeContrato?.nombre || "",
        liderTecnico: datoDeLiderTecnico?.nombre || "",
        consultor: datoDeConsultor?.nombre || "",
        fechaInicio: formData.fechaInicio,
      },
    ]);

    setFormData((prevFormData) => ({
      ...prevFormData, // Mantén los demás campos intactos
      consultor: "",
      fechaInicio: "",
    }));
  };
  useEffect(() => {
    getContrato();
    getLiderTecnico();
    getConsultor();
  }, []);
  // Ejecuta funciones cada vez que se agrega una nueva fila

  const eliminarFila = (index: number) => {
    setFilas((prev) => prev.filter((_, i) => i !== index));
    console.log(filas);
    console.log(formData);
  };

  const [habilitarCampos, setHabilitarCampos] = useState(false); // Estado para habilitar/deshabilitar

  const [fieldEquipoDeTrabajo, setFieldEquipoDeTrabajo] = useState({
    liderTecnico: "form-control",
    contrato: "form-control",
    consultor: "form-control",
    fechaInicio: "form-control",
  });

  const asignarConsultorAEquipoDeTrabajo = () => {
    const newFieldEquipoDeTrabajo: EquipoDeTrabajo = {
      liderTecnico: "form-control",
      contrato: "form-control",
      consultor: "form-control",
      fechaInicio: "form-control",
    };

    let isValid = true; // Variable para verificar si el formulario es válido
    console.log(isValid);

    for (const key in formData) {
      // Verifica si el campo no es opcional
      if (formData[key] === null || formData[key] === "") {
        newFieldEquipoDeTrabajo[key as keyof EquipoDeTrabajo] =
          "form-control invalid-class";
        isValid = false;
        console.log(isValid);
      }
    }

    setFieldEquipoDeTrabajo(newFieldEquipoDeTrabajo);

    if (isValid) {
      toast.success("Se agregó el equipo correctamente", {});

      agregarFila();
    } else {
      toast.error("Los campos  marcados son obligatorios", {});
    }
  };

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
                  title="asignar"
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
                    className={fieldEquipoDeTrabajo.contrato}
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
                    className={fieldEquipoDeTrabajo.liderTecnico}
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
                    name="consultor"
                    placeholder="Seleccione una opción"
                    value={formData.consultor}
                    onChange={handleSelectChange}
                    options={consultor}
                    className={fieldEquipoDeTrabajo.consultor}
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
                    onClick={asignarConsultorAEquipoDeTrabajo}
                  >
                    Agregar
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
                        Fecha de Inicio de actividades
                      </th>
                      <th scope="col" className="valoresCentrados">
                        Estatus
                      </th>
                      <th className="valoresCentrados">Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filas.map((fila, index) => (
                      <tr key={index} className="valoresCentrados rows-tabla">
                        <td>{fila.consultor}</td>
                        <td>Desarrollador sr. Java</td>
                        <td>{fila.fechaInicio}</td>
                        <td>Activo</td>
                        <td>
                          <button
                            onClick={() => eliminarFila(index)}
                            className="person-remove-button"
                          >
                            <PersonRemoveIcon className="person-remove-icon" />
                          </button>{" "}
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
