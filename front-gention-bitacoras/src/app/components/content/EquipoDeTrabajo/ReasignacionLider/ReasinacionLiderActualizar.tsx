// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
// import { DatosPerfilesContratos} from "../../../../model/response/perfiles.response";
// import { Input } from "../../../../shared/Input/Input.tsx";
// import { Select } from "../../../../shared/Select/Select.tsx";
// import { Catalogo } from "../../../../model/response/catalogo.response.tsx";
// import { ConsultaCatalogo } from "../../../../model/request/catalogos.request.tsx";
// import { getCatalogoAreas, getCatalogoFormaPago, getCatalogoPerfilesConsultores, getCatalogoProveedor, getCatalogoTipoContrato } from "../../../../services/catalogos.service.tsx";
// import { GuardaContrato } from "../../../../model/request/contratos.request.tsx";
// import { guardaActualizaContratos } from "../../../../services/contratos.service.tsx";
// import { ToastContainer, toast } from 'react-toastify';
// import { FieldContratoClases, FieldPerfilContratoClases } from '../../../../model/interface/contrato.interface.tsx';
// import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
// import { Separador } from "../../../../shared/SeparadorTexto/SeparadorTexto.tsx";
// import { ConsultaPErfilesContrato, GuardaPerfil } from "../../../../model/request/perfiles.request.tsx";
// import { getPerfilesContratos, guardaActualizaPerfilesContrato } from "../../../../services/perfiles.service.tsx";
// import { InputBuscador } from "../../../../shared/InputBuscador/InputBuscador.tsx";

// export const ReasignacionLiderActualizar = () => {
//     // Componente para navegar entre paginas
//     const navigate = useNavigate();
//     const location = useLocation();
//     const datosContrato = location.state; // Aquí está el objeto recibido


//     //Catalogosa
//     const [formaPago, setFormaPago] = useState<Catalogo[]>([]);
//     const [tipoContrato, setTipoContrato] = useState<Catalogo[]>([]);
//     const [proveedor, setProveedor] = useState<Catalogo[]>([]);
//     const [gerente, setGerente] = useState<Catalogo[]>([]);
//     const [area, setArea] = useState<Catalogo[]>([]);

//     // Estado para controlar la visibilidad del segundo formulario
//     const [showPerfiles, setShowPerfiles] = useState(false); 

//     const [dataPerfiles, setDataPerfiles] = useState<DatosPerfilesContratos[]>([]);

//     // Estado para controlar los campos del formulario
//     const [formData, setFormData] = useState<FieldContratoClases>({
//         id_contrato: "", 
//         contrato: "",  
//         fechaInicio: "",
//         fechaTermino: "",
//         formaPago: "",
//         tipoContrato: "",
//         proveedor: "",
//         consultores: "",
//         montoVariable: "0.0",  
//         montoFijo: "0.0",
//         montoTotal: "2,612,360.18",
//         id_archivo: "",
//         archivoContrato: "",
//         extencion: "",
//         direccion: "",
//         gerente: "",
//     });

//     const optionalFields: string[] = ["archivoContrato", "extencion","direccion","gerente", "id_archivo", "id_contrato"]; 
//     const optionalFieldsPerfiles: string[] = ["id_perfil", "descripcion", "id_perfil_contrato", "id_contrato"]; 

//     const [fieldContratoClases, setFieldContratoClases] = useState({
//         id_contrato: "form-control",
//         contrato: "form-control",
//         fechaInicio: "form-control",
//         fechaTermino: "form-control",
//         formaPago: "form-control",
//         tipoContrato: "form-control",
//         proveedor: "form-control",
//         consultores: "form-control",
//         montoVariable: "form-control",
//         montoFijo: "form-control",
//         montoTotal: "form-control",
//         id_archivo:  "form-control",
//         archivoContrato: "form-control",
//         extencion: "form-control",
//         direccion: "form-control",
//         gerente: "form-control",
//     });
    
