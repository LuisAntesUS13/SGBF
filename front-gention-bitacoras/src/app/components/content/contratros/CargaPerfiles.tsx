import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import { getContratosData } from "../../../services/contratos.service.tsx";
import { ConsultaContrato } from "../../../model/request/contratos.request.tsx";
import { DatosContratos } from "../../../model/response/contratos.response.tsx";
import { Paginador } from "../../../shared/Paginador/Paginador.tsx";
import { Input } from "../../../shared/Input/Input.tsx";
import { ToastContainer, toast } from 'react-toastify';
import { DatosPerfilesContratos } from "../../../model/response/perfiles.response.tsx";
import { getPerfilesContratos } from "../../../services/perfiles.service.tsx";
import { ConsultaPErfilesContrato } from "../../../model/request/perfiles.request.tsx";

export const DatosPerfiles = () => {

     // Componente para navegar entre paginas
     const navigate = useNavigate();

    //Datos peticion cunsulta contratos

    const [dataPerfiles, setDataPerfiles] = useState<DatosPerfilesContratos[]>([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [registrosPorPagina, setRegistrosPorPagina] = useState(10);

    const getDataPerfiles = async (pagina = 1, registros = 10, mosrar = false) => {
        const datos:ConsultaPErfilesContrato = {
          id_contrato: formulario.id_contrato,
          pagina_actual: pagina,
          registros_por_pagina: registros
        };

        try {
          const result = await getPerfilesContratos(datos);
          setDataPerfiles(result.data);
          console.log("Llega mansaje  bien " + result)
          if(mosrar){
            toast.success(result.mensaje, {});
          }
        } catch (error) {
            console.log("Llega mansaje  error ")
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

     //Formulario busqueda
    const [formulario, setFormulario] = useState({
        id_contrato: 0,
        perfil: "",
    });

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
                        <Input label="Perfil" type="text" name="perfil" value={formulario.perfil} onChange={handleChange} placeholder="Perfil" className="" />
                    </div>
                    <div className="col-sm-3">
                        <button type="button" className="btn btn-principal" style={{ marginTop: '30px'}} title="Buscar"
                        onClick={() =>{ buscarPerfiles()}}><SearchOutlinedIcon /> Buscar</button>
                    </div>
                </div>
            </div>
            <div className="card" >
                <div className="card-body row">
                    <div className="col-sm-12">
                        <table className="table table-hover">
                            <thead>
                                <tr className="valoresCentrados">
                                    <th scope="col" className="valoresCentrados">Perfil</th>
                                    <th scope="col" className="valoresCentrados">Monto</th>
                                    <th scope="col" className="valoresCentrados">Cantidad</th>
                                    <th scope="col" className="valoresCentrados">Descripción</th>
                                    <th scope="col" className="valoresCentrados">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                            {dataPerfiles.map((dato:DatosPerfilesContratos,i) => (
                                                        <tr>
                                                            <td className="valoresCentrados">{dato.nombre}</td>
                                                            <td className="valoresCentrados">{dato.monto}</td>
                                                            <td className="valoresCentrados">{dato.cantidad}</td>
                                                            <td className="valoresCentrados">{dato.descripcion}</td>
                                                            <td className="valoresCentrados"></td>
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
};
