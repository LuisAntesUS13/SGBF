import React, { useEffect, useState } from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import { getContratosData } from "../../../services/contratos.service.tsx";
import { ConsultaContrato } from "../../../model/contratos.model.tsx";

export const Contratos = () => {
    //Formulario busqueda
    const [contrato, setContrato] = useState("");
    const [consultora, setConsultora] = useState("");

    //Datos peticion cunsulta contratos
    const [dataContratos, setDataContrato] = useState<any[]>([]);
    const [errorContratos, setErrorContratos] = useState(null);

    useEffect(() => {
        console.log("render");
    },[])

    const getDataContratos = async () => {
        const datos: ConsultaContrato = {
            contrato:contrato,
            consultora: consultora,
            pagina_actual: 1,
            registros_por_pagina: 10
        }
        try {
          const result = await getContratosData(datos); // Llama a la función que encapsula fetch
          setDataContrato(result.data);
          console.log(dataContratos);
        } catch (error) {
            setErrorContratos(error); // Maneja errores
            console.log(errorContratos);
        }
      };



    return (<>
        <div className="contenido_principal">
                <h3>Contol de contratos</h3>
                <hr/>
                <div className="card">
                <div className="card-body row">
                    <div className="col-sm-3">
                        <label className="form-label">No. contrato</label>
                        <input type="text" className="form-control" id="contrato" placeholder="SG0909" onChange={(e) =>{setContrato(e.target.value)}}/>
                    </div>
                    <div className="col-sm-3">
                        <label className="form-label">Consultora</label>
                        <input type="text" className="form-control" id="consulta" placeholder="ultra" onChange={(e) =>{setConsultora(e.target.value)}}/>
                    </div>
                    <div className="col-sm-3">
                        <button type="button" className="btn btn-principal" style={{ marginTop: '30px'}} title="Buscar"
                        onClick={() =>{ getDataContratos()}}
                        ><SearchOutlinedIcon /> Buscar</button>
                    </div>
                </div>
                <div className="card-footer row">
                    <div className="col-sm-3">
                        <button type="button" className="btn btn-accion" title="Nuevo contrato"><ControlPointOutlinedIcon /> Nuevo Contrato</button>
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
                                    <th scope="col" className="valoresCentrados">Monto</th>
                                    <th scope="col" className="valoresCentrados">Consultora</th>
                                    <th scope="col" className="valoresCentrados">Tipo contrato</th>
                                    <th scope="col" className="valoresCentrados">Forma pago</th>
                                    <th scope="col" className="valoresCentrados">Estatus</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {dataContratos.map((dato:any,i) => (
                                        <tr key={i}>
                                            <td className="valoresCentrados">{dato.no_contrato}</td>
                                            <td className="valoresCentrados">{dato.fh_inicio}</td>
                                            <td className="valoresCentrados">{dato.fh_fin}</td>
                                            <td className="valoresCentrados">{dato.monto_total}</td>
                                            <td className="valoresCentrados">{dato.consultora}</td>
                                            <td className="valoresCentrados">{dato.tipo_contrato}</td>
                                            <td className="valoresCentrados">{dato.forma_pago}</td>
                                            <td className="valoresCentrados">{dato.activo ? 'Activo': 'Inactivo'}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
    </>)
};