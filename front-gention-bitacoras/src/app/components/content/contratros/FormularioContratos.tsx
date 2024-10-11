import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { DatosPerfilesContratos} from "../../../model/response/perfiles.response";
import { Input } from "../../../shared/Input/Input.tsx";
import { Select } from "../../../shared/Select/Select.tsx";
import { Catalogo } from "../../../model/response/catalogo.response.tsx";
import { ConsultaCatalogo } from "../../../model/request/catalogos.request.tsx";
import { getCatalogoAreas, getCatalogoConsultoras, getCatalogoFormaPago, getCatalogoPerfilesConsultores, getCatalogoTipoContrato } from "../../../services/catalogos.service.tsx";
import { GuardaContrato } from "../../../model/request/contratos.request.tsx";
import { guardaActualizaContratos } from "../../../services/contratos.service.tsx";
import { ToastContainer, toast } from 'react-toastify';
import { FieldContratoClases, FieldPerfilContratoClases } from '../../../model/interface/contrato.interface.tsx';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { Separador } from "../../../shared/SeparadorTexto/SeparadorTexto.tsx";
import { ConsultaPErfilesContrato, GuardaPerfil } from "../../../model/request/perfiles.request.tsx";
import { getPerfilesContratos, guardaActualizaPerfilesContrato } from "../../../services/perfiles.service.tsx";
import { InputBuscador } from "../../../shared/InputBuscador/InputBuscador.tsx";

