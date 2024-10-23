import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { getContratosData } from "../../../services/contratos.service.tsx";
import { ConsultaContrato } from "../../../model/request/contratos.request.tsx";
import { DatosContratos } from "../../../model/response/contratos.response.tsx";
import { Paginador } from "../../../shared/Paginador/Paginador.tsx";
import { Input } from "../../../shared/Input/Input.tsx";
import { ToastContainer, toast } from 'react-toastify';

export const PeriodosContratos = () => {

    // Componente para navegar entre paginas
    const navigate = useNavigate();

    //Datos peticion cunsulta contratos
    const [dataContratos, setDataContrato] = useState<DatosContratos[]>([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [registrosPorPagina, setRegistrosPorPagina] = useState(10);

    const getDataContratos = async (pagina = 1, registros = 10, mosrar = false) => {
        const datos: ConsultaContrato = {
            contrato: formulario.contrato,
            consultora: formulario.consultora,
            pagina_actual: pagina,
            registros_por_pagina: registros
        };

        try {
            const result = await getContratosData(datos);
            setDataContrato(result.data);
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
    const buscarContratos = async () => {
        setPaginaActual(1);
        await getDataContratos(1, registrosPorPagina, true);
    };

    const handlePaginacion = (pagina, registros) => {
        setPaginaActual(pagina);
        setRegistrosPorPagina(registros);
    };

    //Formulario busqueda
    const [formulario, setFormulario] = useState({
        contrato: "",
        consultora: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
    };

    useEffect(() => {
        getDataContratos(paginaActual, registrosPorPagina, false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paginaActual, registrosPorPagina]);

    return (<>
        <div className="contenido_principal">
            <h3>Control de periodos del contrato</h3>
            <hr />
            <div className="card">
                <div className="card-body row">
                    <div className="col-sm-3">
                        <Input label="No. contrato" type="text" name="contrato" value={formulario.contrato} onChange={handleChange} placeholder="Numero de contrato" className="" />
                    </div>
                    <div className="col-sm-3">
                        <Input label="Proveedor" type="text" name="consultora" value={formulario.consultora} onChange={handleChange} placeholder="Consultora" className="" />
                    </div>
                    <div className="col-sm-3">
                        <button type="button" className="btn btn-principal" style={{ marginTop: '30px' }} title="Buscar"
                            onClick={() => { buscarContratos() }}><SearchOutlinedIcon /> Buscar</button>
                    </div>
                </div>
            </div>
            <div className="card" >
                <div className="card-body row">
                    <div className="col-sm-12">
                        <table className="table table-hover">
                            <thead>
                                <tr className="valoresCentrados">
                                    <th scope="col" className="valoresCentrados">No. Contrato</th>
                                    <th scope="col" className="valoresCentrados">Fecha inicio</th>
                                    <th scope="col" className="valoresCentrados">Fecha termino</th>
                                    <th scope="col" className="valoresCentrados">Fechas del primer periodo</th>
                                    <th scope="col" className="valoresCentrados">Numero de periodos</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataContratos.map((dato: DatosContratos, i) => (
                                    <tr key={i} style={{ cursor: 'pointer' }} onClick={() => navigate("/periodosContrato/actualizar", { state: dato })}>
                                        <td className="valoresCentrados">{dato.no_contrato}</td>
                                        <td className="valoresCentrados">{dato.fh_inicio}</td>
                                        <td className="valoresCentrados">{dato.fh_fin}</td>
                                        <td className="valoresCentrados">{(dato.fh_inicio_periodo === null || dato.fh_fin_periodo === null) ? 
                                                                           "Sin periodo inicial": dato.fh_inicio_periodo + " - " + dato.fh_fin_periodo }</td>
                                        <td className="valoresCentrados">{dato.no_periodos === null? "Sin numero de periodos" : dato.no_periodos}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Paginador totalRegistros={dataContratos.length > 0 ? dataContratos[0].total_registros : 0} paginaActual={paginaActual}
                        registrosPorPagina={registrosPorPagina} onCambioPagina={handlePaginacion} />
                </div>
            </div>
        </div>

        <ToastContainer position="top-right" limit={4} autoClose={3000} hideProgressBar={false} newestOnTop={false}
            closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />

    </>)
};