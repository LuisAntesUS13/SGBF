import React, { useState } from "react";

interface Estatus {
  idStatus: number;
  nombre: string;
  activo: boolean;
  total: number;
}

interface Props {
  listadoEstatus: Estatus[];
  onSeleccionar: (id: number) => void; // Función de callback para manejar la selección
}

export const ListaEstados: React.FC<Props> = ({
  listadoEstatus,
  onSeleccionar,
}) => {
  const [estatus, setEstatus] = useState<Estatus[]>(listadoEstatus);

  const cambioSeleccion = (id: number) => {
    const nuevosEstatus = estatus.map((item) => ({
      ...item,
      activo: item.idStatus === id,
    }));
    setEstatus(nuevosEstatus);
    onSeleccionar(id); // Llama al callback cuando se selecciona un estatus
  };

  return (
    <ul className="nav nav-underline">
      {estatus.map((item) => (
        <li
          className="nav-item"
          key={item.idStatus}
          onClick={() => cambioSeleccion(item.idStatus)}
        >
          <a
            className={`nav-link ${item.activo ? "active" : ""}`}
            aria-current="page"
          >
            {item.nombre}
            <span className="badge text-bg-light">{item.total}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