//     // Estado para controlar los campos del fomulario de perfiles
//     const [formPerfilesContrato, setFormPerfilesContrato] = useState({
//         id_perfil_contrato: "",
//         id_contrato: "",
//         id_perfil: "",
//         perfil: "",
//         monto: "0.0",
//         descripcion: "",
//         cantidad: "1",
//     });

//     const [formPerfilesContratoClases, setFormPerfilesContratoClases] = useState({
//         id_perfil_contrato: "form-control",
//         id_contrato: "form-control",
//         id_perfil: "form-control",
//         perfil: "form-control",
//         monto: "form-control",
//         descripcion: "form-control",
//         cantidad: "form-control",
//     });

//     // Manejar cambios del primer formulario
//     const handleChange = (e) => {
//         const { name, value, files } = e.target;
//         setFormData({
//             ...formData,
//             [name]: files ? files[0] : value,
//         });

//         // Validar si el campo no está vacío
//         if (value === null || value === '') {
//             setFieldContratoClases((prev) => ({
//                 ...prev,
//                 [name]: "form-control invalid-class", // Clase adicional si está vacío
//             }));
//         } else {
//             setFieldContratoClases((prev) => ({
//                 ...prev,
//                 [name]: "form-control", // Clase normal
//             }));
//         }
//     };

//     const handleformPerfilesChange = (e) => {
//         const { name, value } = e.target;
//         setFormPerfilesContrato((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));

//         // Validar si el campo no está vacío
//         if (value === null || value === '') {
//             setFormPerfilesContratoClases((prev) => ({
//                 ...prev,
//                 [name]: "form-control invalid-class", // Clase adicional si está vacío
//             }));
//         } else {
//             setFormPerfilesContratoClases((prev) => ({
//                 ...prev,
//                 [name]: "form-control", // Clase normal
//             }));
//         }
//     };

//     const handleFileChange = (e) => {
//         const files = e.target.files;
//         if (files && files.length > 0) {
//           const file = files[0];
//           // Si deseas leer el archivo como base64:
//           const reader = new FileReader();
//           reader.onload = (e) => {
//             const fileData = e.target?.result;
//             // Asegúrate de que el resultado sea una cadena antes de asignarlo
//             if (typeof fileData === 'string') {
//                 const extencion = file.name.split('.').pop();
//                 setFormData({
//                     ...formData,
//                     archivoContrato: fileData, // Guarda el archivo en base64 en el estado
//                     extencion: extencion??'pdf', // Guarda el archivo en base64 en el estado
//                 });
//             } else {
//                 setFormData({
//                     ...formData,
//                     archivoContrato: '', // Guarda el archivo en base64 en el estado
//                 });
//             }            
//           };
//           reader.readAsDataURL(file); // Otras opciones: readAsText, readAsArrayBuffer
//         }
//     };

  
//     const [datosPerfiles, setDatosPerfiles] = useState<any[]>([]); 
//     const [mostrarKeyPerfiles, setMostrarKeyPerfile] = useState<string[]>([]); 
//     const [resultadosPerfiles, setResultadosPerfiles] = useState<any[]>([]); 
//     const [mostrarResultadosPerfiles, setMostrarResultadosPerfiles] = useState(false);

//     const changeBuscadoPerfil = (e) => {
//         let busquedaKey = ['nombre','monto','descripcion'];
//         setMostrarKeyPerfile(busquedaKey);
//         const { name, value } = e.target;

//         setFormPerfilesContrato((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));

//         // Filtrar los datos basados en las coincidencias
//         const filtrados = datosPerfiles.filter((item) =>
//           busquedaKey.some((key) => item[key].toString().toLowerCase().includes(value.toLowerCase()))
//         );
//         setMostrarResultadosPerfiles((value !== "" && filtrados.length > 0 )? true: false);
       
//         setResultadosPerfiles(filtrados);
//     };

