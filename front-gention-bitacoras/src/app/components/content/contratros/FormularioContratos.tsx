import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import SaveIcon from "@mui/icons-material/Save";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Perfil } from "../../../model/response/perfiles.response";
import { Input } from "../../../shared/Input/Input.tsx";
import { Select } from "../../../shared/Select/Select.tsx";
import { Catalogo } from "../../../model/response/catalogo.response.tsx";
import { ConsultaCatalogo } from "../../../model/request/catalogos.request.tsx";
import { getCatalogoAreas, getCatalogoConsultoras, getCatalogoFormaPago, getCatalogoTipoContrato } from "../../../services/catalogos.service.tsx";
import { GuardaContrato } from "../../../model/request/contratos.request.tsx";
import { guardaActualizaContratos } from "../../../services/contratos.service.tsx";
import { ToastContainer, toast } from 'react-toastify';

interface FieldClasses {
    id_contrato: string;
    contrato: string;
    fechaInicio: string;
    fechaTermino: string;
    formaPago: string;
    tipoContrato: string;
    consultora: string;
    consultores: string;
    montoVariable: string;
    montoFijo: string;
    montoTotal: string;
    id_archivo: string;
    archivoContrato: string;
    extencion: string;
    direccion: string;
    gerente: string;
  }

export const FormularioContratos = () => {
    // Componente para navegar entre paginas
    const navigate = useNavigate();

    //Catalogos
    const [formaPago, setFormaPago] = useState<Catalogo[]>([]);
    const [tipoContrato, setTipoContrato] = useState<Catalogo[]>([]);
    const [consultora, setConsultora] = useState<Catalogo[]>([]);
    const [gerente, setGerente] = useState<Catalogo[]>([]);
    const [area, setArea] = useState<Catalogo[]>([]);

    // Estado para controlar los campos del formulario
    const [formData, setFormData] = useState<FieldClasses>({
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
        montoTotal: "0.0",
        id_archivo: "",
        archivoContrato: "",
        extencion: "",
        direccion: "",
        gerente: "",
    });
    const optionalFields: string[] = ["archivoContrato", "extencion","direccion","gerente", "id_archivo", "id_contrato"]; 
    const [fieldClasses, setFieldClasses] = useState({
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

     // Manejar cambios del primer formulario
     const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });

        // Validar si el campo no está vacío
        if (value === null || value === '') {
        setFieldClasses((prev) => ({
            ...prev,
            [name]: "form-control invalid-class", // Clase adicional si está vacío
        }));
        } else {
        setFieldClasses((prev) => ({
            ...prev,
            [name]: "form-control", // Clase normal
        }));
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

    useEffect(() => {
        obtenerCatalogoFormaPago();
        obtenerCatalogoTipoContrato();
        obtenerCatalogoCosultora();
        obtenerCatalogoAreas();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
          const file = files[0];
          console.log("Archivo seleccionado:", file);
          // Si deseas leer el archivo como base64:
          const reader = new FileReader();
          reader.onload = (e) => {
            const fileData = e.target?.result;
            // Asegúrate de que el resultado sea una cadena antes de asignarlo
            if (typeof fileData === 'string') {
                console.log("Contenido del archivo en base64:", fileData);

                const extencion = file.name.split('.').pop();
                setFormData({
                    ...formData,
                    archivoContrato: fileData, // Guarda el archivo en base64 en el estado
                    extencion: extencion??'pdf', // Guarda el archivo en base64 en el estado
                });
            } else {
                console.error('El archivo no pudo ser leído como una cadena.');
                setFormData({
                    ...formData,
                    archivoContrato: '', // Guarda el archivo en base64 en el estado
                });
            }            
          };
          reader.readAsDataURL(file); // Otras opciones: readAsText, readAsArrayBuffer
        }
    };

    const guardarActualizarContrato = async () => {

        const newFieldClasses: FieldClasses = {
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
                    newFieldClasses[key as keyof FieldClasses] = "form-control invalid-class";
                    isValid = false;
                }
            }
        }

        setFieldClasses(newFieldClasses);

        console.log(formData)

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
                setShowSecondForm(true);

                console.log(result)
                if(result.correcto){
                    toast.success(result.mensaje, {});
                    setFormData((formData) => ({
                        ...formData,
                        id_contrato: result.data.id_contrato.toString(),
                        id_archivo: result.data.id_archivo != null ? result.data.id_archivo.toString() : '',
                      }));
                } else {
                    toast.warn(result.mensaje, {});
                }
            } catch (error) {
                console.log("llegamos aqui");
                toast.error(error.mensaje, {});
            }
        } else {
            toast.error("Los campos  marcados son obligatorios"	, {});
        }


 
    };



    // Estado para controlar los campos del segundo formulario
    const [secondFormData, setSecondFormData] = useState({
        perfil: "",
        monto: 0.0,
        descripcion: "",
        cantidad: 0,
    });

    const [showSecondForm, setShowSecondForm] = useState(false); // Estado para controlar la visibilidad del segundo formulario
    const [wordCount, setWordCount] = useState(0); // Estado para contar palabras
    const [perfilesList, setPerfilesList] = useState<Perfil[]>([]); // Estado para la lista de perfiles

   
    // Manejar cambios del segundo formulario
    const handleSecondFormChange = (e) => {
        const { name, value } = e.target;
        setSecondFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));

    };

    // Manejar el cambio de la descripción con límite de 200 palabras
    const handleDescriptionChange = (e) => {
        const { value } = e.target;
        const words = value.trim().split(/\s+/).filter((word) => word.length > 0);
        const wordCount = words.length;

        if (wordCount <= 200) {
            setSecondFormData({...secondFormData, descripcion: value,});
            setWordCount(wordCount);
        }
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
                            <div className="col-sm-4">
                                <Input label="No. contrato" type="text" name="contrato" value={formData.contrato} onChange={handleChange} 
                                        placeholder="Numero de contrato" className={fieldClasses.contrato} />
                            </div>
                            <div className="col-sm-4">
                                <label className="form-label">Fecha de inicio</label> 
                                <input  type="date" className={fieldClasses.fechaInicio} name="fechaInicio" value={formData.fechaInicio} onChange={handleChange} />
                            </div>
                            <div className="col-sm-4">
                                <label className="form-label">Fecha de término</label>
                                <input type="date" className={fieldClasses.fechaTermino} name="fechaTermino" value={formData.fechaTermino} onChange={handleChange} />
                            </div>
                            <div className="col-sm-4">
                                    <Select  label="Selecciona forma de pago"  name="formaPago"   value={formData.formaPago}  onChange={handleChange}  options={formaPago}
                                                placeholder="Selecciona una opcion"   className= {fieldClasses.formaPago}/>
                            </div>
                            <div className="col-sm-4">
                                    <Select  label="Selecciona tipo de contrato"  name="tipoContrato"   value={formData.tipoContrato}  onChange={handleChange}  options={tipoContrato}
                                                placeholder="Selecciona una opcion"   className= {fieldClasses.tipoContrato}/>
                            </div>
                            <div className="col-sm-4">
                                    <Select  label="Selecciona la consultora"  name="consultora"   value={formData.consultora}  onChange={handleChange}  options={consultora}
                                                placeholder="Selecciona una opcion"   className= {fieldClasses.consultora}/>
                            </div>
                            <div className="col-sm-4">
                                <Input label="Monto variable" type="text" name="montoVariable" value={formData.montoVariable} onChange={handleChange} 
                                        placeholder="Monto variable" className= {fieldClasses.montoVariable} />
                            </div>
                            <div className="col-sm-4">
                                <Input label="Monto fijo" type="text" name="montoFijo" value={formData.montoFijo} onChange={handleChange} 
                                        placeholder="Monto fijo" className= {fieldClasses.montoFijo} />
                            </div>
                            <div className="col-sm-4">
                                <Input label="Monto total" type="text" name="montoTotal" value={formData.montoTotal} onChange={handleChange} 
                                        placeholder="Monto total" className= {fieldClasses.montoTotal} />
                            </div>
                            <div className="col-sm-4">
                                <Input label="No. consultores requeridos" type="text" name="consultores" value={formData.consultores} onChange={handleChange} 
                                        placeholder="No consultores" className= {fieldClasses.consultores} />
                            </div>
                            <div className="col-sm-4">
                                <Select  label="Selecciona el Direccion/subdireccion"  name="direccion"   value={formData.direccion}  onChange={handleChange}  options={area}
                                        placeholder="Selecciona una opcion"   className="form-control"/>
                            </div>
                            <div className="col-sm-4">
                                <Select  label="Selecciona el gerente"  name="gerente"   value={formData.gerente}  onChange={handleChange}  options={[]}
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
                                    <SaveIcon /> Guardar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Segundo formulario, solo se muestra si showSecondForm es true */}
                {showSecondForm && (
                    <form>
                        <div className="card mt-4">
                            <div className="card-header d-flex justify-content-start align-items-center">
                                <div className="col-sm-3 text-start">
                                    <button
                                        type="button"
                                        className="btn btn-accion"
                                        title="Agregar perfil"
                                        // onClick={handleAddProfile} // Evento para agregar perfil
                                    >
                                        <ControlPointIcon /> Agregar perfil
                                    </button>
                                </div>
                            </div>
                            <div className="card-body row">
                                <div className="col-sm-12 row">
                                    <div className="col-sm-4">
                                        <label className="form-label">Perfil</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="perfil"
                                            value={secondFormData.perfil}
                                            onChange={handleSecondFormChange}
                                            placeholder="Ingresa el perfil"
                                        />
                                    </div>
                                    <div className="col-sm-4">
                                        <label className="form-label">Monto</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="monto"
                                            value={secondFormData.monto}
                                            onChange={handleSecondFormChange}
                                            placeholder="Ingresa el monto"
                                        />
                                    </div>
                                    <div className="col-sm-4">
                                        <label className="form-label">Cantidad</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cantidad"
                                            value={secondFormData.cantidad}
                                            onChange={handleSecondFormChange}
                                            placeholder="Ingresa la cantidad"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-12 row">
                                    <div className="col-sm-12">
                                        <label className="form-label">Descripcion</label>
                                        <textarea
                                            className="form-control"
                                            name="descripcion"
                                            value={secondFormData.descripcion}
                                            onChange={handleDescriptionChange}
                                            rows={3}
                                            placeholder="Escribe una descripción de hasta 200 palabras"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-end align-items-center">
                                <div className="col-sm-3 text-end">
                                    <button
                                        type="submit"
                                        className="btn btn-principal"
                                        title="Guardar perfil"
                                    >
                                        <SaveIcon /> Guardar
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Tabla para mostrar los perfiles agregados */}
                        {perfilesList.length > 0 && (
                            <div className="mt-4">
                                <h4>Perfiles agregados:</h4>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Perfil</th>
                                            <th>Monto</th>
                                            <th>Cantidad</th>
                                            <th>Descripción</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {perfilesList.map((perfil:Perfil, index) => (
                                            <tr key={index}>
                                                <td>{perfil.perfil}</td>
                                                <td>{perfil.monto}</td>
                                                <td>{perfil.cantidad}</td>
                                                <td>{perfil.descripcion}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </form>
                )}
            </div>

            <ToastContainer position="top-right" limit={4} autoClose={3000} hideProgressBar={false}  newestOnTop={false}
                closeOnClick  rtl={false}   pauseOnFocusLoss  draggable  pauseOnHover  theme="colored" />
        </>
    );
};

export default FormularioContratos;
