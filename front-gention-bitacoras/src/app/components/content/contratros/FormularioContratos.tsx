import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import SaveIcon from '@mui/icons-material/Save';

export const FormularioContratos = () => {
    // Componente para navegar entre paginas
    const navigate = useNavigate();

    //Formulario contratos
    const [contrato, setContrato] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaTermino, setFechaTermino] = useState("");
    const [formaPago, setFormaPago] = useState("");
    const [tipoContrato, setTipoContrato] = useState("");
    const [consultora, setConsultora] = useState("");
    const [consultores, setConsultores] = useState("");
    const [montoVariable, setMontoVariable] = useState("");
    const [montoFijo, setMontoFijo] = useState("");
    const [montoTotal, setMontoTotal] = useState("");
    const [cargaContrato, setCargaContrato] = useState("");
    const [direccion, setDireccion] = useState("");
    const [gerente, setGerente] = useState("");

    return (<>
        <div className="contenido_principal">
            <h3>Nuevo contrato</h3>
            <hr />
            <div className="card">
                <div className="card-header d-flex justify-content-start align-items-center">
                    <div className="col-sm-3 text-start">
                        <button type="button" className="btn btn-accion" title="Volver" onClick={() => navigate("/contrato")}
                        ><KeyboardReturnIcon /></button>
                    </div>
                </div>
                <div className="card-body row">
                    <div className="col-sm-12">
                        <div className="col-sm-3">
                            <label className="form-label">No. contrato</label>
                            <input type="text" className="form-control" id="contrato" placeholder="SG0909" />
                        </div>
                    </div>
                    <div className="col-12 row">
                        <div className="col-sm-4">
                            <label className="form-label">Fecha de inicio</label>
                            <input
                                type="date" className="form-control" id="fechaInicio"
                            />
                        </div>
                        <div className="col-sm-4">
                            <label className="form-label">Fecha de término</label>
                            <input
                                type="date" className="form-control" id="fechaTermino"
                            />
                        </div>
                    </div>
                    <div className="col-sm-12 row">
                        <div className="col-sm-4">
                            <label className="form-label">Selecciona forma de pago</label>
                            <select className="form-control" id="formaPago">
                                <option value="">Selecciona una opción</option>
                                <option value="efectivo">Efectivo</option>
                                <option value="tarjeta">Tarjeta</option>
                                <option value="transferencia">Transferencia</option>
                            </select>
                        </div>

                        <div className="col-sm-4">
                            <label className="form-label">Selecciona tipo de contrato</label>
                            <select className="form-control" id="tipoContrato">
                                <option value="">Selecciona una opción</option>
                                <option value="temporal">Temporal</option>
                                <option value="indefinido">Indefinido</option>
                                <option value="porProyecto">Por Proyecto</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-12 row">
                        <div className="col-sm-4">
                            <label className="form-label">Capture o seleccione a la consultora</label>
                            <input type="text" className="form-control" id="consultora" placeholder=""/>
                        </div>
                        <div className="col-sm-4">
                            <label className="form-label">No. consultores requeridos</label>
                            <input type="text" className="form-control" id="consultores" placeholder=""/>
                        </div>
                    </div>
                    <div className="col-sm-12 row">
                        <div className="col-sm-4">
                            <label className="form-label">Monto variable</label>
                            <input type="text" className="form-control" id="montoVariable" placeholder=""/>
                        </div>
                        <div className="col-sm-4">
                            <label className="form-label">Monto fijo</label>
                            <input type="text" className="form-control" id="montoFijo" placeholder=""/>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="col-sm-4">
                            <label className="form-label">Monto total</label>
                            <input type="text" className="form-control" id="montoTotal" placeholder=""/>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="col-sm-12">
                            <label className="form-label">Carga de contrato</label>
                            <input type="file" className="form-control" id="cargaContrato" placeholder=""/>
                        </div>
                    </div>
                    <div className="col-sm-12 row">
                        <div className="col-sm-3">
                            <label className="form-label">Direccion/subdireccion</label>
                            <input type="text" className="form-control" id="direccion" placeholder=""/>
                        </div>
                        <div className="col-sm-3">
                            <label className="form-label">Gerente</label>
                            <input type="text" className="form-control" id="gerente" placeholder=""/>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-end align-items-center">
                    <div className="col-sm-3 text-end">
                        <button type="button" className="btn btn-principal" title="Guardar"
                        ><SaveIcon /></button>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default FormularioContratos;