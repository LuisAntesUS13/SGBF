import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Tabla.css";

interface TableProps {
  columnas: { header: string; accessor: string }[]; // Definición de las columnas
  datos: { [key: string]: any }[]; // Datos de la tabla
  onRowClick?: (row: { [key: string]: any }) => void;
}
export const Tabla: React.FC<TableProps> = ({
  columnas,
  datos,
  onRowClick,
}) => {
  return (
    <Paper
      className="contenedor-tabla"
      sx={{ width: "100%", overflow: "hidden" }}
    >
      <TableContainer component={Paper} sx={{ maxHeight: 522 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              {columnas.map((columna) => (
                <TableCell
                  key={columna.accessor}
                  sx={{ textAlign: "center", fontWeight: "600" }}
                >
                  {columna.header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {datos.map((row, rowIndex) => (
              <TableRow
                hover
                key={rowIndex}
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  if (onRowClick) {
                    onRowClick(row); // Llama a onRowClick solo si está definido
                  }
                }}
              >
                {columnas.map((columna) => (
                  <TableCell
                    key={columna.accessor}
                    sx={{ textAlign: "center" }}
                  >
                    {row[columna.accessor]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
