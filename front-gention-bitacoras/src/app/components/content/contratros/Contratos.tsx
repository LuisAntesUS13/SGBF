import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import { getContratosData } from "../../../services/contratos.service.tsx";
import { ConsultaContrato } from "../../../model/request/contratos.request.tsx";
import { DatosContratos } from "../../../model/response/contratos.response.tsx";
import { Paginador } from "../../../shared/Paginador/Paginador.tsx";
import { Input } from "../../../shared/Input/Input.tsx";

export const Contratos = () => {
   
    //Datos peticion cunsulta contratos
    const [dataContratos, setDataContrato] = useState<DatosContratos[]>([]);
    const [errorContratos, setErrorContratos] = useState(null);

    // Componente para navegar entre paginas
    const navigate = useNavigate();

     //Formulario busqueda
    const [formData, setFormData] = useState({
        consultor1: "",
        consultor2: "",
      });

      const getDataContratos = async () => {
        const datos: ConsultaContrato = {
            contrato:formData.consultor1,
            consultora: formData.consultor2,
            pagina_actual: 1,
            registros_por_pagina: 10
        }
        try {
            const result = await getContratosData(datos); // Llama a la función que encapsula fetch
            setDataContrato(result.data);
        } catch (error) {
            setErrorContratos(error); // Maneja errores
            console.log(errorContratos);
        }
      };


    useEffect(() => {
        getDataContratos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    //    const [formData2, setFormData2] = useState({
    //     consultor1: "",
    //   });

    //   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     const { name, value } = e.target;
    //     setFormData2({ ...formData2, [name]: value });
    //   };


    //   let proveedorOpciones = [{nombre:"opicon 1", id:1},{nombre:"opicon 2", id:2},{nombre:"opicon 3", id:3}]

    return (<>
        <div className="contenido_principal">
                <h3>Contol de contratos</h3>
                <hr/>
                <div className="card">
                <div className="card-body row">
                    <div className="col-sm-3">
                        <Input label="No. contrato" type="text" name="consultor1" value={formData.consultor1} onChange={handleChange} placeholder="TEXTO" className="" />
                    </div>
                    <div className="col-sm-3">
                        <Input label="No. contrato 2" type="text" name="consultor2" value={formData.consultor2} onChange={handleChange} placeholder="TEXTO" className="" />
                    </div>
                    {/* <div className="col-sm-3">
                        <Select  label="consultor1"  name="consultor1"   value={formData2.consultor1}  onChange={handleSelectChange}  options={proveedorOpciones}
                        placeholder="Selecciona un consultor1"   className="form-select"/>
                    </div> */}
                    <div className="col-sm-3">
                        <button type="button" className="btn btn-principal" style={{ marginTop: '30px'}} title="Buscar"
                        onClick={() =>{ getDataContratos()}}><SearchOutlinedIcon /> Buscar</button>
                    </div>
                </div>
                <div className="card-footer row">
                    <div className="col-sm-3">
                        <button type="button" className="btn btn-accion" title="Nuevo contrato" onClick={() => navigate("/contrato/nuevo")}><ControlPointOutlinedIcon /> Nuevo Contrato</button>
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
                                    {dataContratos.map((dato:DatosContratos,i) => (
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
                    <Paginador datos={dataContratos}/>
                </div>
            </div>
        </div>
    </>)
};
