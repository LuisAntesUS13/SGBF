import React from "react";

export const Contratos = () => {
    return (<>
        <div className="contenido_principal">
                <h3>Contol de contratos</h3>
                <hr/>
                <div className="card">
                <div className="card-body row">
                    <div className="col-sm-3">
                        <label className="form-label">No. contrato</label>
                        <input type="text" className="form-control" id="contrato" placeholder="SG0909"/>
                    </div>
                    <div className="col-sm-3">
                        <label className="form-label">Consultora</label>
                        <input type="text" className="form-control" id="consulta" placeholder="ultra"/>
                    </div>
                    <div className="col-sm-3">
                        <button type="button" className="btn btn-principal"  title="Buscar">sdfsdfsdf</button>
                        <button className="btn btn-succes" >sdasdsad</button>
                    </div>
                </div>
                <div className="card-footer row">
                    <div className="col-sm-3">
                        <button type="button" className="btn btn-accion" title="Nuevo contrato"><i className="bi bi-plus-lg"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </>)
};