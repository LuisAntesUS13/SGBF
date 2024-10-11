import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Input } from "../../../shared/Input/Input.tsx";
import { Select } from "../../../shared/Select/Select.tsx";
import { Catalogo } from "../../../model/response/catalogo.response.tsx";
import { ToastContainer } from 'react-toastify';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { Separador } from "../../../shared/SeparadorTexto/SeparadorTexto.tsx";
import { FieldRequerimientoClases } from "../../../model/interface/requerimiento.interface.tsx";
import { Paginador } from "../../../shared/Paginador/Paginador.tsx";
import { DatosRequerimientos } from "../../../model/response/requerimientos.response.tsx";

export const Requerimientos = () => {
    // Componente para navegar entre paginas
    const navigate = useNavigate();
    const location = useLocation();
    const datosContrato = location.state; // Aquí está el objeto recibido


    //Catalogos
    const [formaPago, setFormaPago] = useState<Catalogo[]>([]);
    // const [tipoContrato, setTipoContrato] = useState<Catalogo[]>([]);
    // const [consultora, setConsultora] = useState<Catalogo[]>([]);
    // const [gerente, setGerente] = useState<Catalogo[]>([]);
    // const [area, setArea] = useState<Catalogo[]>([]);

    // Estado para controlar los campos del formulario
    const [formData, setFormData] = useState<FieldRequerimientoClases>({
        id_requerimiento: "", 
        liderTecnico: "Juan Luis Gutiérrez López",  
        tipo: "",
        id_incidente: "",
        descripcionIncidente: "",
        actividadAsignada: "",
        responsable: "",
        aplicativoModulo: "",
        areaAtencion: "",
        fechaAsignada: "",  
    });

    const [fieldRequerimientoClases, setFieldRequerimientoClases] = useState({
        id_requerimiento: "form-control", 
        liderTecnico: "form-control",  
        tipo: "form-control",
        id_incidente: "form-control",
        descripcionIncidente: "form-control",
        actividadAsignada: "form-control",
        responsable: "form-control",
        aplicativoModulo: "form-control",
        areaAtencion: "form-control",
        fechaAsignada: "form-control",  
    });

    //Formulario busqueda
    const [formulario, setFormulario] = useState({
        contrato: "",
        consultora: "",
        lider:""
    });

    const [dataRequerimiento, setDataRequerimiento] = useState<DatosRequerimientos[]>([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [registrosPorPagina, setRegistrosPorPagina] = useState(10);

    const handlePaginacion = (pagina, registros) => {
        setPaginaActual(pagina);
        setRegistrosPorPagina(registros);
    };

    // Manejar cambios del primer formulario
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });

        // Validar si el campo no está vacío
        if (value === null || value === '') {
            setFieldRequerimientoClases((prev) => ({
                ...prev,
                [name]: "form-control invalid-class", // Clase adicional si está vacío
            }));
        } else {
            setFieldRequerimientoClases((prev) => ({
                ...prev,
                [name]: "form-control", // Clase normal
            }));
        }
    };

    // const obtenerCatalogoFormaPago = async () => {
    //     const datos:ConsultaCatalogo = {
    //         nombre: "",
    //         activo: true,
    //     };

    //     try {
    //       const result = await getCatalogoFormaPago(datos);
    //       setFormaPago(result.data);
    //     } catch (error) {
    //       console.log(error);
    //     }
    // };

    // const obtenerCatalogoTipoContrato = async () => {
    //     const datos:ConsultaCatalogo = {
    //         nombre: "",
    //         activo: true,
    //     };

    //     try {
    //       const result = await getCatalogoTipoContrato(datos);
    //       setTipoContrato(result.data);
    //     } catch (error) {
    //       console.log(error);
    //     }
    // };
    
    // const obtenerCatalogoCosultora = async () => {
    //     const datos:ConsultaCatalogo = {
    //         nombre: "",
    //         activo: true,
    //     };

    //     try {
    //       const result = await getCatalogoConsultoras(datos);
    //       setConsultora(result.data);
    //     } catch (error) {
    //       console.log(error);
    //     }
    // };

    // const obtenerCatalogoAreas = async () => {
    //     const datos:ConsultaCatalogo = {
    //         nombre: "",
    //         activo: true,
    //     };

    //     try {
    //       const result = await getCatalogoAreas(datos);
    //       setArea(result.data);
    //     } catch (error) {
    //       console.log(error);
    //     }
    // };

    const guardarActualizarContrato = async () => {

        const newFieldContratoClases: FieldRequerimientoClases = {
            id_requerimiento: "form-control", 
            liderTecnico: "form-control",  
            tipo: "form-control",
            id_incidente: "form-control",
            descripcionIncidente: "form-control",
            actividadAsignada: "form-control",
            responsable: "form-control",
            aplicativoModulo: "form-control",
            areaAtencion: "form-control",
            fechaAsignada: "form-control",  
          };

        let isValid = true; // Variable para verificar si el formulario es válido
    
        // for (const key in formData) {
        //     if (!optionalFields.includes(key)) { // Verifica si el campo no es opcional
        //         if (formData[key] === null || formData[key] === '') {
        //             newFieldContratoClases[key as keyof FieldContratoClases] = "form-control invalid-class";
        //             isValid = false;
        //         }
        //     }
        // }

        setFieldRequerimientoClases(newFieldContratoClases);
    };

    useEffect(() => {  
      if (datosContrato) {
        // llegaronDatosActualizacion(); // Ejecutar la función si el objeto está presente
        // setShowPerfiles(true);
      }
        // obtenerCatalogoFormaPago();
        // obtenerCatalogoTipoContrato();
        // obtenerCatalogoCosultora();
        // obtenerCatalogoAreas();
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [datosContrato]);
    

    // const llegaronDatosActualizacion = async () => {
    //     // Aquí puedes poner la lógica de tu función
    //     setFormData({
    //         ...formData,
    //         id_contrato: datosContrato.id_contrato, 
    //         contrato: datosContrato.no_contrato, 
    //         fechaInicio: datosContrato.fh_inicio, 
    //         fechaTermino: datosContrato.fh_fin, 
    //         formaPago: datosContrato.id_forma_pago, 
    //         tipoContrato: datosContrato.id_tipo_contrato, 
    //         consultora: datosContrato.id_consultora, 
    //         consultores: datosContrato.no_consultores, 
    //         montoVariable: datosContrato.monto_variable,   
    //         montoFijo: datosContrato.monto_fijo, 
    //         montoTotal: datosContrato.monto_total, 
    //         id_archivo: datosContrato.id_archivo, 
    //         archivoContrato: "", 
    //         extencion: "", 
    //         direccion: datosContrato.id_area, 
    //         gerente: datosContrato.id_gerente, 
    //     });
      
       
    // };


    return (
        <>
            <div className="contenido_principal">
                <h3>Asignación de requerimientos</h3>
                <hr />
                <div>
                    <div className="card">
                        <div className="card-header row">
                            <div className="col-sm-3 ">
                                <button type="button" className="btn btn-accion-sec" title="Volver"onClick={() => navigate("/contrato")}>
                                    <KeyboardReturnIcon />
                                </button>
                            </div>
                        </div>
                        <div className="card-body row">
                            <div className="col-sm-12">
                                    <Separador texto="Datos del requerimiento"/>
                            </div>
                            <div className="col-sm-6">
                                <Select  label="Seleccione tipo"  name="tipo"   value={formData.tipo}  onChange={handleChange}  options={formaPago}
                                        placeholder="Selecciona una opcion"   className= {fieldRequerimientoClases.tipo}/>
                            </div>
                            <div className="col-sm-6">
                                <Input label="Lider técnico" type="text" name="liderTecnico" value={formData.liderTecnico} onChange={handleChange} 
                                        placeholder="Numero de contrato" className={fieldRequerimientoClases.liderTecnico} disabled={true}/>
                            </div>
                            <div className="col-sm-6">
                                <Input label="SMAX ASOCIADO / ID INCIDENTE" type="text" name="id_incidente" value={formData.id_incidente} onChange={handleChange} 
                                        placeholder="S-1066361" className={fieldRequerimientoClases.id_incidente} />
                            </div>
                            <div className="col-sm-6">
                                <Input label="Descripción Corta SMAX/INCIDENTE" type="text" name="descripcionIncidente" value={formData.descripcionIncidente} onChange={handleChange} 
                                        placeholder="Descripción corta" className={fieldRequerimientoClases.descripcionIncidente} />
                            </div>
                            <div className="col-sm-12">
                                <label className="form-label">Actividad asignada</label>
                                <textarea className={fieldRequerimientoClases.actividadAsignada} value={formData.actividadAsignada} 
                                        onChange={handleChange}  rows={2} placeholder="Actividad" name="actividadAsignada"   />
                            </div>
                            <div className="col-sm-6">
                                <Input label="Responsable" type="text" name="responsable" value={formData.responsable} onChange={handleChange} 
                                        placeholder="Responsable" className={fieldRequerimientoClases.responsable} />
                            </div>
                            
                            <div className="col-sm-6">
                                    <Select  label="Seleccione aplicativo/módulo"  name="aplicativoModulo"   value={formData.aplicativoModulo}  onChange={handleChange}  options={formaPago}
                                            placeholder="Selecciona una opcion"   className= {fieldRequerimientoClases.aplicativoModulo}/>
                            </div>
                            <div className="col-sm-6">
                                    <Select  label="Seleccione área de atención"  name="areaAtencion"   value={formData.areaAtencion}  onChange={handleChange}  options={formaPago}
                                            placeholder="Selecciona una opcion"   className= {fieldRequerimientoClases.areaAtencion}/>
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label">Fecha asignación</label> 
                                <input  type="date" className={fieldRequerimientoClases.fechaAsignada} name="fechaAsignada" value={formData.fechaAsignada} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="card-footer row">
                            <div className="col-sm-12 text-end">
                                <button className="btn btn-bscr" title="Guardar" onClick={guardarActualizarContrato}>
                                    <SaveOutlinedIcon /> Guardar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="card">
                <div className="card-body row">
                    <div className="col-sm-3">
                        <Input label="No. contrato" type="text" name="contrato" value={formulario.contrato} onChange={handleChange} placeholder="SG0909" className="" />
                    </div>
                    <div className="col-sm-3">
                        <Input label="SMAX ASOCIADO / ID INCIDENTE" type="text" name="consultora" value={formulario.consultora} onChange={handleChange} placeholder="Ultrasist" className="" />
                    </div>
                    <div className="col-sm-3">
                        <Input label="Descripción Corta SMAX/INCIDENTE" type="text" name="lider" value={formulario.lider} onChange={handleChange} placeholder="Ultrasist" className="" />
                    </div>
                    <div className="col-sm-3">
                        <Input label="Lider proyecto" type="text" name="lider" value={formulario.lider} onChange={handleChange} placeholder="Ultrasist" className="" />
                    </div>
                    <div className="col-sm-3">
                        <button type="button" className="btn btn-bscr" style={{ marginTop: '30px'}} title="Buscar"
                            onClick={() => {}}><SearchOutlinedIcon />Buscar</button>
                    </div>
                </div>
            </div>
            <div className="card" >
                <div className="card-body row">
                    <div className="col-sm-12">
                        <Paginador totalRegistros={dataRequerimiento.length > 0 ? dataRequerimiento[0].total_registros : 0} paginaActual={paginaActual}
                            registrosPorPagina={registrosPorPagina} onCambioPagina={handlePaginacion} />
                        <table className="table table-hover">
                            <thead>
                                <tr className="valoresCentrados">
                                    <th scope="col" className="valoresCentrados">Perfil</th>
                                    <th scope="col" className="valoresCentrados">Consultor</th>
                                    <th scope="col" className="valoresCentrados">SMAX ASOCIADO / ID INCIDENTE</th>
                                    <th scope="col" className="valoresCentrados">Descripción Corta SMAX/INCIDENTE</th>
                                    <th scope="col" className="valoresCentrados">Lider proyecto</th>
                                    <th scope="col" className="valoresCentrados">Responsable</th>
                                    <th scope="col" className="valoresCentrados">Tipo</th>
                                    <th scope="col" className="valoresCentrados">Aplicativo/Módulo</th>
                                    <th scope="col" className="valoresCentrados">Área de atención</th>
                                    <th scope="col" className="valoresCentrados">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
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

            <ToastContainer position="top-right" limit={4} autoClose={3000} hideProgressBar={false}  newestOnTop={false}
                closeOnClick  rtl={false}   pauseOnFocusLoss  draggable  pauseOnHover  theme="colored" />
        </>
    );
};