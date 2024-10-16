import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { ToastContainer, toast } from 'react-toastify';
import { DatosPerfilesContratos } from "../../../../model/response/perfiles.response.tsx";
import { Input } from "../../../../shared/Input/Input.tsx";
import { Paginador } from "../../../../shared/Paginador/Paginador.tsx";
import './ReasignacionLider.css';
import { ConsultaReasignarLider } from "../../../../model/request/reasignacionLider.tsx";
import { getLideresData } from "../../../../services/lideres.service.tsx";


export const ReasignacionLider = () => {

    // Componente para navegar entre paginas
    const navigate = useNavigate();

    //Datos peticion cunsulta contratos

    const [dataLider, setDataLider] = useState<DatosPerfilesContratos[]>([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [registrosPorPagina, setRegistrosPorPagina] = useState(10);

    const getDataLider = async (pagina = 1, registros = 10, mosrar = false) => {
        const datos: ConsultaReasignarLider = {
            contrato: formulario.contrato,
            consultora: formulario.consultora,
            lider: formulario.lider,
            pagina_actual: pagina,
            registros_por_pagina: registros
        };

        try {
            const result = await getLideresData(datos);
            // setDataLider(result.data);
            console.log("Llega mansaje  bien " + result)
            if (mosrar) {
                toast.success(result.mensaje, {});
            }
        } catch (error) {
            console.log("Llega mansaje  error ")
            console.log(error);
            toast.error(error.mensaje, {});
        }
    };

    // Función de búsqueda que reinicia a la página 1
    const buscarDataLider = async () => {
        setPaginaActual(1);
        await getDataLider(1, registrosPorPagina, true);
    };

    const handlePaginacion = (pagina, registros) => {
        setPaginaActual(pagina);
        setRegistrosPorPagina(registros);
    };

    //Formulario busqueda
    const [formulario, setFormulario] = useState({
        contrato: "",
        consultora: "",
        lider:""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
    };

    useEffect(() => {
        getDataLider(paginaActual, registrosPorPagina, false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paginaActual, registrosPorPagina]);

    return (<>
        <div className="contenido_principal">
            <h3>Reasignacion de lider</h3>
            <hr />
            <div className="card">
                <div className="card-body row">
                    <div className="col-sm-3">
                        <Input label="No. contrato" type="text" name="contrato" value={formulario.contrato} onChange={handleChange} placeholder="SG0909" className="" />
                    </div>
                    <div className="col-sm-3">
                        <Input label="Consultora" type="text" name="consultora" value={formulario.consultora} onChange={handleChange} placeholder="Ultrasist" className="" />
                    </div>
                    <div className="col-sm-3">
                        <Input label="Lider" type="text" name="lider" value={formulario.lider} onChange={handleChange} placeholder="Ultrasist" className="" />
                    </div>
                    <div className="col-sm-3">
                        <button type="button" className="btn btn-bscr" style={{ marginTop: '30px'}} title="Buscar"
                            onClick={() => { buscarDataLider() }}><SearchOutlinedIcon />Buscar</button>
                    </div>
                </div>
            </div>
            <div className="card" >
                <div className="card-body row">
                    <div className="col-sm-12">
                        <Paginador totalRegistros={dataLider.length > 0 ? dataLider[0].total_registros : 0} paginaActual={paginaActual}
                            registrosPorPagina={registrosPorPagina} onCambioPagina={handlePaginacion} />
                        <table className="table table-hover">
                            <thead>
                                <tr className="valoresCentrados">
                                    <th scope="col" className="valoresCentrados">No. Contrato</th>
                                    <th scope="col" className="valoresCentrados">Lider tecnico</th>
                                    <th scope="col" className="valoresCentrados">Total integrantes</th>
                                    <th scope="col" className="valoresCentrados">Estatus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {dataPerfiles.map((dato:DatosPerfilesContratos,i) => ( */}
                                <tr onClick={() => navigate("/reasignacion-de-lider/actualizar")}>
                                    <td className="valoresCentrados">CT-0015-24</td>
                                    <td className="valoresCentrados">Joel Cuevas Carbajal</td>
                                    <td className="valoresCentrados">3</td>
                                    <td className="valoresCentrados">Activo</td>
                                </tr>
                                {/* ))} */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <ToastContainer position="top-right" limit={4} autoClose={3000} hideProgressBar={false} newestOnTop={false}
            closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />

    </>)
};