//     const perfilSeleccionado = (perfil: any) => {
//         setFormPerfilesContrato({
//             ...formPerfilesContrato,
//             id_perfil: perfil.id, 
//             perfil: perfil.nombre, 
//             monto: perfil.monto, 
//             descripcion:  perfil.descripcion, 
//             cantidad: "1",
//         });
//         setFormPerfilesContratoClases({
//             ...formPerfilesContratoClases,
//             id_perfil: "form-control",
//             perfil: "form-control",
//             monto: "form-control",
//             descripcion: "form-control",
//             cantidad: "form-control",
//         });
//         setMostrarResultadosPerfiles(false);
//     };

//     const obtenerCatalogoPerfiles = async () => {
//         const datos:ConsultaCatalogo = {
//             nombre: "",
//             activo: true,
//         };

//         try {
//           const result = await getCatalogoPerfilesConsultores(datos);
//           setDatosPerfiles(result.data);
//         } catch (error) {
//           console.log(error);
//         }
//     };

//     const obtenerCatalogoFormaPago = async () => {
//         const datos:ConsultaCatalogo = {
//             nombre: "",
//             activo: true,
//         };

//         try {
//           const result = await getCatalogoFormaPago(datos);
//           setFormaPago(result.data);
//         } catch (error) {
//           console.log(error);
//         }
//     };

//     const obtenerCatalogoTipoContrato = async () => {
//         const datos:ConsultaCatalogo = {
//             nombre: "",
//             activo: true,
//         };

//         try {
//           const result = await getCatalogoTipoContrato(datos);
//           setTipoContrato(result.data);
//         } catch (error) {
//           console.log(error);
//         }
//     };
    
//     const obtenerCatalogoCosultora = async () => {
//         const datos:ConsultaCatalogo = {
//             nombre: "",
//             activo: true,
//         };

//         try {
//           const result = await getCatalogoProveedor(datos);
//           setProveedor(result.data);
//         } catch (error) {
//           console.log(error);
//         }
//     };

//     const obtenerCatalogoAreas = async () => {
//         const datos:ConsultaCatalogo = {
//             nombre: "",
//             activo: true,
//         };

//         try {
//           const result = await getCatalogoAreas(datos);
//           setArea(result.data);
//         } catch (error) {
//           console.log(error);
//         }
//     };

//     const guardarActualizarContrato = async () => {

//         const newFieldContratoClases: FieldContratoClases = {
//             id_contrato: "form-control",
//             contrato: "form-control",
//             fechaInicio: "form-control",
//             fechaTermino: "form-control",
//             formaPago: "form-control",
//             tipoContrato: "form-control",
//             proveedor: "form-control",
//             consultores: "form-control",
//             montoVariable: "form-control",
//             montoFijo: "form-control",
//             montoTotal: "form-control",
//             id_archivo: "form-control",
//             archivoContrato: "form-control",
//             extencion: "form-control",
//             direccion: "form-control",
//             gerente: "form-control",
//           };

//         let isValid = true; // Variable para verificar si el formulario es válido
    
//         for (const key in formData) {
//             if (!optionalFields.includes(key)) { // Verifica si el campo no es opcional
//                 if (formData[key] === null || formData[key] === '') {
//                     newFieldContratoClases[key as keyof FieldContratoClases] = "form-control invalid-class";
//                     isValid = false;
//                 }
//             }
//         }

//         setFieldContratoClases(newFieldContratoClases);

//         if(isValid){
//             const datos:GuardaContrato = {
//                 id_contrato: formData.id_contrato === "" ? null : parseInt(formData.id_contrato),
//                 no_contrato: formData.contrato,
//                 fh_inicio: formData.fechaInicio,
//                 fh_termino: formData.fechaTermino,
//                 monto_variable: parseInt(formData.montoVariable),
//                 monto_fijo: parseInt(formData.montoFijo),
//                 monto_total: parseInt(formData.montoTotal),
//                 id_forma_pago: parseInt(formData.formaPago),
//                 id_tipo_contrato: parseInt(formData.tipoContrato),
//                 id_proveedor:  parseInt(formData.proveedor),
//                 id_area: formData.contrato === ""? null: parseInt(formData.contrato),
//                 id_gerente: formData.contrato === ""? null: parseInt(formData.contrato),
//                 id_archivo: formData.id_archivo === "" ? null : parseInt(formData.id_archivo),
//                 activo: true,
//             };
    