export const FormularioContratos = () => {
    // Componente para navegar entre paginas
    const navigate = useNavigate();
    const location = useLocation();
    const datosContrato = location.state; // Aquí está el objeto recibido


    //Catalogos
    const [formaPago, setFormaPago] = useState<Catalogo[]>([]);
    const [tipoContrato, setTipoContrato] = useState<Catalogo[]>([]);
    const [consultora, setConsultora] = useState<Catalogo[]>([]);
    const [gerente, setGerente] = useState<Catalogo[]>([]);
    const [area, setArea] = useState<Catalogo[]>([]);

    // Estado para controlar la visibilidad del segundo formulario
    const [showPerfiles, setShowPerfiles] = useState(false); 

    const [dataPerfiles, setDataPerfiles] = useState<DatosPerfilesContratos[]>([]);

    // Estado para controlar los campos del formulario
    const [formData, setFormData] = useState<FieldContratoClases>({
        id_contrato: "", 
        contrato: "",  
        fechaInicio: "",
        fechaTermino: "",
        formaPago: "",
        tipoContrato: "",
        consultora: "",
        consultores: "",
        montoVariable: "0.0",  
        montoFijo: "0.0",
        montoTotal: "2,612,360.18",
        id_archivo: "",
        archivoContrato: "",
        extencion: "",
        direccion: "",
        gerente: "",
    });

    const optionalFields: string[] = ["archivoContrato", "extencion","direccion","gerente", "id_archivo", "id_contrato"]; 
    const optionalFieldsPerfiles: string[] = ["id_perfil", "descripcion", "id_perfil_contrato", "id_contrato"]; 

    const [fieldContratoClases, setFieldContratoClases] = useState({
        id_contrato: "form-control",
        contrato: "form-control",
        fechaInicio: "form-control",
        fechaTermino: "form-control",
        formaPago: "form-control",
        tipoContrato: "form-control",
        consultora: "form-control",
        consultores: "form-control",
        montoVariable: "form-control",
        montoFijo: "form-control",
        montoTotal: "form-control",
        id_archivo:  "form-control",
        archivoContrato: "form-control",
        extencion: "form-control",
        direccion: "form-control",
        gerente: "form-control",
    });
    
    // Estado para controlar los campos del fomulario de perfiles
    const [formPerfilesContrato, setFormPerfilesContrato] = useState({
        id_perfil_contrato: "",
        id_contrato: "",
        id_perfil: "",
        perfil: "",
        monto: "0.0",
        descripcion: "",
        id_nivel: "1",
    });

    const [formPerfilesContratoClases, setFormPerfilesContratoClases] = useState({
        id_perfil_contrato: "form-control",
        id_contrato: "form-control",
        id_perfil: "form-control",
        perfil: "form-control",
        monto: "form-control",
        descripcion: "form-control",
        cantidad: "form-control",
    });

    // Manejar cambios del primer formulario
    const handleChange = (e) => {
        const { name, value, files } = e.target;

        let formattedValue = value;

        // Si el campo es montoVariable o montoFijo, se formatea a decimal
        if (name === "montoVariable" || name === "montoFijo") {
            formattedValue = parseFloat(value.replace(/,/g, "") || 0).toFixed(2);
        }


        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : formattedValue,
            // Recalcular montoTotal si cambia montoVariable o montoFijo
            montoTotal: (parseFloat(prev.montoVariable.replace(/,/g, "")) + 
                         parseFloat(prev.montoFijo.replace(/,/g, ""))).toFixed(2)
        }));

        

        // Validar si el campo no está vacío
        if (value === null || value === '') {
            setFieldContratoClases((prev) => ({
                ...prev,
                [name]: "form-control invalid-class", // Clase adicional si está vacío
            }));
        } else {
            setFieldContratoClases((prev) => ({
                ...prev,
                [name]: "form-control", // Clase normal
            }));
        }
    };

    const handleformPerfilesChange = (e) => {
        const { name, value } = e.target;
        setFormPerfilesContrato((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        // Validar si el campo no está vacío
        if (value === null || value === '') {
            setFormPerfilesContratoClases((prev) => ({
                ...prev,
                [name]: "form-control invalid-class", // Clase adicional si está vacío
            }));
        } else {
            setFormPerfilesContratoClases((prev) => ({
                ...prev,
                [name]: "form-control", // Clase normal
            }));
        }
    };

    const handleFileChange = (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
          const file = files[0];
          // Si deseas leer el archivo como base64:
          const reader = new FileReader();
          reader.onload = (e) => {
            const fileData = e.target?.result;
            // Asegúrate de que el resultado sea una cadena antes de asignarlo
            if (typeof fileData === 'string') {
                const extencion = file.name.split('.').pop();
                setFormData({
                    ...formData,
                    archivoContrato: fileData, // Guarda el archivo en base64 en el estado
                    extencion: extencion??'pdf', // Guarda el archivo en base64 en el estado
                });
            } else {
                setFormData({
                    ...formData,
                    archivoContrato: '', // Guarda el archivo en base64 en el estado
                });
            }            
          };
          reader.readAsDataURL(file); // Otras opciones: readAsText, readAsArrayBuffer
        }
    };

  
    const [datosPerfiles, setDatosPerfiles] = useState<any[]>([]); 
    const [mostrarKeyPerfiles, setMostrarKeyPerfile] = useState<string[]>([]); 
    const [resultadosPerfiles, setResultadosPerfiles] = useState<any[]>([]); 
    const [mostrarResultadosPerfiles, setMostrarResultadosPerfiles] = useState(false);

    const changeBuscadoPerfil = (e) => {
        let busquedaKey = ['nombre','monto','descripcion'];
        setMostrarKeyPerfile(busquedaKey);
        const { name, value } = e.target;

        setFormPerfilesContrato((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        // Filtrar los datos basados en las coincidencias
        const filtrados = datosPerfiles.filter((item) =>
          busquedaKey.some((key) => item[key].toString().toLowerCase().includes(value.toLowerCase()))
        );
        setMostrarResultadosPerfiles((value !== "" && filtrados.length > 0 )? true: false);
       
        setResultadosPerfiles(filtrados);
    };

    const perfilSeleccionado = (perfil: any) => {
        setFormPerfilesContrato({
            ...formPerfilesContrato,
            id_perfil: perfil.id, 
            perfil: perfil.nombre, 
            monto: perfil.monto, 
            descripcion:  perfil.descripcion, 
            id_nivel: "0",
        });
        setFormPerfilesContratoClases({
            ...formPerfilesContratoClases,
            id_perfil: "form-control",
            perfil: "form-control",
            monto: "form-control",
            descripcion: "form-control",
            cantidad: "form-control",
        });
        setMostrarResultadosPerfiles(false);
    };

    const obtenerCatalogoPerfiles = async () => {
        const datos:ConsultaCatalogo = {
            nombre: "",
            activo: true,
        };

        try {
          const result = await getCatalogoPerfilesConsultores(datos);
          setDatosPerfiles(result.data);
        } catch (error) {
          console.log(error);
        }
    };

    const obtenerCatalogoFormaPago = async () => {
        const datos:ConsultaCatalogo = {
            nombre: "",
            activo: true,
        };

        try {
          const result = await getCatalogoFormaPago(datos);
          setFormaPago(result.data);
        } catch (error) {
          console.log(error);
        }
    };

    const obtenerCatalogoTipoContrato = async () => {
        const datos:ConsultaCatalogo = {
            nombre: "",
            activo: true,
        };

        try {
          const result = await getCatalogoTipoContrato(datos);
          setTipoContrato(result.data);
        } catch (error) {
          console.log(error);
        }
    };
    
    const obtenerCatalogoCosultora = async () => {
        const datos:ConsultaCatalogo = {
            nombre: "",
            activo: true,
        };

        try {
          const result = await getCatalogoConsultoras(datos);
          setConsultora(result.data);
        } catch (error) {
          console.log(error);
        }
    };

    const obtenerCatalogoAreas = async () => {
        const datos:ConsultaCatalogo = {
            nombre: "",
            activo: true,
        };

        try {
          const result = await getCatalogoAreas(datos);
          setArea(result.data);
        } catch (error) {
          console.log(error);
        }
    };

    const guardarActualizarContrato = async () => {

        const newFieldContratoClases: FieldContratoClases = {
            id_contrato: "form-control",
            contrato: "form-control",
            fechaInicio: "form-control",
            fechaTermino: "form-control",
            formaPago: "form-control",
            tipoContrato: "form-control",
            consultora: "form-control",
            consultores: "form-control",
            montoVariable: "form-control",
            montoFijo: "form-control",
            montoTotal: "form-control",
            id_archivo: "form-control",
            archivoContrato: "form-control",
            extencion: "form-control",
            direccion: "form-control",
            gerente: "form-control",
          };

        let isValid = true; // Variable para verificar si el formulario es válido
    
        for (const key in formData) {
            if (!optionalFields.includes(key)) { // Verifica si el campo no es opcional
                if (formData[key] === null || formData[key] === '') {
                    newFieldContratoClases[key as keyof FieldContratoClases] = "form-control invalid-class";
                    isValid = false;
                }
            }
        }

        setFieldContratoClases(newFieldContratoClases);

        if(isValid){
            const datos:GuardaContrato = {
                id_contrato: formData.id_contrato === "" ? null : parseInt(formData.id_contrato),
                no_contrato: formData.contrato,
                fh_inicio: formData.fechaInicio,
                fh_termino: formData.fechaTermino,
                monto_variable: parseInt(formData.montoVariable),
                monto_fijo: parseInt(formData.montoFijo),
                monto_total: parseInt(formData.montoTotal),
                id_forma_pago: parseInt(formData.formaPago),
                id_tipo_contrato: parseInt(formData.tipoContrato),
                id_consultora:  parseInt(formData.consultora),
                id_area: formData.contrato === ""? null: parseInt(formData.contrato),
                id_gerente: formData.contrato === ""? null: parseInt(formData.contrato),
                id_archivo: formData.id_archivo === "" ? null : parseInt(formData.id_archivo),
                archivo: formData.archivoContrato,
                extencion: formData.extencion,
                activo: true,
            };
    
            try {
                const result = await guardaActualizaContratos(datos);
                if(result.correcto){
                    toast.success(result.mensaje, {});
                    setFormData((formData) => ({
                        ...formData,
                        id_contrato: result.data.id_contrato.toString(),
                        id_archivo: result.data.id_archivo != null ? result.data.id_archivo.toString() : '',
                      }));
                    setShowPerfiles(true);
                } else {
                    toast.warn(result.mensaje, {});
                }
            } catch (error) {
                toast.error(error.mensaje, {});
            }
        } else {
            toast.error("Los campos  marcados son obligatorios"	, {});
        }


 
    };

    const guardarActualizarPerfiles= async () => {

        const newFieldPerfilClases: FieldPerfilContratoClases = {
            id_perfil_contrato: "form-control",
            id_contrato: "form-control",
            id_perfil: "form-control",
            perfil: "form-control",
            monto: "form-control",
            descripcion: "form-control",
            cantidad: "form-control",
          };

        let isValid = true; // Variable para verificar si el formulario es válido
    
        for (const key in formPerfilesContrato) {
            if (!optionalFieldsPerfiles.includes(key)) { // Verifica si el campo no es opcional
                if (formPerfilesContrato[key] === null || formPerfilesContrato[key] === '') {
                    newFieldPerfilClases[key as keyof FieldContratoClases] = "form-control invalid-class";
                    isValid = false;
                }
            }
        }

        setFormPerfilesContratoClases(newFieldPerfilClases);

        if(isValid){
            formPerfilesContrato.id_contrato = formData.id_contrato;
            const datos:GuardaPerfil = {
                id_perfil_contrato:  formPerfilesContrato.id_perfil_contrato === ""? null: parseInt(formPerfilesContrato.id_perfil_contrato),
                id_contrato: parseInt(formPerfilesContrato.id_contrato),
                id_perfil: formPerfilesContrato.id_perfil === ""? null:parseInt(formPerfilesContrato.id_perfil),
                perfil: formPerfilesContrato.perfil,
                descripcion: formPerfilesContrato.descripcion,
                monto: parseFloat(formPerfilesContrato.monto),
                cantidad: parseInt(formPerfilesContrato.id_nivel),
                activo: true,
            };

            console.log(datos)
    
            try {
                const result = await guardaActualizaPerfilesContrato(datos);
                if(result.correcto){
                    toast.success(result.mensaje, {});
                    setFormPerfilesContrato((formData) => ({
                        ...formData,
                        id_perfil_contrato: "",
                        id_contrato: "",
                        id_perfil: "",
                        perfil: "",
                        monto: "0.0",
                        descripcion: "",
                        cantidad: "1",
                      }));
                    getDataContratos();
                } else {
                    toast.warn(result.mensaje, {});
                }
            } catch (error) {
                toast.error(error.mensaje, {});
            }
        } else {
            toast.error("Los campos  marcados son obligatorios"	, {});
        }


 
    };

    const getDataContratos = async (id_contrato = null, pagina = 1, registros = 100) => {
        const datos:ConsultaPErfilesContrato = {
          id_contrato: id_contrato !== null ? id_contrato : parseInt(formData.id_contrato),
          pagina_actual: pagina,
          registros_por_pagina: registros
        };

        try {
          const result = await getPerfilesContratos(datos);
          setDataPerfiles(result.data);
          toast.success(result.mensaje, {});
        } catch (error) {
          console.log(error);
          toast.error(error.mensaje, {});
        }
    };

    useEffect(() => {  
      if (datosContrato) {
        llegaronDatosActualizacion(); // Ejecutar la función si el objeto está presente
        getDataContratos(datosContrato.id_contrato);
        setShowPerfiles(true);
      }
        obtenerCatalogoFormaPago();
        obtenerCatalogoTipoContrato();
        obtenerCatalogoCosultora();
        obtenerCatalogoAreas();
        obtenerCatalogoPerfiles();
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [datosContrato]);
    

    const llegaronDatosActualizacion = async () => {
        // Aquí puedes poner la lógica de tu función
        setFormData({
            ...formData,
            id_contrato: datosContrato.id_contrato, 
            contrato: datosContrato.no_contrato, 
            fechaInicio: datosContrato.fh_inicio, 
            fechaTermino: datosContrato.fh_fin, 
            formaPago: datosContrato.id_forma_pago, 
            tipoContrato: datosContrato.id_tipo_contrato, 
            consultora: datosContrato.id_consultora, 
            consultores: datosContrato.no_consultores, 
            montoVariable: datosContrato.monto_variable,   
            montoFijo: datosContrato.monto_fijo, 
            montoTotal: datosContrato.monto_total, 
            id_archivo: datosContrato.id_archivo, 
            archivoContrato: "", 
            extencion: "", 
            direccion: datosContrato.id_area, 
            gerente: datosContrato.id_gerente, 
        });
      
       
    };

    const datosPerfilActualizacion = async ( datosPerfil: DatosPerfilesContratos) => {
        // Aquí puedes poner la lógica de tu función
        console.log(datosPerfil)
        toast.info("Se agregaron los datos al formulario de perfiles para actualizar", {});
        setFormPerfilesContrato({
            id_perfil_contrato: datosPerfil.id_perfil_contrato.toString(),
            id_contrato: datosPerfil.id_contrato.toString(),
            id_perfil: datosPerfil.id_perfil.toString(),
            perfil: datosPerfil.nombre,
            monto: datosPerfil.monto.toString(),
            descripcion: datosPerfil.descripcion,
            id_nivel: datosPerfil.id_nivel.toString(),
        });
    };



    return (
        <>
            <div className="contenido_principal">
                <h3>Nuevo contrato</h3>
                <hr />
                <div className="row">
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
                                    <Separador texto="Datos del contrato"/>
                            </div>
                            <div className="col-sm-4">
                                <Input label="No. contrato" type="text" name="contrato" value={formData.contrato} onChange={handleChange} 
                                        placeholder="Numero de contrato" className={fieldContratoClases.contrato} />
                            </div>
                            <div className="col-sm-4">
                                <label className="form-label">Fecha de inicio</label> 
                                <input  type="date" className={fieldContratoClases.fechaInicio} name="fechaInicio" value={formData.fechaInicio} onChange={handleChange} />
                            </div>
                            <div className="col-sm-4">
                                <label className="form-label">Fecha de término</label>
                                <input type="date" className={fieldContratoClases.fechaTermino} name="fechaTermino" value={formData.fechaTermino} onChange={handleChange} />
                            </div>
                            <div className="col-sm-4">
                                    <Select  label="Selecciona forma de pago"  name="formaPago"   value={formData.formaPago}  onChange={handleChange}  options={formaPago}
                                                placeholder="Selecciona una opcion"   className= {fieldContratoClases.formaPago}/>
                            </div>
                            <div className="col-sm-4">
                                    <Select  label="Selecciona tipo de contrato"  name="tipoContrato"   value={formData.tipoContrato}  onChange={handleChange}  options={tipoContrato}
                                                placeholder="Selecciona una opcion"   className= {fieldContratoClases.tipoContrato}/>
                            </div>
                            <div className="col-sm-4">
                                    <Select  label="Selecciona al proveedor"  name="consultora"   value={formData.consultora}  onChange={handleChange}  options={consultora}
                                                placeholder="Selecciona una opcion"   className= {fieldContratoClases.consultora}/>
                            </div>
                            <div className="col-sm-4">
                                <Input label="Monto variable (IVA Incluido)" type="text" name="montoVariable" value={formData.montoVariable} onChange={handleChange} 
                                        placeholder="Monto variable" className= {fieldContratoClases.montoVariable} />
                            </div>
                            <div className="col-sm-4">
                                <Input label="Monto fijo (IVA Incluido)" type="text" name="montoFijo" value={formData.montoFijo} onChange={handleChange} 
                                        placeholder="Monto fijo" className= {fieldContratoClases.montoFijo} />
                            </div>
                            <div className="col-sm-4">
                                <Input label="Monto total (IVA Incluido)" type="text" name="montoTotal" value={formData.montoTotal} onChange={handleChange} 
                                        placeholder="Monto total" className= {fieldContratoClases.montoTotal} disabled={true}/>
                            </div>
                            <div className="col-sm-4">
                                <Input label="Personal requerido inicial" type="text" name="consultores" value={formData.consultores} onChange={handleChange} 
                                        placeholder="No consultores" className= {fieldContratoClases.consultores} />
                            </div>
                            <div className="col-sm-4">
                                <Select  label="Selecciona Direccion / Subdireccion"  name="direccion"   value={formData.direccion}  onChange={handleChange}  options={area}
                                        placeholder="Selecciona una opcion"   className="form-control"/>
                            </div>
                            <div className="col-sm-4">
                                <Select  label="Selecciona Gerente"  name="gerente"   value={formData.gerente}  onChange={handleChange}  options={[{id:6, nombre: "Verónica	Franco Pérez"}, {id:7, nombre: "Joel Cuevas	Carbajal"}]}
                                        placeholder="Selecciona una opcion"  className="form-control"/>
                            </div>
                            <div className="col-sm-8">
                                <label className="form-label">Carga de contrato</label>
                                <input className="form-control" type="file" placeholder="Selecciona el archivo a subir" name="archivo"  onChange={handleFileChange} />
                            </div>
                        </div>
                        <div className="card-footer row">
                            <div className="col-sm-12 text-end">
                                <button className="btn btn-principal" title="Guardar" onClick={guardarActualizarContrato}>
                                    <SaveOutlinedIcon /> Guardar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {showPerfiles && (
                    <div className="row">
                         <div className="card">
                            <div className="card-body row">
                                <div className="col-sm-12">
                                    <Separador texto="Datos del perfil"/>
                                </div>
                                <div className="col-sm-4">
                                     <Select  label="Selecciona Nivel del Perfil"  name="id_nivel"   value={formPerfilesContrato.id_nivel}  onChange={handleformPerfilesChange}  options={[{id:1, nombre: "Sr."}, {id:2, nombre: "Jr."}]}
                                        placeholder="Selecciona una opcion"  className="form-control"/>
                                </div>
                                <div className="col-sm-4">
                                    <InputBuscador label="Nombre del Perfil" type="text" name="perfil" value={formPerfilesContrato.perfil} 
                                    placeholder="Nombre del Perfil" className={formPerfilesContratoClases.perfil} onChange={changeBuscadoPerfil}
                                    mostrarResultados={mostrarResultadosPerfiles} mostrarKey={mostrarKeyPerfiles} resultados={resultadosPerfiles} 
                                    onSeleccionar={perfilSeleccionado} />
                                </div>
                                <div className="col-sm-4">
                                    <Input label="Monto" type="text" name="monto" value={formPerfilesContrato.monto} onChange={handleformPerfilesChange} 
                                            placeholder="Monto" className={formPerfilesContratoClases.monto} />
                                </div>
                                {/* <div className="col-sm-4">
                                    <Input label="Cantidad" type="text" name="cantidad" value={formPerfilesContrato.cantidad} onChange={handleformPerfilesChange} 
                                            placeholder="Cantidad de recurso requerido en el perfil " className={formPerfilesContratoClases.cantidad} />
                                </div> */}
                                <div className="col-sm-12">
                                    <label className="form-label">Descripción del perfil</label>
                                    <textarea className={formPerfilesContratoClases.descripcion} value={formPerfilesContrato.descripcion} 
                                            onChange={handleformPerfilesChange}  rows={2} placeholder="Descripcion del perfil" name="descripcion"   />
                                </div>
                            </div>
                            <div className="card-footer row">
                                <div className="col-sm-12 text-end">
                                    <button className="btn btn-principal" title="Guardar" onClick={() => {guardarActualizarPerfiles()}}>
                                        <SaveOutlinedIcon /> Guardar Perfil
                                    </button>
                                </div>
                            </div>
                         </div>
                         <div className="card">
                                <div className="card-body row">
                                    <div className="col-sm-12">
                                    <Separador texto="Perfiles registrados en el contrato"/>
                                    </div>
                                    <div className="col-sm-12">
                                       
                                            <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th className="valoresCentrados">Nivel</th>
                                                    <th className="valoresCentrados">Nombre del Perfil</th>
                                                    <th className="valoresCentrados">Monto</th>
                                                    <th className="valoresCentrados">Descripción</th>
                                                    <th className="valoresCentrados">Acciones</th>
                                                </tr>
                                            </thead>
                                                {dataPerfiles && (
                                                <tbody>
                                                    {dataPerfiles.map((dato:DatosPerfilesContratos,i) => (
                                                        <tr key={i} onClick={() => {datosPerfilActualizacion(dato)}}>
                                                            <td className="valoresCentrados">Sr.</td>
                                                            <td className="valoresCentrados">{dato.nombre}</td>
                                                            <td className="valoresCentrados">{dato.monto}</td>
                                                            <td className="valoresCentrados">{dato.descripcion}</td>
                                                            <td className="valoresCentrados"></td>
                                                        </tr>
                                                    ))}
                                                
                                                </tbody>
                                                )}
                                            </table>                                    
                                    </div>
                                </div>
                         </div> 
                    </div>
                   
                )}
            </div>

            <ToastContainer position="top-right" limit={4} autoClose={3000} hideProgressBar={false}  newestOnTop={false}
                closeOnClick  rtl={false}   pauseOnFocusLoss  draggable  pauseOnHover  theme="colored" />
        </>
    );
};

export default FormularioContratos;
