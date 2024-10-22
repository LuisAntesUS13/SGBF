import {
  ConsultaCatalogo,
  ConsultaCatalogoDocumentos,
} from "../model/request/catalogos.request.tsx";
import {
  RespuestaCatalogo,
  RespuestaCatalogoDocumentos,
  RespuestaCatalogoExtArchivo,
  RespuestaCatalogoPerfilConsultor,
} from "../model/response/catalogo.response.tsx";
import { ErrorPersonalizado } from "../model/response/error.response.tsx";
import { API_ROUTES } from "../shared/rutasApi.tsx";

export async function getCatalogoAreas(consultaCatalogo: ConsultaCatalogo) {
  try {
    const response = await fetch(`${API_ROUTES.catalogos}/areas`, {
      method: "POST", // Especifica que es un POST
      headers: {
        "Content-Type": "application/json", // Indica que el cuerpo de la solicitud es JSON
      },
      body: JSON.stringify(consultaCatalogo), // Reemplaza esto con los datos que quieres enviar
    });

    if (!response.ok) {
      const errorData = await response.json();
      // eslint-disable-next-line no-throw-literal
      throw {
        correcto: errorData.success,
        mensaje: errorData.message,
        data: null,
      }  as ErrorPersonalizado
    }

    const data: RespuestaCatalogo = await response.json();
    return data; // Retorna los datos obtenidos
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error; // Retorna el error para manejarlo externamente
  }
}

export async function getCatalogoConsultoras(
  consultaCatalogo: ConsultaCatalogo
) {
  try {
    const response = await fetch(`${API_ROUTES.catalogos}/consultores`, {
      method: "POST", // Especifica que es un POST
      headers: {
        "Content-Type": "application/json", // Indica que el cuerpo de la solicitud es JSON
      },
      body: JSON.stringify(consultaCatalogo), // Reemplaza esto con los datos que quieres enviar
    });

    if (!response.ok) {
      const errorData = await response.json();
      // eslint-disable-next-line no-throw-literal
      throw {
        correcto: errorData.success,
        mensaje: errorData.message,
        data: null,
      }  as ErrorPersonalizado
    }

    const data: RespuestaCatalogo = await response.json();
    return data; // Retorna los datos obtenidos
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error; // Retorna el error para manejarlo externamente
  }
}

export async function getCatalogoDocumentos(
  consultaCatalogoDocumentos: ConsultaCatalogoDocumentos
) {
  try {
    const response = await fetch(`${API_ROUTES.catalogos}/documentos`, {
      method: "POST", // Especifica que es un POST
      headers: {
        "Content-Type": "application/json", // Indica que el cuerpo de la solicitud es JSON
      },
      body: JSON.stringify(consultaCatalogoDocumentos), // Reemplaza esto con los datos que quieres enviar
    });

    if (!response.ok) {
      const errorData = await response.json();
      // eslint-disable-next-line no-throw-literal
      throw {
        correcto: errorData.success,
        mensaje: errorData.message,
        data: null,
      }  as ErrorPersonalizado
    }

    const data: RespuestaCatalogoDocumentos = await response.json();
    return data; // Retorna los datos obtenidos
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error; // Retorna el error para manejarlo externamente
  }
}

// export async function getCatalogoTipoDocumentos(
//   consultaCatalogo: ConsultaCatalogo
// ) {
//   try {
//     const response = await fetch(`${API_ROUTES.catalogos}/getTipoDocumentos`, {
//       method: "POST", // Especifica que es un POST
//       headers: {
//         "Content-Type": "application/json", // Indica que el cuerpo de la solicitud es JSON
//       },
//       body: JSON.stringify(consultaCatalogo), // Reemplaza esto con los datos que quieres enviar
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data: RespuestaCatalogo = await response.json();
//     return data; // Retorna los datos obtenidos
//   } catch (error) {
//     console.error("Error al obtener datos:", error);
//     throw error; // Retorna el error para manejarlo externamente
//   }
// }

export async function getCatalogoExtenciones(
  consultaCatalogo: ConsultaCatalogo
) {
  try {
    const response = await fetch(`${API_ROUTES.catalogos}/extencion`, {
      method: "POST", // Especifica que es un POST
      headers: {
        "Content-Type": "application/json", // Indica que el cuerpo de la solicitud es JSON
      },
      body: JSON.stringify(consultaCatalogo), // Reemplaza esto con los datos que quieres enviar
    });

    if (!response.ok) {
      const errorData = await response.json();
      // eslint-disable-next-line no-throw-literal
      throw {
        correcto: errorData.success,
        mensaje: errorData.message,
        data: null,
      }  as ErrorPersonalizado
    }

    const data: RespuestaCatalogoExtArchivo = await response.json();
    return data; // Retorna los datos obtenidos
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error; // Retorna el error para manejarlo externamente
  }
}

export async function getCatalogoFormaPago(consultaCatalogo: ConsultaCatalogo) {
  try {
    const response = await fetch(`${API_ROUTES.catalogos}/forma_pago`, {
      method: "POST", // Especifica que es un POST
      headers: {
        "Content-Type": "application/json", // Indica que el cuerpo de la solicitud es JSON
      },
      body: JSON.stringify(consultaCatalogo), // Reemplaza esto con los datos que quieres enviar
    });

    if (!response.ok) {
      const errorData = await response.json();
      // eslint-disable-next-line no-throw-literal
      throw {
        correcto: errorData.success,
        mensaje: errorData.message,
        data: null,
      }  as ErrorPersonalizado
    }

    const data: RespuestaCatalogo = await response.json();
    return data; // Retorna los datos obtenidos
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error; // Retorna el error para manejarlo externamente
  }
}

