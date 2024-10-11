import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { DatosPerfilesContratos } from "../../../model/response/perfiles.response";
import { ConsultaPErfilesContrato } from "../../../model/request/perfiles.request";
import { Input } from "../../../shared/Input/Input.tsx";
import { Paginador } from "../../../shared/Paginador/Paginador.tsx";
import { getPerfilesContratos } from "../../../services/perfiles.service.tsx";

export const CargaPerfiles = () => {
    // Componente para navegar entre paginas
    const navigate = useNavigate();
    

    //Formulario busqueda
    const [formulario, setFormulario] = useState({
        id_contrato: "0"
    });

    const [dataPerfiles, setDataPerfiles] = useState<DatosPerfilesContratos[]>([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [registrosPorPagina, setRegistrosPorPagina] = useState(10);

    const getDataPerfiles = async (pagina = 1, registros = 10, mosrar = false) => {
        const datos:ConsultaPErfilesContrato = {
          id_contrato: formulario.id_contrato !== "" ? parseInt(formulario.id_contrato) : 0,
          pagina_actual: pagina,
          registros_por_pagina: registros
        };

        try {
          const result = await getPerfilesContratos(datos);
          setDataPerfiles(result.data);
          if(mosrar){
            toast.success(result.mensaje, {});
          }
        } catch (error) {
          console.log(error);
          toast.error(error.mensaje, {});
        }
    };

     // Función de búsqueda que reinicia a la página 1
    const buscarPerfiles = async () => {
        setPaginaActual(1);
        await getDataPerfiles(1, registrosPorPagina, true); 
    };

    const handlePaginacion = (pagina, registros) => {
        setPaginaActual(pagina);
        setRegistrosPorPagina(registros);
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
    };
    
    useEffect(() => {
        getDataPerfiles(paginaActual, registrosPorPagina,false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paginaActual, registrosPorPagina]);



    return (<>
        <div className="contenido_principal">
            <h3>Carga de Perfiles</h3>
            <hr/>
            <div className="card">
                <div className="card-body row">
                    <div className="col-sm-3">
                        <Input label="No. contrato" type="text" name="id_contrato" value={formulario.id_contrato} onChange={handleChange} placeholder="SG0909" className="" />
                    </div>
                    <div className="col-sm-3">
                        <button type="button" className="btn btn-principal" style={{ marginTop: '30px' }} title="Buscar"
                        onClick={() =>{ buscarPerfiles()}}><SearchOutlinedIcon /></button>
                    </div>
                </div>
            </div>
            <div className="card" >
                <div className="card-body row">
                    <div className="col-sm-12">
                        <table className="table table-hover">
                            <thead>
                                <tr className="valoresCentrados">
                                    <th scope="col" className="valoresCentrados">Nombre</th>
                                    <th scope="col" className="valoresCentrados">Descripción</th>
                                    <th scope="col" className="valoresCentrados">Total recursos</th>
                                    <th scope="col" className="valoresCentrados">Recursos asignados</th>
                                    <th scope="col" className="valoresCentrados">Estatus</th>
                                </tr>
                            </thead>
                            <tbody>
                            {dataPerfiles.map((dato:DatosPerfilesContratos,i) => (
                                            <tr>
                                                <td className="valoresCentrados">{dato.nombre}</td>
                                                <td className="valoresCentrados">{dato.descripcion}</td>
                                                <td className="valoresCentrados">{dato.monto}</td>
                                                <td className="valoresCentrados">{dato.id_nivel}</td>
                                                <td className="valoresCentrados">Activo</td>
                                            </tr>
                                        ))}
                            </tbody>
                        </table>
                    </div>
                    <Paginador totalRegistros={dataPerfiles.length > 0 ? dataPerfiles[0].total_registros: 0 }   paginaActual={paginaActual} 
                      registrosPorPagina={registrosPorPagina}   onCambioPagina={handlePaginacion} />
                </div>
            </div>
        </div>

        <ToastContainer position="top-right" limit={4} autoClose={3000} hideProgressBar={false}  newestOnTop={false}
                closeOnClick  rtl={false}   pauseOnFocusLoss  draggable  pauseOnHover  theme="colored" />

    </>)
}