//             try {
//                 const result = await guardaActualizaContratos(datos);
//                 setShowPerfiles(true);
//                 if(result.correcto){
//                     toast.success(result.mensaje, {});
//                     setFormData((formData) => ({
//                         ...formData,
//                         id_contrato: result.data.id_contrato.toString(),
//                         id_archivo: result.data.id_archivo != null ? result.data.id_archivo.toString() : '',
//                       }));
//                 } else {
//                     toast.warn(result.mensaje, {});
//                 }
//             } catch (error) {
//                 toast.error(error.mensaje, {});
//             }
//         } else {
//             toast.error("Los campos  marcados son obligatorios"	, {});
//         }


 
//     };

//     const guardarActualizarPerfiles= async () => {

//         const newFieldPerfilClases: FieldPerfilContratoClases = {
//             id_perfil_contrato: "form-control",
//             id_contrato: "form-control",
//             id_perfil: "form-control",
//             perfil: "form-control",
//             monto: "form-control",
//             descripcion: "form-control",
//             cantidad: "form-control",
//           };

//         let isValid = true; // Variable para verificar si el formulario es válido
    
//         for (const key in formPerfilesContrato) {
//             if (!optionalFieldsPerfiles.includes(key)) { // Verifica si el campo no es opcional
//                 if (formPerfilesContrato[key] === null || formPerfilesContrato[key] === '') {
//                     newFieldPerfilClases[key as keyof FieldContratoClases] = "form-control invalid-class";
//                     isValid = false;
//                 }
//             }
//         }

//         setFormPerfilesContratoClases(newFieldPerfilClases);

//         if(isValid){
//             formPerfilesContrato.id_contrato = formData.id_contrato;
//             const datos:GuardaPerfil = {
//                 id_perfil_contrato:  formPerfilesContrato.id_perfil_contrato === ""? null: parseInt(formPerfilesContrato.id_perfil_contrato),
//                 id_contrato: parseInt(formPerfilesContrato.id_contrato),
//                 id_perfil: formPerfilesContrato.id_perfil === ""? null:parseInt(formPerfilesContrato.id_perfil),
//                 perfil: formPerfilesContrato.perfil,
//                 descripcion: formPerfilesContrato.descripcion,
//                 monto: parseFloat(formPerfilesContrato.monto),
//                 cantidad: parseInt(formPerfilesContrato.cantidad),
//                 activo: true,
//             };

//             console.log(datos)
    
//             try {
//                 const result = await guardaActualizaPerfilesContrato(datos);
//                 if(result.correcto){
//                     toast.success(result.mensaje, {});
//                     setFormPerfilesContrato((formData) => ({
//                         ...formData,
//                         id_perfil_contrato: "",
//                         id_contrato: "",
//                         id_perfil: "",
//                         perfil: "",
//                         monto: "0.0",
//                         descripcion: "",
//                         cantidad: "1",
//                       }));
//                     getDataContratos();
//                 } else {
//                     toast.warn(result.mensaje, {});
//                 }
//             } catch (error) {
//                 toast.error(error.mensaje, {});
//             }
//         } else {
//             toast.error("Los campos  marcados son obligatorios"	, {});
//         }


 
//     };

//     const getDataContratos = async (id_contrato = null, pagina = 1, registros = 100) => {
//         const datos:ConsultaPErfilesContrato = {
//           id_contrato: id_contrato !== null ? id_contrato : parseInt(formData.id_contrato),
//           pagina_actual: pagina,
//           registros_por_pagina: registros
//         };

//         try {
//           const result = await getPerfilesContratos(datos);
//           setDataPerfiles(result.data);
//           toast.success(result.mensaje, {});
//         } catch (error) {
//           console.log(error);
//           toast.error(error.mensaje, {});
//         }
//     };

