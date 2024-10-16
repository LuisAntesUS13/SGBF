import React from "react";
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import LastPageRoundedIcon from '@mui/icons-material/LastPageRounded';
import FirstPageRoundedIcon from '@mui/icons-material/FirstPageRounded';
import "../../shared/Paginador/Paginador.css";


export const Paginador = ({ totalRegistros, paginaActual, registrosPorPagina, onCambioPagina }) => {

    const totalPaginas = Math.ceil(totalRegistros / registrosPorPagina);

    const cambioRegistrosPorPagina = (valor) => {
        onCambioPagina(1, Number(valor)); // Reiniciar a la primera página si cambia el número de registros
    };

    const cambioBoton = (tipo) => {
        switch (tipo) {
          case 1: // Primera página
              onCambioPagina(1, registrosPorPagina);
            break;
          case 2: // Página anterior
            if (paginaActual > 1) {
              onCambioPagina(paginaActual - 1, registrosPorPagina);
            }
            break;
          case 3: // Página siguiente
            if (paginaActual < totalPaginas) {
              onCambioPagina(paginaActual + 1, registrosPorPagina);
            }
            break;
          case 4: // Última página
             onCambioPagina(totalPaginas, registrosPorPagina);
            break;
          default:
            break;
        }
      };

      const esPrimeraPagina = paginaActual === 1;
      const esUltimaPagina = paginaActual === totalPaginas;

  return ( <>
    <div className="derecha">
        <div className="espacio">
             Registros por pagina
        </div>
        <div className="espacio"> 
            <select className="form-select form-select-sm" onChange={(e) =>{cambioRegistrosPorPagina(e.target.value)}}  value={registrosPorPagina}>
                <option value="10" selected>10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
        </div>
        <div className={`circulo ${esPrimeraPagina ? 'deshabilitado' : ''}`}  onClick={()=>{!esPrimeraPagina && cambioBoton(2)}}><FirstPageRoundedIcon sx={{ fontSize: 30 }} /></div>
        <div className={`circulo ${esPrimeraPagina ? 'deshabilitado' : ''}`}  onClick={()=>{!esPrimeraPagina && cambioBoton(2)}}><NavigateBeforeRoundedIcon sx={{ fontSize: 30 }} /></div>
        <div className="espacio bajar">{Math.min((paginaActual - 1) * registrosPorPagina + 1, totalRegistros)} </div> -
        <div className="espacio bajar">{Math.min(paginaActual * registrosPorPagina, totalRegistros)} de {totalRegistros}</div>
        <div className={`circulo ${esUltimaPagina ? 'deshabilitado' : ''}`}  onClick={()=>{!esUltimaPagina && cambioBoton(3)}}><NavigateNextRoundedIcon sx={{ fontSize: 30 }} /></div>
        <div className={`circulo ${esUltimaPagina ? 'deshabilitado' : ''}`} onClick={()=>{!esUltimaPagina && cambioBoton(4)}}> <LastPageRoundedIcon sx={{ fontSize: 30 }} /></div>
    </div>
  </>);
};
