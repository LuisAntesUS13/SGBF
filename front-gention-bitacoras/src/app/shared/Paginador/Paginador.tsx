import React, { useEffect, useState } from "react";
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import LastPageRoundedIcon from '@mui/icons-material/LastPageRounded';
import FirstPageRoundedIcon from '@mui/icons-material/FirstPageRounded';
import "../../shared/Paginador/Paginador.css";


export const Paginador = ({datos}) => {

  useEffect(() => {
    console.log(datos)

    if(datos.length === 0){
        setPaginaActual(0);
        setTotalRegistros(0);
        setNoRegistrosInicial(0);
        setNoRegistrosFinal(0);
    } else {
        setPaginaActual(datos[0].pagina_actual);
        setTotalRegistros(datos[0].total_registros);
        setNoRegistrosInicial(datos[0].pagina_actual * parseInt(registrosPorPagina) - (parseInt(registrosPorPagina)-1))
        setNoRegistrosFinal(((datos[0].pagina_actual * parseInt(registrosPorPagina)) > datos[0].total_registros) ? datos[0].total_registros : (datos[0].pagina_actual * parseInt(registrosPorPagina)) )
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[datos])

  const [registrosPorPagina, setRegistrosPorPagina] = useState("10");
  const [paginaActual, setPaginaActual] = useState(0);


  const [totalRegistros, setTotalRegistros] = useState(0);
  const [noRegistrosInicial, setNoRegistrosInicial] = useState(0);
  const [noRegistrosFinal, setNoRegistrosFinal] = useState(0);

  const [siguente, setSiguente] = useState(0);
  const [atras, setAtras] = useState(0);
  const [primero, setPrimero] = useState(0);
  const [ultimo, setUltimo] = useState(0);

  const cambioRegistrosPorPagina = (valor:string) => {
    setRegistrosPorPagina(valor)
  };


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
        <div className="circulo" onClick={()=>{}}><FirstPageRoundedIcon/></div>
        <div className="circulo" onClick={()=>{}}><NavigateBeforeRoundedIcon/></div>
        <div className="espacio bajar">{noRegistrosInicial} - {noRegistrosFinal} de {totalRegistros}</div>
        <div className="circulo" onClick={()=>{}}><NavigateNextRoundedIcon/></div>
        <div className="circulo" onClick={()=>{}}> <LastPageRoundedIcon/></div>
    </div>
  </>);
};
