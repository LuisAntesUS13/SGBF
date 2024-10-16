
import { ConsultaUsuarioPOrCargo } from "../model/request/usuario.request.tsx";
import { API_ROUTES } from "../shared/rutasApi.tsx";

// export async function getCatalogoAreas(consultaUsuarioPOrCargo: ConsultaUsuarioPOrCargo) {
//     try {
//       const response = await fetch(`${API_ROUTES.usuarios}/porCargo`, {
//         method: "POST", // Especifica que es un POST
//         headers: {
//           "Content-Type": "application/json", // Indica que el cuerpo de la solicitud es JSON
//         },
//         body: JSON.stringify(consultaUsuarioPOrCargo), // Reemplaza esto con los datos que quieres enviar
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
  
//       const data: RespuestaCatalogo = await response.json();
//       return data; // Retorna los datos obtenidos
//     } catch (error) {
//       console.error("Error al obtener datos:", error);
//       throw error; // Retorna el error para manejarlo externamente
//     }
//   }
  