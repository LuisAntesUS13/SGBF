import React, { useState } from "react";
import { Separador } from "../../../../shared/SeparadorTexto/SeparadorTexto.tsx";

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Select } from "../../../../shared/Select/Select.tsx";
import { Paginador } from "../../../../shared/Paginador/Paginador.tsx";

const contratoOpciones = [
  { id: "1", nombre: "123ASD7-A" },
  { id: "2", nombre: "123ASD7-B" },
  { id: "3", nombre: "123ASD7-C" },
];

const liderTecnicoOpciones = [
  { id: "1", nombre: "Jose Luis Jimenez" },
  { id: "2", nombre: "Raul Astorga" },
  { id: "3", nombre: "Karla Trasviña" },
];

const consultoresOpciones = [
  { id: "1", nombre: "Jose Luis Jimenez" },
  { id: "2", nombre: "Raul Astorga" },
  { id: "3", nombre: "Karla Trasviña" },
];

export const RegistroDeEquipoDeTrabajo = () => {
  const [dataPerfiles, setDataPerfiles] = useState([]);
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
  });

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
                  title="Buscar"
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
                    options={contratoOpciones}
                    className="form-select"
                  />
                </div>
                <div className="col-sm-3">
                  <Select
                    label="Líder técnico"
                    name="liderTecnico"
                    value={formData.contrato}
                    onChange={handleSelectChange}
                    options={liderTecnicoOpciones}
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
                    options={liderTecnicoOpciones}
                    className="form-select"
                  />
                </div>
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
