

import { ConsultaCatalogo, ConsultaCatalogoDocumentos } from "../model/request/catalogos.request.tsx";
import { RespuestaCatalogo, RespuestaCatalogoDocumentos, RespuestaCatalogoExtArchivo, RespuestaCatalogoPerfilConsultor } from "../model/response/catalogo.response.tsx";
import { ErrorPersonalizado } from "../model/response/error.response.tsx";
import { API_ROUTES } from "../shared/rutasApi.tsx";

export async function getCatalogoAreas(consultaCatalogo: ConsultaCatalogo) {
    try {
        const response = await fetch(`${API_ROUTES.catalogos}/getAreas`, {
            method: 'POST', // Especifica que es un POST
            headers: {
              'Content-Type': 'application/json', // Indica que el cuerpo de la solicitud es JSON
            },
            body: JSON.stringify(consultaCatalogo), // Reemplaza esto con los datos que quieres enviar
          });
          
        if (!response.ok) {
              const errorData = await response.json();
          // eslint-disable-next-line no-throw-literal
          throw {
            mensaje: errorData.message + (errorData.error? " | " + errorData.error: ""),
            codigoEstatus: errorData.statusCode,
            codigoError: errorData.codeError? errorData.codeError : "",
            data: null
          }  as ErrorPersonalizado
        }

        const data: RespuestaCatalogo = await response.json();
        return data; // Retorna los datos obtenidos
    } catch (error) {
      console.error('Error al obtener datos:', error);
      throw error; // Retorna el error para manejarlo externamente
    }
 }



 export async function getCatalogoConsultoras(consultaCatalogo: ConsultaCatalogo) {
    try {
        const response = await fetch(`${API_ROUTES.catalogos}/getConsultoras`, {
            method: 'POST', // Especifica que es un POST
            headers: {
              'Content-Type': 'application/json', // Indica que el cuerpo de la solicitud es JSON
            },
            body: JSON.stringify(consultaCatalogo), // Reemplaza esto con los datos que quieres enviar
          });
          
        if (!response.ok) {
              const errorData = await response.json();
          // eslint-disable-next-line no-throw-literal
          throw {
            mensaje: errorData.message + (errorData.error? " | " + errorData.error: ""),
            codigoEstatus: errorData.statusCode,
            codigoError: errorData.codeError? errorData.codeError : "",
            data: null
          }  as ErrorPersonalizado
        }

        const data: RespuestaCatalogo = await response.json();
        return data; // Retorna los datos obtenidos
    } catch (error) {
      console.error('Error al obtener datos:', error);
      throw error; // Retorna el error para manejarlo externamente
    }
 }

 export async function getCatalogoDocumentos(consultaCatalogoDocumentos: ConsultaCatalogoDocumentos) {
    try {
        const response = await fetch(`${API_ROUTES.catalogos}/getDocumentos`, {
            method: 'POST', // Especifica que es un POST
            headers: {
              'Content-Type': 'application/json', // Indica que el cuerpo de la solicitud es JSON
            },
            body: JSON.stringify(consultaCatalogoDocumentos), // Reemplaza esto con los datos que quieres enviar
          });
          
        if (!response.ok) {
              const errorData = await response.json();
          // eslint-disable-next-line no-throw-literal
          throw {
            mensaje: errorData.message + (errorData.error? " | " + errorData.error: ""),
            codigoEstatus: errorData.statusCode,
            codigoError: errorData.codeError? errorData.codeError : "",
            data: null
          }  as ErrorPersonalizado
        }

        const data: RespuestaCatalogoDocumentos = await response.json();
        return data; // Retorna los datos obtenidos
    } catch (error) {
      console.error('Error al obtener datos:', error);
      throw error; // Retorna el error para manejarlo externamente
    }
 }

 export async function getCatalogoTipoDocumentos(consultaCatalogo: ConsultaCatalogo) {
    try {
        const response = await fetch(`${API_ROUTES.catalogos}/getTipoDocumentos`, {
            method: 'POST', // Especifica que es un POST
            headers: {
              'Content-Type': 'application/json', // Indica que el cuerpo de la solicitud es JSON
            },
            body: JSON.stringify(consultaCatalogo), // Reemplaza esto con los datos que quieres enviar
          });
          
        if (!response.ok) {
              const errorData = await response.json();
          // eslint-disable-next-line no-throw-literal
          throw {
            mensaje: errorData.message + (errorData.error? " | " + errorData.error: ""),
            codigoEstatus: errorData.statusCode,
            codigoError: errorData.codeError? errorData.codeError : "",
            data: null
          }  as ErrorPersonalizado
        }

        const data: RespuestaCatalogo = await response.json();
        return data; // Retorna los datos obtenidos
    } catch (error) {
      console.error('Error al obtener datos:', error);
      throw error; // Retorna el error para manejarlo externamente
    }
 }


 export async function getCatalogoExtenciones(consultaCatalogo: ConsultaCatalogo) {
    try {
        const response = await fetch(`${API_ROUTES.catalogos}/getExtenciones`, {
            method: 'POST', // Especifica que es un POST
            headers: {
              'Content-Type': 'application/json', // Indica que el cuerpo de la solicitud es JSON
            },
            body: JSON.stringify(consultaCatalogo), // Reemplaza esto con los datos que quieres enviar
          });
          
        if (!response.ok) {
              const errorData = await response.json();
          // eslint-disable-next-line no-throw-literal
          throw {
            mensaje: errorData.message + (errorData.error? " | " + errorData.error: ""),
            codigoEstatus: errorData.statusCode,
            codigoError: errorData.codeError? errorData.codeError : "",
            data: null
          }  as ErrorPersonalizado
        }

        const data: RespuestaCatalogoExtArchivo = await response.json();
        return data; // Retorna los datos obtenidos
    } catch (error) {
      console.error('Error al obtener datos:', error);
      throw error; // Retorna el error para manejarlo externamente
    }
 }

 export async function getCatalogoFormaPago(consultaCatalogo: ConsultaCatalogo) {
    try {
        const response = await fetch(`${API_ROUTES.catalogos}/getFormasPago`, {
            method: 'POST', // Especifica que es un POST
            headers: {
              'Content-Type': 'application/json', // Indica que el cuerpo de la solicitud es JSON
            },
            body: JSON.stringify(consultaCatalogo), // Reemplaza esto con los datos que quieres enviar
          });
          
        if (!response.ok) {
              const errorData = await response.json();
          // eslint-disable-next-line no-throw-literal
          throw {
            mensaje: errorData.message + (errorData.error? " | " + errorData.error: ""),
            codigoEstatus: errorData.statusCode,
            codigoError: errorData.codeError? errorData.codeError : "",
            data: null
          }  as ErrorPersonalizado
        }

        const data: RespuestaCatalogo = await response.json();
        return data; // Retorna los datos obtenidos
    } catch (error) {
      console.error('Error al obtener datos:', error);
      throw error; // Retorna el error para manejarlo externamente
    }
 }


 
 export async function getCatalogoModuloAplicativo(consultaCatalogo: ConsultaCatalogo) {
    try {
        const response = await fetch(`${API_ROUTES.catalogos}/getModuloAplicativo`, {
            method: 'POST', // Especifica que es un POST
            headers: {
              'Content-Type': 'application/json', // Indica que el cuerpo de la solicitud es JSON
            },
            body: JSON.stringify(consultaCatalogo), // Reemplaza esto con los datos que quieres enviar
          });
          
        if (!response.ok) {
              const errorData = await response.json();
          // eslint-disable-next-line no-throw-literal
          throw {
            mensaje: errorData.message + (errorData.error? " | " + errorData.error: ""),
            codigoEstatus: errorData.statusCode,
            codigoError: errorData.codeError? errorData.codeError : "",
            data: null
          }  as ErrorPersonalizado
        }

        const data: RespuestaCatalogo = await response.json();
        return data; // Retorna los datos obtenidos
    } catch (error) {
      console.error('Error al obtener datos:', error);
      throw error; // Retorna el error para manejarlo externamente
    }
 }


 export async function getCatalogoPerfilesConsultores(consultaCatalogo: ConsultaCatalogo) {
    try {
        const response = await fetch(`${API_ROUTES.catalogos}/getPerfilesConsultores`, {
            method: 'POST', // Especifica que es un POST
            headers: {
              'Content-Type': 'application/json', // Indica que el cuerpo de la solicitud es JSON
            },
            body: JSON.stringify(consultaCatalogo), // Reemplaza esto con los datos que quieres enviar
          });
          
        if (!response.ok) {
              const errorData = await response.json();
          // eslint-disable-next-line no-throw-literal
          throw {
            mensaje: errorData.message + (errorData.error? " | " + errorData.error: ""),
            codigoEstatus: errorData.statusCode,
            codigoError: errorData.codeError? errorData.codeError : "",
            data: null
          }  as ErrorPersonalizado
        }

        const data: RespuestaCatalogoPerfilConsultor = await response.json();
        return data; // Retorna los datos obtenidos
    } catch (error) {
      console.error('Error al obtener datos:', error);
      throw error; // Retorna el error para manejarlo externamente
    }
 }


 export async function getCatalogoProyectos(consultaCatalogo: ConsultaCatalogo) {
    try {
        const response = await fetch(`${API_ROUTES.catalogos}/getProyectos`, {
            method: 'POST', // Especifica que es un POST
            headers: {
              'Content-Type': 'application/json', // Indica que el cuerpo de la solicitud es JSON
            },
            body: JSON.stringify(consultaCatalogo), // Reemplaza esto con los datos que quieres enviar
          });
          
        if (!response.ok) {
              const errorData = await response.json();
          // eslint-disable-next-line no-throw-literal
          throw {
            mensaje: errorData.message + (errorData.error? " | " + errorData.error: ""),
            codigoEstatus: errorData.statusCode,
            codigoError: errorData.codeError? errorData.codeError : "",
            data: null
          }  as ErrorPersonalizado
        }

        const data: RespuestaCatalogo = await response.json();
        return data; // Retorna los datos obtenidos
    } catch (error) {
      console.error('Error al obtener datos:', error);
      throw error; // Retorna el error para manejarlo externamente
    }
 }

 export async function getCatalogoTipoAccion(consultaCatalogo: ConsultaCatalogo) {
    try {
        const response = await fetch(`${API_ROUTES.catalogos}/getTipoAccion`, {
            method: 'POST', // Especifica que es un POST
            headers: {
              'Content-Type': 'application/json', // Indica que el cuerpo de la solicitud es JSON
            },
            body: JSON.stringify(consultaCatalogo), // Reemplaza esto con los datos que quieres enviar
          });
          
        if (!response.ok) {
              const errorData = await response.json();
          // eslint-disable-next-line no-throw-literal
          throw {
            mensaje: errorData.message + (errorData.error? " | " + errorData.error: ""),
            codigoEstatus: errorData.statusCode,
            codigoError: errorData.codeError? errorData.codeError : "",
            data: null
          }  as ErrorPersonalizado
        }

        const data: RespuestaCatalogo = await response.json();
        return data; // Retorna los datos obtenidos
    } catch (error) {
      console.error('Error al obtener datos:', error);
      throw error; // Retorna el error para manejarlo externamente
    }
 }


 export async function getCatalogoTipoContrato(consultaCatalogo: ConsultaCatalogo) {
    try {
        const response = await fetch(`${API_ROUTES.catalogos}/getTipoContrato`, {
            method: 'POST', // Especifica que es un POST
            headers: {
              'Content-Type': 'application/json', // Indica que el cuerpo de la solicitud es JSON
            },
            body: JSON.stringify(consultaCatalogo), // Reemplaza esto con los datos que quieres enviar
          });
          
        if (!response.ok) {
              const errorData = await response.json();
          // eslint-disable-next-line no-throw-literal
          throw {
            mensaje: errorData.message + (errorData.error? " | " + errorData.error: ""),
            codigoEstatus: errorData.statusCode,
            codigoError: errorData.codeError? errorData.codeError : "",
            data: null
          }  as ErrorPersonalizado
        }

        const data: RespuestaCatalogo = await response.json();
        return data; // Retorna los datos obtenidos
    } catch (error) {
      console.error('Error al obtener datos:', error);
      throw error; // Retorna el error para manejarlo externamente
    }
 }