import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { DatosPerfilesContratos } from "../../../model/response/perfiles.response";
import { Input } from "../../../shared/Input/Input.tsx";
import { Select } from "../../../shared/Select/Select.tsx";
import { Catalogo } from "../../../model/response/catalogo.response.tsx";
import { ConsultaCatalogo } from "../../../model/request/catalogos.request.tsx";
import {
  getCatalogoAreas,
  getCatalogoFormaPago,
  getCatalogoNivelPerfil,
  getCatalogoPerfilesConsultores,
  getCatalogoProveedor,
  getCatalogoTipoContrato,
  getCatalogoUsuarioPorCago,
} from "../../../services/catalogos.service.tsx";
import { GuardaContrato } from "../../../model/request/contratos.request.tsx";
import { guardaActualizaContratos } from "../../../services/contratos.service.tsx";
import { ToastContainer, toast } from "react-toastify";
import {
  FieldContratoClases,
  FieldPerfilContratoClases,
} from "../../../model/interface/contrato.interface.tsx";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import { Separador } from "../../../shared/SeparadorTexto/SeparadorTexto.tsx";
import {
  ConsultaPerfilesContratos,
  GuardaPerfil,
} from "../../../model/request/perfiles.request.tsx";
import {
  getPerfilesContratosData,
  guardaActualizaPerfilesContrato,
} from "../../../services/perfiles.service.tsx";
import { InputBuscador } from "../../../shared/InputBuscador/InputBuscador.tsx";
import { InputCalendario } from "../../../shared/Calendario/InputCalendatio.tsx";
import { InputFormat } from "../../../shared/InputFormato/InputFormato.tsx";
import { convertirAFecha, convertirNumeroSeparadoComas } from "../../../shared/General/generico.ts";