//     useEffect(() => {  
//       if (datosContrato) {
//         llegaronDatosActualizacion(); // Ejecutar la función si el objeto está presente
//         getDataContratos(datosContrato.id_contrato);
//         setShowPerfiles(true);
//       }
//         obtenerCatalogoFormaPago();
//         obtenerCatalogoTipoContrato();
//         obtenerCatalogoCosultora();
//         obtenerCatalogoAreas();
//         obtenerCatalogoPerfiles();
    
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [datosContrato]);
    

//     const llegaronDatosActualizacion = async () => {
//         // Aquí puedes poner la lógica de tu función
//         setFormData({
//             ...formData,
//             id_contrato: datosContrato.id_contrato, 
//             contrato: datosContrato.no_contrato, 
//             fechaInicio: datosContrato.fh_inicio, 
//             fechaTermino: datosContrato.fh_fin, 
//             formaPago: datosContrato.id_forma_pago, 
//             tipoContrato: datosContrato.id_tipo_contrato, 
//             proveedor: datosContrato.id_proveedor, 
//             consultores: datosContrato.no_consultores, 
//             montoVariable: datosContrato.monto_variable,   
//             montoFijo: datosContrato.monto_fijo, 
//             montoTotal: datosContrato.monto_total, 
//             id_archivo: datosContrato.id_archivo, 
//             archivoContrato: "", 
//             extencion: "", 
//             direccion: datosContrato.id_area, 
//             gerente: datosContrato.id_gerente, 
//         });
      
       
//     };

//     const datosPerfilActualizacion = async ( datosPerfil: DatosPerfilesContratos) => {
//         // Aquí puedes poner la lógica de tu función
//         console.log(datosPerfil)
//         toast.info("Se agregaron los datos al formulario de perfiles para actualizar", {});
//         setFormPerfilesContrato({
//             id_perfil_contrato: datosPerfil.id_perfil_contrato.toString(),
//             id_contrato: datosPerfil.id_contrato.toString(),
//             id_perfil: datosPerfil.id_perfil.toString(),
//             perfil: datosPerfil.nombre,
//             monto: datosPerfil.monto.toString(),
//             descripcion: datosPerfil.descripcion,
//             cantidad: datosPerfil.cantidad.toString(),
//         });
//     };



//     return (
//         <>
//             <div className="contenido_principal">
//                 <h3>Reasignacion de lider</h3>
//                 <hr />
//                 <div className="row">
//                     <div className="card">
//                         <div className="card-header row">
//                             <div className="col-sm-3 ">
//                                 <button type="button" className="btn btn-accion-sec" title="Volver"onClick={() => navigate("/reasignacion-de-lider")}>
//                                     <KeyboardReturnIcon />
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="card-body row">
//                             <div className="col-sm-12">
//                                     <Separador texto="Datos del contrato y lider"/>
//                             </div>
//                             <div className="col-sm-6">
//                                 <Input label="Contrato" type="text" name="contrato" value={formData.contrato} onChange={handleChange} 
//                                         placeholder="Numero de contrato" className={fieldContratoClases.contrato} />
//                             </div>
//                             <div className="col-sm-12 sprdr">
//                                 <hr />
//                             </div>
                            
