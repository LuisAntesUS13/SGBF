import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Separador } from "../../../shared/SeparadorTexto/SeparadorTexto.tsx";
import { InputCalendario } from "../../../shared/Calendario/InputCalendatio.tsx";
import { Input } from "../../../shared/Input/Input.tsx";
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';
import { convertirNumeroSeparadoComas } from "../../../shared/General/generico.ts";
import { toast, ToastContainer } from "react-toastify";
import { FieldPeridosContratoClases } from "../../../model/interface/contrato.interface.tsx";
import { ConsultaPeriodosContrato, GuardaPeriodosContrato } from "../../../model/request/contratos.request.tsx";
import { consultaPeriodosContrato, guardaActualizaPeriodosContrato } from "../../../services/contratos.service.tsx";
import { PeriodosContrato } from "../../../model/response/contratos.response.tsx";
import { Paginador } from "../../../shared/Paginador/Paginador.tsx";


export const FormularioPeriodosContratos = () => {

    // Componente para navegar entre paginas
    const navigate = useNavigate();
    const location = useLocation();
    const datosContrato = location.state; // Aquí está el objeto recibido

    const [formPeriodoContrato, setFormPeriodoContrato] = useState({
        fh_inicio: "",
        fh_termino: "",
        no_periodo: "1",
    });

    const [periodoContratoClases, setPeriodoContratoClases] = useState({
        fh_inicio: "form-control",
        fh_termino: "form-control",
        no_periodo: "form-control",
    });

    const [datosPeriodos, setDatosPeriodos] =  useState<PeriodosContrato[]>([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [registrosPorPagina, setRegistrosPorPagina] = useState(20);

    useEffect(() => {
        if (datosContrato) {
        }
        getDataPeriodosContratos(paginaActual, registrosPorPagina, false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paginaActual, registrosPorPagina]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormPeriodoContrato(() => {
            return {
                ...formPeriodoContrato,
                [name]: value,
            };
        });

        // Validar si el campo no está vacío
        if (value === null || value === "") {
            setPeriodoContratoClases((prev) => ({
            ...prev,
            [name]: "form-control invalid-class", // Clase adicional si está vacío
          }));
        } else {
            setPeriodoContratoClases((prev) => ({
            ...prev,
            [name]: "form-control", // Clase normal
          }));
        }
    };

    const optionalFields: string[] = [
        "archivoContrato",
        "extencion",
        "area",
        "gerente",
        "id_archivo",
        "id_contrato",
      ];

    const guardarActualizarPeriodosContrato = async () => {
        const fieldPeridosContratoClases: FieldPeridosContratoClases = {
          fh_inicio: "form-control",
          fh_termino: "form-control",
          no_periodo: "form-control",
        };
    
        let isValid = true; // Variable para verificar si el formulario es válido
    
        for (const key in formPeriodoContrato) {
          if (!optionalFields.includes(key)) {
            // Verifica si el campo no es opcional
            if (
                formPeriodoContrato[key] === null ||
                formPeriodoContrato[key] === ""
            ) {
                fieldPeridosContratoClases[key as keyof FieldPeridosContratoClases] =
                "form-control invalid-class";
              isValid = false;
            }
          }
        }
    
        setPeriodoContratoClases(fieldPeridosContratoClases);
    
        if (isValid) {
          
          const datos: GuardaPeriodosContrato = {
            id_contrato: datosContrato.id_contrato,
            fh_inicio: formPeriodoContrato.fh_inicio,
            fh_final: formPeriodoContrato.fh_termino,
            no_periodos: parseInt(formPeriodoContrato.no_periodo),
          };
    
          try {
            const result = await guardaActualizaPeriodosContrato(datos);
            if (result.correcto) {
              toast.success(result.mensaje, {});
            } else {
              toast.warn(result.mensaje, {});
            }
            getDataPeriodosContratos();
          } catch (error) {
            toast.error(error.mensaje, {});
          }
        } else {
          toast.error("Los campos  marcados son obligatorios", {});
        }
      };


      const getDataPeriodosContratos = async (pagina = 1, registros = 20, mostrar = true) => {
        const datos: ConsultaPeriodosContrato = {
            id_contrato: datosContrato.id_contrato,
            pagina_actual: pagina,
            registros_por_pagina: registros
        };

        try {
            const result = await consultaPeriodosContrato(datos);
            setDatosPeriodos(result.data);
            if(mostrar){
                if (result.correcto) {
                    toast.success(result.mensaje, {});
                  } else {
                    toast.warn(result.mensaje, {});
                  }
            }
        } catch (error) {
            console.log(error);
            toast.error(error.mensaje, {});
        }
    };

    const handlePaginacion = (pagina, registros) => {
        setPaginaActual(pagina);
        setRegistrosPorPagina(registros);
    };


    return (<>
        <div className="contenido_principal">
            <h3>Periodos del contrato</h3>
            <hr />
            <div className="row">
                <div className="card">
                    <div className="card-header row">
                        <div className="col-sm-3 ">
                            <button type="button" className="btn btn-accion-sec" title="Volver"
                                onClick={() => navigate("/periodosContrato")}>
                                <KeyboardReturnIcon />
                            </button>
                        </div>
                    </div>
                    <div className="card-body row">
                        <div className="col-sm-12">
                            <Separador texto="Datos del contrato" />
                        </div>
                        <div className="col-sm-2">
                            <b>No. contrato: </b> <br /> {datosContrato.no_contrato}
                        </div>
                        <div className="col-sm-2">
                            <b>Fecha inicio: </b> <br /> {datosContrato.fh_inicio}
                        </div>
                        <div className="col-sm-2">
                            <b>Fecha inicio: </b> <br /> {datosContrato.fh_fin}
                        </div>
                        <div className="col-sm-2">
                            <b>Forma de pago: </b> <br /> {datosContrato.forma_pago}
                        </div>
                        <div className="col-sm-2">
                            <b>Tipo contrato: </b> <br /> {datosContrato.tipo_contrato}
                        </div>
                        <div className="col-sm-2">
                            <b>Personal requerido inicial: </b> <br /> {datosContrato.no_consultores}
                        </div>
                        <div className="col-sm-2">
                            <b>Proveedor: </b> <br /> {datosContrato.consultora}
                        </div>
                        <div className="col-sm-2">
                            <b>Monto variable: </b> <br /> $ {convertirNumeroSeparadoComas(datosContrato.monto_variable)}
                        </div>
                        <div className="col-sm-2">
                            <b>Monto fijo: </b> <br /> $ {convertirNumeroSeparadoComas(datosContrato.monto_fijo)}
                        </div>
                        <div className="col-sm-2">
                            <b>Monto total: </b> <br /> $ {convertirNumeroSeparadoComas(datosContrato.monto_total)}
                        </div>
                        <div className="col-sm-4">
                            <b>Direccion / Subdireccion: </b> <br /> {datosContrato.area}
                        </div>
                        <div className="col-sm-4">
                            <b>Gerente: </b> <br /> {datosContrato.nombre + ' ' + datosContrato.primer_apellido + ' ' + datosContrato.segundo_apellido}
                        </div>
                        <div className="col-sm-12">
                            <Separador texto="Periodo inicial del contrato y numero de peridodos" />
                        </div>
                        <div className="col-sm-3">
                            <InputCalendario label="Fecha de inicio" name="fh_inicio" value={formPeriodoContrato.fh_inicio} onChange={handleChange}
                                className={periodoContratoClases.fh_inicio} />
                        </div>
                        <div className="col-sm-3">
                            <InputCalendario label="Fecha de término" name="fh_termino" value={formPeriodoContrato.fh_termino} onChange={handleChange}
                                className={periodoContratoClases.fh_termino} />
                        </div>
                        <div className="col-sm-3">
                            <Input label="No. periodos" type="number" name="no_periodo" value={formPeriodoContrato.no_periodo}
                            onChange={handleChange} placeholder="Numero de contrato" className={periodoContratoClases.no_periodo}/>
                        </div>
                        <div className="col-sm-3">
                            <button type="button" className="btn btn-principal" style={{ marginTop: '30px' }} title="Generar periodos"
                                onClick={() => { guardarActualizarPeriodosContrato() }}><TocOutlinedIcon /> Generar periodos</button>
                        </div>
                        <div className="col-sm-12">
                            <Separador texto="Periodos del contrato" />
                        </div>
                        <div className="col-sm-12">
                            <table className="table table-hover">
                                <thead>
                                    <tr className="valoresCentrados">
                                        <th scope="col" className="valoresCentrados">No. Periodo</th>
                                        <th scope="col" className="valoresCentrados">Fecha inicio</th>
                                        <th scope="col" className="valoresCentrados">Fecha termino</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {datosPeriodos.map((dato: PeriodosContrato, i) => (
                                        <tr key={i} style={{ cursor: 'pointer' }}>
                                            <td className="valoresCentrados">{dato.no_periodo}</td>
                                            <td className="valoresCentrados">{dato.fh_inicio}</td>
                                            <td className="valoresCentrados">{dato.fh_fin}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Paginador totalRegistros={datosPeriodos.length > 0 ? datosPeriodos[0].total_registros : 0} paginaActual={paginaActual}
                        registrosPorPagina={registrosPorPagina} onCambioPagina={handlePaginacion} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <ToastContainer position="top-right" limit={4} autoClose={3000} hideProgressBar={false} newestOnTop={false}
            closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />

    </>)
};