export const FormularioContratos = () => {
  // Componente para navegar entre paginas
  const navigate = useNavigate();
  const location = useLocation();
  const datosContrato = location.state; // Aquí está el objeto recibido

  //Catalogos
  const [formaPago, setFormaPago] = useState<Catalogo[]>([]);
  const [tipoContrato, setTipoContrato] = useState<Catalogo[]>([]);
  const [proveedor, setProveedor] = useState<Catalogo[]>([]);
  const [gerente, setGerente] = useState<Catalogo[]>([]);
  const [area, setArea] = useState<Catalogo[]>([]);
  const [nivel, setNivel] = useState<Catalogo[]>([]);

  const [textoGuardarContrato, setTextoGuardarContrato] = useState<string>('Guardar contrato');
  const [textoGuardarPerfil, setTextoGuardarPerfil] = useState<string>('Guardar perfil');

  // Estado para controlar la visibilidad del segundo formulario
  const [showPerfiles, setShowPerfiles] = useState(false);

  const [dataPerfiles, setDataPerfiles] = useState<DatosPerfilesContratos[]>(
    []
  );

  // Estado para controlar los campos del formulario
  const [formData, setFormData] = useState<FieldContratoClases>({
    id_contrato: "",
    contrato: "",
    fechaInicio: "",
    fechaTermino: "",
    formaPago: "",
    tipoContrato: "",
    proveedor: "",
    consultores: "",
    montoVariable: "",
    montoFijo: "",
    montoTotal: "0",
    id_archivo: "",
    archivoContrato: "",
    extencion: "",
    area: "",
    gerente: "",
  });

  const optionalFields: string[] = [
    "archivoContrato",
    "extencion",
    "area",
    "gerente",
    "id_archivo",
    "id_contrato",
  ];
  const optionalFieldsPerfiles: string[] = [
    "id_perfil",
    "descripcion",
    "id_perfil_contrato",
    "id_contrato",
  ];

  const [fieldContratoClases, setFieldContratoClases] = useState({
    id_contrato: "form-control",
    contrato: "form-control",
    fechaInicio: "form-control",
    fechaTermino: "form-control",
    formaPago: "form-control",
    tipoContrato: "form-control",
    proveedor: "form-control",
    consultores: "form-control",
    montoVariable: "form-control",
    montoFijo: "form-control",
    montoTotal: "form-control",
    id_archivo: "form-control",
    archivoContrato: "form-control",
    extencion: "form-control",
    area: "form-control",
    gerente: "form-control",
  });

  // Estado para controlar los campos del fomulario de perfiles
  const [formPerfilesContrato, setFormPerfilesContrato] = useState({
    id_perfil_contrato: "",
    id_contrato: "",
    id_perfil: "",
    perfil: "",
    monto: "0",
    descripcion: "",
    id_nivel: "",
  });

  const [formPerfilesContratoClases, setFormPerfilesContratoClases] = useState({
    id_perfil_contrato: "form-control",
    id_contrato: "form-control",
    id_perfil: "form-control",
    perfil: "form-control",
    monto: "form-control",
    descripcion: "form-control",
    id_nivel: "form-control",
  });

  // Manejar cambios del primer formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    // const cursorPosition = e.target.selectionStart;
    setFormData((formData) => {
      // Obtener los valores actuales de montoVariable y montoFijo
      const montoVariable = name === "montoVariable" ? parseFloat(value.replace(/,/g, '')) || 0 : parseFloat(formData.montoVariable.replace(/,/g, '')) || 0;
      const montoFijo = name === "montoFijo" ? parseFloat(value.replace(/,/g, '')) || 0 : parseFloat(formData.montoFijo.replace(/,/g, '')) || 0;

      const uppercasedValue = name === "contrato" ? value.toUpperCase() : value;

      let montoTotal = montoVariable + montoFijo;
      // Actualizar el valor de montoTotal
      const [integerPart, decimalPart] = montoTotal.toString().split(".");
      // Formatear solo la parte entera con comas
      const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      // Unir la parte entera formateada con la parte decimal (si existe)
      let montoTotalFinal = decimalPart !== undefined ? `${formattedInteger}.${decimalPart}` : formattedInteger;

      return {
        ...formData,
        [name]: uppercasedValue,
        montoTotal: montoTotalFinal.toString(), // Convertir a string para mantener consistencia
      };


    });

    // Validar si el campo no está vacío
    if (value === null || value === "") {
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
    if (value === null || value === "") {
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
        if (typeof fileData === "string") {
          const extencion = file.name.split(".").pop();
          setFormData({
            ...formData,
            archivoContrato: fileData, // Guarda el archivo en base64 en el estado
            extencion: extencion ?? "pdf", // Guarda el archivo en base64 en el estado
          });
        } else {
          setFormData({
            ...formData,
            archivoContrato: "", // Guarda el archivo en base64 en el estado
          });
        }
      };
      reader.readAsDataURL(file); // Otras opciones: readAsText, readAsArrayBuffer
    }
  };

  const [datosPerfiles, setDatosPerfiles] = useState<any[]>([]);
  const [mostrarKeyPerfiles, setMostrarKeyPerfile] = useState<string[]>([]);
  const [resultadosPerfiles, setResultadosPerfiles] = useState<any[]>([]);
  const [mostrarResultadosPerfiles, setMostrarResultadosPerfiles] =
    useState(false);

  const changeBuscadoPerfil = (e) => {
    let busquedaKey = ["nombre", "monto", "descripcion"];
    setMostrarKeyPerfile(busquedaKey);
    const { name, value } = e.target;

    setFormPerfilesContrato((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Filtrar los datos basados en las coincidencias
    const filtrados = datosPerfiles.filter((item) =>
      busquedaKey.some((key) =>
        item[key].toString().toLowerCase().includes(value.toLowerCase())
      )
    );
    setMostrarResultadosPerfiles(
      value !== "" && filtrados.length > 0 ? true : false
    );

    setResultadosPerfiles(filtrados);
  };

  const perfilSeleccionado = (perfil: any) => {

    let perfil_monto = convertirNumeroSeparadoComas(perfil.monto);
    setFormPerfilesContrato({
      ...formPerfilesContrato,
      id_perfil: perfil.id,
      perfil: perfil.nombre,
      monto: perfil_monto,
      descripcion: perfil.descripcion,
    });
    setFormPerfilesContratoClases({
      ...formPerfilesContratoClases,
      id_perfil: "form-control",
      perfil: "form-control",
      monto: "form-control",
      descripcion: "form-control",
      id_nivel: "form-control",
    });
    setMostrarResultadosPerfiles(false);
  };

  const obtenerCatalogoPerfiles = async () => {
    const datos: ConsultaCatalogo = {
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
    const datos: ConsultaCatalogo = {
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
    const datos: ConsultaCatalogo = {
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
    const datos: ConsultaCatalogo = {
      nombre: "",
      activo: true,
    };

    try {
      const result = await getCatalogoProveedor(datos);
      setProveedor(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerCatalogoAreas = async () => {
    const datos: ConsultaCatalogo = {
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

  const obtenerCatalogoNivel = async () => {
    const datos: ConsultaCatalogo = {
      nombre: "",
      activo: true,
    };

    try {
      const result = await getCatalogoNivelPerfil(datos);
      setNivel(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerCatalogoGerentes = async () => {
    const datos: ConsultaCatalogo = {
      nombre: "Gerente",
      activo: true,
    };

    try {
      const result = await getCatalogoUsuarioPorCago(datos);
      setGerente(result.data);
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
      proveedor: "form-control",
      consultores: "form-control",
      montoVariable: "form-control",
      montoFijo: "form-control",
      montoTotal: "form-control",
      id_archivo: "form-control",
      archivoContrato: "form-control",
      extencion: "form-control",
      area: "form-control",
      gerente: "form-control",
    };

    let isValid = true; // Variable para verificar si el formulario es válido

    for (const key in formData) {
      if (!optionalFields.includes(key)) {
        // Verifica si el campo no es opcional
        if (formData[key] === null || formData[key] === "") {
          newFieldContratoClases[key as keyof FieldContratoClases] =
            "form-control invalid-class";
          isValid = false;
        }
      }
    }

    if (isValid) {
      try {
        if (convertirAFecha(formData.fechaInicio) >= convertirAFecha(formData.fechaTermino)) {
          isValid = false;
          toast.error("La fecha de inicio debe ser mayor a la fecha de termino", {});
          return;
        }
      } catch (ex) {
        isValid = false;
        toast.error("Las fecha son invalidas", {});
        return;
      }
    }


    setFieldContratoClases(newFieldContratoClases);

    if (isValid) {
      const datos: GuardaContrato = {
        id_contrato:
          formData.id_contrato === "" ? null : parseInt(formData.id_contrato),
        no_contrato: formData.contrato,
        fh_inicio: formData.fechaInicio,
        fh_termino: formData.fechaTermino,
        monto_variable: formData.montoVariable,
        monto_fijo: formData.montoFijo,
        monto_total: formData.montoTotal,
        id_forma_pago: parseInt(formData.formaPago),
        id_tipo_contrato: parseInt(formData.tipoContrato),
        id_proveedor: parseInt(formData.proveedor),
        id_area: formData.area === "" ? null : parseInt(formData.area),
        id_gerente:
          formData.gerente === "" ? null : parseInt(formData.gerente),
        no_consultores: formData.consultores === "" ? null : parseInt(formData.consultores),
        activo: 1,
        id_archivo: null,
        nombre: null,
        ruta: null,
        id_contrato_convenio: null,
      };

      try {
        const result = await guardaActualizaContratos(datos);
        if (result.correcto) {
          toast.success(result.mensaje, {});
          setFormData((formData) => ({
            ...formData,
            id_contrato: result.data.toString(),
          }));
          setShowPerfiles(true);
        } else {
          toast.warn(result.mensaje, {});
        }
      } catch (error) {
        toast.error(error.mensaje, {});
      }
    } else {
      toast.error("Los campos  marcados son obligatorios", {});
    }
  };

  const limpiarFormPerfil = async () => {
    setFormPerfilesContrato((formData) => ({
      ...formData,
      id_perfil_contrato: "",
      id_contrato: "",
      id_perfil: "",
      perfil: "",
      monto: "0",
      descripcion: "",
      id_nivel: "",
    }));

    const newFieldPerfilClases: FieldPerfilContratoClases = {
      id_perfil_contrato: "form-control",
      id_contrato: "form-control",
      id_perfil: "form-control",
      perfil: "form-control",
      monto: "form-control",
      descripcion: "form-control",
      id_nivel: "form-control",
    };

    setFormPerfilesContratoClases(newFieldPerfilClases);
    setTextoGuardarPerfil("Guardar perfil");
  }

  const guardarActualizarPerfiles = async () => {
    const newFieldPerfilClases: FieldPerfilContratoClases = {
      id_perfil_contrato: "form-control",
      id_contrato: "form-control",
      id_perfil: "form-control",
      perfil: "form-control",
      monto: "form-control",
      descripcion: "form-control",
      id_nivel: "form-control",
    };

    let isValid = true; // Variable para verificar si el formulario es válido

    for (const key in formPerfilesContrato) {
      if (!optionalFieldsPerfiles.includes(key)) {
        // Verifica si el campo no es opcional
        if (
          formPerfilesContrato[key] === null ||
          formPerfilesContrato[key] === ""
        ) {
          newFieldPerfilClases[key as keyof FieldContratoClases] =
            "form-control invalid-class";
          isValid = false;
        }
      }
    }

    setFormPerfilesContratoClases(newFieldPerfilClases);

    if (isValid) {
      formPerfilesContrato.id_contrato = formData.id_contrato;
      const datos: GuardaPerfil = {
        id_perfil_contrato:
          formPerfilesContrato.id_perfil_contrato === ""
            ? null
            : parseInt(formPerfilesContrato.id_perfil_contrato),
        id_contrato: parseInt(formPerfilesContrato.id_contrato),
        id_perfil:
          formPerfilesContrato.id_perfil === ""
            ? null
            : parseInt(formPerfilesContrato.id_perfil),
        perfil: formPerfilesContrato.perfil,
        descripcion: formPerfilesContrato.descripcion,
        monto: formPerfilesContrato.monto,
        id_nivel: parseInt(formPerfilesContrato.id_nivel),
        activo: true,
      };

      try {
        const result = await guardaActualizaPerfilesContrato(datos);
        if (result.correcto) {
          toast.success(result.mensaje, {});
          await limpiarFormPerfil();
          getDataContratos();
          setTextoGuardarPerfil("Guardar perfil");
          obtenerCatalogoPerfiles();
        } else {
          toast.warn(result.mensaje, {});
        }
      } catch (error) {
        toast.error(error.mensaje, {});
      }
    } else {
      toast.error("Los campos  marcados son obligatorios", {});
    }
  };

  const getDataContratos = async (
    id_contrato = null,
    pagina = 1,
    registros = 100
  ) => {
    const datos: ConsultaPerfilesContratos = {
      id_contrato:
        id_contrato !== null ? id_contrato : parseInt(formData.id_contrato),
      pagina_actual: pagina,
      registros_por_pagina: registros,
    };


    try {
      const result = await getPerfilesContratosData(datos);
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
      setTextoGuardarContrato("Actualizar contrato");
      getDataContratos(datosContrato.id_contrato);
      setShowPerfiles(true);
    }
    obtenerCatalogoFormaPago();
    obtenerCatalogoTipoContrato();
    obtenerCatalogoCosultora();
    obtenerCatalogoAreas();
    obtenerCatalogoPerfiles();
    obtenerCatalogoGerentes();
    obtenerCatalogoNivel();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [datosContrato]);

  const llegaronDatosActualizacion = async () => {

    let monto_variable = convertirNumeroSeparadoComas(datosContrato.monto_variable);
    let monto_fijo = convertirNumeroSeparadoComas(datosContrato.monto_fijo);
    let monto_total = convertirNumeroSeparadoComas(datosContrato.monto_total);

    setFormData({
      ...formData,
      id_contrato: datosContrato.id_contrato,
      contrato: datosContrato.no_contrato,
      fechaInicio: datosContrato.fh_inicio,
      fechaTermino: datosContrato.fh_fin,
      formaPago: datosContrato.id_forma_pago,
      tipoContrato: datosContrato.id_tipo_contrato,
      proveedor: datosContrato.id_proveedor,
      consultores: datosContrato.no_consultores,
      montoVariable: monto_variable,
      montoFijo: monto_fijo,
      montoTotal: monto_total,
      id_archivo: datosContrato.id_archivo,
      archivoContrato: "",
      extencion: "",
      area: datosContrato.id_area,
      gerente: datosContrato.id_gerente,
    });
  };

  const datosPerfilActualizacion = async (
    datosPerfil: DatosPerfilesContratos
  ) => {
    limpiarFormPerfil();
    toast.info(
      "Se agregaron los datos al formulario de perfiles para actualizar",
      {}
    );
    setTextoGuardarPerfil("Actualizar perfil");
    let datosPerfil_monto = convertirNumeroSeparadoComas(datosPerfil.monto.toString());
    setFormPerfilesContrato({
      id_perfil_contrato: datosPerfil.id_perfil_contrato.toString(),
      id_contrato: datosPerfil.id_contrato.toString(),
      id_perfil: datosPerfil.id_perfil.toString(),
      perfil: datosPerfil.perfil,
      monto: datosPerfil_monto,
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
                <button type="button" className="btn btn-accion-sec" title="Volver"
                  onClick={() => navigate("/contrato")}>
                  <KeyboardReturnIcon />
                </button>
              </div>
            </div>
            <div className="card-body row">
              <div className="col-sm-12">
                <Separador texto="Datos del contrato" />
              </div>
              <div className="col-sm-4">
                <Input label="No. contrato" type="text" name="contrato" value={formData.contrato}
                  onChange={handleChange} placeholder="Numero de contrato" className={fieldContratoClases.contrato}
                />
              </div>
              <div className="col-sm-4">
                <InputCalendario label="Fecha de inicio" name="fechaInicio" value={formData.fechaInicio} onChange={handleChange}
                  className={fieldContratoClases.fechaInicio} />
              </div>
              <div className="col-sm-4">
                <InputCalendario label="Fecha de término" name="fechaTermino" value={formData.fechaTermino} onChange={handleChange}
                  className={fieldContratoClases.fechaTermino} />
              </div>
              <div className="col-sm-4">
                <Select label="Selecciona forma de pago" name="formaPago" value={formData.formaPago} onChange={handleChange}
                  options={formaPago} placeholder="Selecciona una opcion" className={fieldContratoClases.formaPago} />
              </div>
              <div className="col-sm-4">
                <Select label="Selecciona tipo de contrato" name="tipoContrato" value={formData.tipoContrato} onChange={handleChange}
                  options={tipoContrato} placeholder="Selecciona una opcion" className={fieldContratoClases.tipoContrato} />
              </div>
              <div className="col-sm-4">
                <Select label="Selecciona el proveedor" name="proveedor" value={formData.proveedor} onChange={handleChange}
                  options={proveedor} placeholder="Selecciona una opcion" className={fieldContratoClases.proveedor} />
              </div>
              <div className="col-sm-4">
                <InputFormat label="Monto variable (IVA Incluido)" type="text" name="montoVariable" value={formData.montoVariable}
                  onChange={handleChange} placeholder="Monto variable" className={fieldContratoClases.montoVariable} />
              </div>
              <div className="col-sm-4">
                <InputFormat label="Monto fijo (IVA Incluido)" type="text" name="montoFijo" value={formData.montoFijo}
                  onChange={handleChange} placeholder="Monto variable" className={fieldContratoClases.montoFijo} />
              </div>
              <div className="col-sm-4">
                <InputFormat label="Monto total (IVA Incluido)" type="text" name="montoTotal" value={formData.montoTotal}
                  onChange={handleChange} placeholder="Monto variable" className={fieldContratoClases.montoFijo} disabled={true} />
              </div>
              <div className="col-sm-4">
                <Input label="Personal requerido inicial" type="text" name="consultores" value={formData.consultores}
                  onChange={handleChange} placeholder="Personal requerido inicial" className={fieldContratoClases.consultores} />
              </div>
              <div className="col-sm-4">
                <Select label="Selecciona Direccion / Subdireccion" name="area" value={formData.area}
                  onChange={handleChange} options={area} placeholder="Selecciona una opcion" className="form-control" />
              </div>
              <div className="col-sm-4">
                <Select label="Selecciona Gerente" name="gerente" value={formData.gerente}
                  onChange={handleChange} options={gerente}
                  placeholder="Selecciona una opcion" className="form-control" />
              </div>
              <div className="col-sm-8">
                <label className="form-label">Carga de contrato</label>
                <input className="form-control" type="file"
                  placeholder="Selecciona el archivo a subir" name="archivo" onChange={handleFileChange} />
              </div>
            </div>
            <div className="card-footer row">
              <div className="col-sm-12 text-end">
                <button className="btn btn-principal" title={textoGuardarContrato} onClick={guardarActualizarContrato} >
                  <SaveOutlinedIcon /> {textoGuardarContrato}
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
                  <Separador texto="Datos del perfil" />
                </div>
                <div className="col-sm-4">
                  <Select label="Selecciona nivel del perfil" name="id_nivel" value={formPerfilesContrato.id_nivel}
                    onChange={handleformPerfilesChange} options={nivel} placeholder="Selecciona una opcion" className={formPerfilesContratoClases.id_nivel} />
                </div>

                <div className="col-sm-4">
                  <InputBuscador label="Perfil" type="text" name="perfil" value={formPerfilesContrato.perfil} placeholder="Perfil"
                    className={formPerfilesContratoClases.perfil} onChange={changeBuscadoPerfil} mostrarResultados={mostrarResultadosPerfiles}
                    mostrarKey={mostrarKeyPerfiles} resultados={resultadosPerfiles} onSeleccionar={perfilSeleccionado} />
                </div>
                <div className="col-sm-4">
                  <InputFormat label="Monto" type="text" name="monto" value={formPerfilesContrato.monto}
                    onChange={handleformPerfilesChange} placeholder="Monto" className={formPerfilesContratoClases.monto} />
                </div>
                <div className="col-sm-12">
                  <label className="form-label">Descripción del perfil</label>
                  <textarea className={formPerfilesContratoClases.descripcion} value={formPerfilesContrato.descripcion}
                    onChange={handleformPerfilesChange} rows={2} placeholder="Descripcion del perfil" name="descripcion" />
                </div>
              </div>
              <div className="card-footer row">
                <div className="col-sm-12 text-end">
                  <button className="btn btn-principal" title="Limpiar" onClick={() => { limpiarFormPerfil(); }} >
                    <CleaningServicesOutlinedIcon /> Limpiar
                  </button>
                  <button className="btn btn-principal" title={textoGuardarPerfil} onClick={() => { guardarActualizarPerfiles(); }} >
                    <SaveOutlinedIcon /> {textoGuardarPerfil}
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body row">
                <div className="col-sm-12">
                  <Separador texto="Perfiles registrados en el contrato" />
                </div>
                <div className="col-sm-12">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th className="valoresCentrados">Nivel</th>
                        <th className="valoresCentrados">Perfil</th>
                        <th className="valoresCentrados">Monto</th>
                        <th className="valoresCentrados">Descripción</th>
                        <th className="valoresCentrados">Acciones</th>
                      </tr>
                    </thead>
                    {dataPerfiles && (
                      <tbody>
                        {dataPerfiles.map((dato: DatosPerfilesContratos, i) => (
                          <tr key={i} onClick={() => { datosPerfilActualizacion(dato); }}>
                            <td className="valoresCentrados">{dato.nivel}</td>
                            <td className="valoresCentrados">{dato.perfil}</td>
                            <td className="valoresCentrados">{convertirNumeroSeparadoComas(dato.monto.toString())}</td>
                            <td className="valoresCentrados">
                              {dato.descripcion}
                            </td>
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

      <ToastContainer position="top-right" limit={4} autoClose={3000} hideProgressBar={false} newestOnTop={false}
        closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
    </>
  );
};

export default FormularioContratos;