//                             <div className="col-sm-6">
//                                 <Input label="Lider técnico" type="text" name="lider" value="" onChange={handleChange} 
//                                         placeholder="Lider técnico" />
//                             </div>
//                             <div className="col-sm-6">
//                                 <Select  label="Nuevo lider técnico"  name="nuevoLider"   value={formData.gerente}  onChange={handleChange}  options={[{id:1, nombre: "Verónica	Franco Pérez"}, {id:2, nombre: "Joel Cuevas	Carbajal"}]}
//                                         placeholder="Selecciona una opcion"  className="form-control"/>
//                             </div>
//                             <div className="col-sm-12">
//                                     <label className="form-label">Observaciones de cambio</label>
//                                     <textarea className={formPerfilesContratoClases.descripcion} value={formPerfilesContrato.descripcion} 
//                                             onChange={handleformPerfilesChange}  rows={2} placeholder="Descripcion del perfil" name="descripcion"   />
//                                 </div>
//                         </div>
//                         <div className="card-footer row">
//                             <div className="col-sm-12 text-end">
//                                 <button className="btn btn-bscr" title="Guardar" onClick={guardarActualizarContrato}>
//                                     <SaveOutlinedIcon /> Guardar
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {showPerfiles && (
//                     <div className="row">
//                          <div className="card">
//                             <div className="card-body row">
//                                 <div className="col-sm-12">
//                                     <Separador texto="Datos del perfil"/>
//                                 </div>
//                                 <div className="col-sm-4">
//                                     <InputBuscador label="Perfiles" type="text" name="perfil" value={formPerfilesContrato.perfil} 
//                                     placeholder="Perfiles" className={formPerfilesContratoClases.perfil} onChange={changeBuscadoPerfil}
//                                     mostrarResultados={mostrarResultadosPerfiles} mostrarKey={mostrarKeyPerfiles} resultados={resultadosPerfiles} 
//                                     onSeleccionar={perfilSeleccionado} />
//                                 </div>
//                                 <div className="col-sm-4">
//                                     <Input label="Monto" type="text" name="monto" value={formPerfilesContrato.monto} onChange={handleformPerfilesChange} 
//                                             placeholder="Monto" className={formPerfilesContratoClases.monto} />
//                                 </div>
//                                 <div className="col-sm-4">
//                                     <Input label="Cantidad" type="text" name="cantidad" value={formPerfilesContrato.cantidad} onChange={handleformPerfilesChange} 
//                                             placeholder="Cantidad de recurso requerido en el perfil " className={formPerfilesContratoClases.cantidad} />
//                                 </div>
//                                 <div className="col-sm-12">
//                                     <label className="form-label">Descripción del perfil</label>
//                                     <textarea className={formPerfilesContratoClases.descripcion} value={formPerfilesContrato.descripcion} 
//                                             onChange={handleformPerfilesChange}  rows={2} placeholder="Descripcion del perfil" name="descripcion"   />
//                                 </div>
//                             </div>
//                             <div className="card-footer row">
//                                 <div className="col-sm-12 text-end">
//                                     <button className="btn btn-bscr" title="Guardar" onClick={() => {guardarActualizarPerfiles()}}>
//                                         <SaveOutlinedIcon /> Guardar Perfil
//                                     </button>
//                                 </div>
//                             </div>
//                          </div>
//                          <div className="card">
//                                 <div className="card-body row">
//                                     <div className="col-sm-12">
//                                     <Separador texto="Perfiles registrados en el contrato"/>
//                                     </div>
//                                     <div className="col-sm-12">
                                       
//                                             <table className="table table-hover">
//                                             <thead>
//                                                 <tr>
//                                                     <th className="valoresCentrados">Perfil</th>
//                                                     <th className="valoresCentrados">Monto</th>
//                                                     <th className="valoresCentrados">Cantidad</th>
//                                                     <th className="valoresCentrados"> Descripción</th>
//                                                     <th className="valoresCentrados">Acciones</th>
//                                                 </tr>
//                                             </thead>
//                                                 {dataPerfiles && (
//                                                 <tbody>
//                                                     {dataPerfiles.map((dato:DatosPerfilesContratos,i) => (
//                                                         <tr key={i} onClick={() => {datosPerfilActualizacion(dato)}}>
//                                                             <td className="valoresCentrados">{dato.nombre}</td>
//                                                             <td className="valoresCentrados">{dato.monto}</td>
//                                                             <td className="valoresCentrados">{dato.cantidad}</td>
//                                                             <td className="valoresCentrados">{dato.descripcion}</td>
//                                                             <td className="valoresCentrados"></td>
//                                                         </tr>
//                                                     ))}
                                                
//                                                 </tbody>
//                                                 )}
//                                             </table>                                    
//                                     </div>
//                                 </div>
//                          </div> 
//                     </div>
                   
//                 )}
//             </div>

//             <ToastContainer position="top-right" limit={4} autoClose={3000} hideProgressBar={false}  newestOnTop={false}
//                 closeOnClick  rtl={false}   pauseOnFocusLoss  draggable  pauseOnHover  theme="colored" />
//         </>
//     );
// };