export async function getCatalogoModuloAplicativo(
  consultaCatalogo: ConsultaCatalogo
) {
  try {
    const response = await fetch(
      `${API_ROUTES.catalogos}/modulo_aplicativo`,
      {
        method: "POST", // Especifica que es un POST
        headers: {
          "Content-Type": "application/json", // Indica que el cuerpo de la solicitud es JSON
        },
        body: JSON.stringify(consultaCatalogo), // Reemplaza esto con los datos que quieres enviar
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      // eslint-disable-next-line no-throw-literal
      throw {
        correcto: errorData.success,
        mensaje: errorData.message,
        data: null,
      }  as ErrorPersonalizado
    }

    const data: RespuestaCatalogo = await response.json();
    return data; // Retorna los datos obtenidos
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error; // Retorna el error para manejarlo externamente
  }
}

export async function getCatalogoPerfilesConsultores(
  consultaCatalogo: ConsultaCatalogo
) {
  try {
    const response = await fetch(
      `${API_ROUTES.catalogos}/perfil_consultor`,
      {
        method: "POST", // Especifica que es un POST
        headers: {
          "Content-Type": "application/json", // Indica que el cuerpo de la solicitud es JSON
        },
        body: JSON.stringify(consultaCatalogo), // Reemplaza esto con los datos que quieres enviar
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      // eslint-disable-next-line no-throw-literal
      throw {
        correcto: errorData.success,
        mensaje: errorData.message,
        data: null,
      }  as ErrorPersonalizado
    }

    const data: RespuestaCatalogoPerfilConsultor = await response.json();
    return data; // Retorna los datos obtenidos
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error; // Retorna el error para manejarlo externamente
  }
}

export async function getCatalogoProyectos(consultaCatalogo: ConsultaCatalogo) {
  try {
    const response = await fetch(`${API_ROUTES.catalogos}/proyecto`, {
      method: "POST", // Especifica que es un POST
      headers: {
        "Content-Type": "application/json", // Indica que el cuerpo de la solicitud es JSON
      },
      body: JSON.stringify(consultaCatalogo), // Reemplaza esto con los datos que quieres enviar
    });

    if (!response.ok) {
      const errorData = await response.json();
      // eslint-disable-next-line no-throw-literal
      throw {
        correcto: errorData.success,
        mensaje: errorData.message,
        data: null,
      }  as ErrorPersonalizado
    }

    const data: RespuestaCatalogo = await response.json();
    return data; // Retorna los datos obtenidos
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error; // Retorna el error para manejarlo externamente
  }
}

export async function getCatalogoTipoAccion(
  consultaCatalogo: ConsultaCatalogo
) {
  try {
    const response = await fetch(`${API_ROUTES.catalogos}/tipo_accion`, {
      method: "POST", // Especifica que es un POST
      headers: {
        "Content-Type": "application/json", // Indica que el cuerpo de la solicitud es JSON
      },
      body: JSON.stringify(consultaCatalogo), // Reemplaza esto con los datos que quieres enviar
    });

    if (!response.ok) {
      const errorData = await response.json();
      // eslint-disable-next-line no-throw-literal
      throw {
        correcto: errorData.success,
        mensaje: errorData.message,
        data: null,
      }  as ErrorPersonalizado
    }

    const respuesta = await response.json();


    const data: RespuestaCatalogo = {
      correcto: respuesta.success,
      mensaje: respuesta.message,
      data: respuesta.data,
    }
    return data; // Retorna los datos obtenidos
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error; // Retorna el error para manejarlo externamente
  }
}

export async function getCatalogoTipoContrato(
  consultaCatalogo: ConsultaCatalogo
) {
  try {
    const response = await fetch(`${API_ROUTES.catalogos}/tipo_contrato`, {
      method: "POST", // Especifica que es un POST
      headers: {
        "Content-Type": "application/json", // Indica que el cuerpo de la solicitud es JSON
      },
      body: JSON.stringify(consultaCatalogo), // Reemplaza esto con los datos que quieres enviar
    });

    if (!response.ok) {
      const errorData = await response.json();
      // eslint-disable-next-line no-throw-literal
      throw {
        correcto: errorData.success,
        mensaje: errorData.message,
        data: null,
      }  as ErrorPersonalizado
    }

    const data: RespuestaCatalogo = await response.json();
    return data; // Retorna los datos obtenidos
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error; // Retorna el error para manejarlo externamente
  }
}


export async function getCatalogoUsuarioPorCago(
  consultaCatalogo: ConsultaCatalogo
) {
  try {
    const response = await fetch(`${API_ROUTES.catalogos}/usuario_por_cargo`, {
      method: "POST", // Especifica que es un POST
      headers: {
        "Content-Type": "application/json", // Indica que el cuerpo de la solicitud es JSON
      },
      body: JSON.stringify(consultaCatalogo), // Reemplaza esto con los datos que quieres enviar
    });

    if (!response.ok) {
      const errorData = await response.json();
      // eslint-disable-next-line no-throw-literal
      throw {
        correcto: errorData.success,
        mensaje: errorData.message,
        data: null,
      }  as ErrorPersonalizado
    }

    const data: RespuestaCatalogo = await response.json();
    return data; // Retorna los datos obtenidos
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error; // Retorna el error para manejarlo externamente
  }
}
