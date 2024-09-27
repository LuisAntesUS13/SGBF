import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import SaveIcon from "@mui/icons-material/Save";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Perfil } from "../../../model/response/perfiles.response";

export const FormularioContratos = () => {
    // Componente para navegar entre paginas
    const navigate = useNavigate();

    // Estado para controlar los campos del formulario
    const [formData, setFormData] = useState({
        contrato: "",
        fechaInicio: "",
        fechaTermino: "",
        formaPago: "",
        tipoContrato: "",
        consultora: "",
        consultores: "",
        montoVariable: "",
        montoFijo: "",
        montoTotal: "",
        cargaContrato: null,
        direccion: "",
        gerente: "",
    });

    // Estado para controlar los campos del segundo formulario
    const [secondFormData, setSecondFormData] = useState({
        perfil: "",
        monto: "",
        descripcion: "",
        cantidad: "",
    });

    const [showSecondForm, setShowSecondForm] = useState(false); // Estado para controlar la visibilidad del segundo formulario
    const [wordCount, setWordCount] = useState(0); // Estado para contar palabras
    const [perfilesList, setPerfilesList] = useState<Perfil[]>([]); // Estado para la lista de perfiles

    // Manejar cambios del primer formulario
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    // Manejar el submit del primer formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Aquí puedes enviar los datos del primer formulario
        setShowSecondForm(true); // Mostrar el segundo formulario
    };

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
        const words = value
            .trim()
            .split(/\s+/)
            .filter((word) => word.length > 0);
        const wordCount = words.length;

        if (wordCount <= 200) {
            setSecondFormData({
                ...secondFormData,
                descripcion: value,
            });
            setWordCount(wordCount);
        }
    };

    // const handleAddProfile = () => {
    //     // Añadir el perfil actual a la lista
    //     setPerfilesList((prevList) => [...prevList, secondFormData]);

    //     // Limpiar los campos del formulario
    //     setSecondFormData({
    //         perfil: '',
    //         monto: '',
    //         cantidad: '',
    //         descripcion: '',
    //     });
    // };

    return (
        <>
            <div className="contenido_principal">
                <h3>Nuevo contrato</h3>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className="card">
                        <div className="card-header d-flex justify-content-start align-items-center">
                            <div className="col-sm-3 text-start">
                                <button
                                    type="button"
                                    className="btn btn-accion"
                                    title="Volver"
                                    onClick={() => navigate("/contrato")}
                                >
                                    <KeyboardReturnIcon />
                                </button>
                            </div>
                        </div>
                        <div className="card-body row">
                            <div className="col-sm-12 row">
                                <div className="col-sm-4">
                                    <label className="form-label">No. contrato</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="SG0909"
                                        name="contrato"
                                        value={formData.contrato}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <label className="form-label">Fecha de inicio</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="fechaInicio"
                                        value={formData.fechaInicio}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <label className="form-label">Fecha de término</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="fechaTermino"
                                        value={formData.fechaTermino}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-12 row">
                                <div className="col-sm-4">
                                    <label className="form-label">Selecciona forma de pago</label>
                                    <select
                                        className="form-control"
                                        name="formaPago"
                                        value={formData.formaPago}
                                        onChange={handleChange}
                                    >
                                        <option value="">Selecciona una opción</option>
                                        <option value="efectivo">Efectivo</option>
                                        <option value="tarjeta">Tarjeta</option>
                                        <option value="transferencia">Transferencia</option>
                                    </select>
                                </div>

                                <div className="col-sm-4">
                                    <label className="form-label">
                                        Selecciona tipo de contrato
                                    </label>
                                    <select
                                        className="form-control"
                                        name="tipoContrato"
                                        value={formData.tipoContrato}
                                        onChange={handleChange}
                                    >
                                        <option value="">Selecciona una opción</option>
                                        <option value="temporal">Temporal</option>
                                        <option value="indefinido">Indefinido</option>
                                        <option value="porProyecto">Por Proyecto</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-12 row">
                                <div className="col-sm-4">
                                    <label className="form-label">
                                        Capture o seleccione a la consultora
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        name="consultora"
                                        value={formData.consultora}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <label className="form-label">
                                        No. consultores requeridos
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        name="consultores"
                                        value={formData.consultores}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-12 row">
                                <div className="col-sm-4">
                                    <label className="form-label">Monto variable</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        name="montoVariable"
                                        value={formData.montoVariable}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <label className="form-label">Monto fijo</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        name="montoFijo"
                                        value={formData.montoFijo}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <label className="form-label">Monto total</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        name="montoTotal"
                                        value={formData.montoTotal}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-12 row">
                                <div className="col-sm-12">
                                    <label className="form-label">Carga de contrato</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        placeholder=""
                                        name="cargaContrato"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-12 row">
                                <div className="col-sm-4">
                                    <label className="form-label">Direccion/subdireccion</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        name="direccion"
                                        value={formData.direccion}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <label className="form-label">Gerente</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        name="gerente"
                                        value={formData.direccion}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-end align-items-center">
                            <div className="col-sm-3 text-end">
                                <button
                                    type="submit"
                                    className="btn btn-principal"
                                    title="Guardar"
                                >
                                    <SaveIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                </form>

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
        </>
    );
};

export default FormularioContratos;
