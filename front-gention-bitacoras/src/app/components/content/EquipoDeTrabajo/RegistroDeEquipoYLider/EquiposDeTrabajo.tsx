import React, { useState } from "react";
import { Input } from "../../../../shared/Input/Input.tsx";
import { Paginador } from "../../../../shared/Paginador/Paginador.tsx";
import { useNavigate } from "react-router-dom";

export const EquiposDeTrabajo = () => {
  const navigate = useNavigate();

  const handleAsignacionDeEquipoClick = () => {
    navigate("/registro-de-equipos-de-trabajo");
  };

  const [dataPerfiles, setDataPerfiles] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [registrosPorPagina, setRegistrosPorPagina] = useState(10);

  const handlePaginacion = (pagina, registros) => {
    setPaginaActual(pagina);
    setRegistrosPorPagina(registros);
  };

  const [formulario, setFormulario] = useState({
    noContrato: "",
    consultor: "",
    lider: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };
  return (
    <>
      <div className="contenido_principal">
        <h3>Asignación equipos de trabajo</h3>
        <hr />
        <div className="card">
          <div className="card-body row">
            <div className="col-sm-3">
              <Input
                label="No. contrato"
                type="text"
                name="contrato"
                value={formulario.noContrato}
                onChange={handleChange}
                placeholder="SG0909"
                className=""
              />
            </div>
            <div className="col-sm-3">
              <Input
                label="Consultor"
                type="text"
                name="contrato"
                value={formulario.consultor}
                onChange={handleChange}
                placeholder="SG0909"
                className=""
              />
            </div>
            <div className="col-sm-3">
              <Input
                label="Líder"
                type="text"
                name="contrato"
                value={formulario.lider}
                onChange={handleChange}
                placeholder="SG0909"
                className=""
              />
            </div>
            <div className="col-sm-1">
              <button
                type="button"
                className="btn btn-principal"
                style={{ marginTop: "30px" }}
                title="Buscar"
              >
                Buscar
              </button>
            </div>
          </div>
          <div className="card-footer row">
            <div className="col-sm-3" style={{ margin: "8px 0px" }}>
              <button
                type="button"
                className="btn btn-secundario"
                onClick={handleAsignacionDeEquipoClick}
              >
                Asignar Equipo
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body row">
            <div className="col-sm-12">
              <table className="table table-hover">
                <thead>
                  <tr className="valoresCentrados">
                    <th scope="col" className="valoresCentrados">
                      Número de contrato
                    </th>
                    <th scope="col" className="valoresCentrados">
                      Líder técnico
                    </th>
                    <th scope="col" className="valoresCentrados">
                      Total de integrantes
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
    </>
  );
};
