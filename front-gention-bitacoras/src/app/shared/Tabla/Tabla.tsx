import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";

interface TableProps {
  columnas: { header: string; accessor: string }[]; // Definición de las columnas
  datos: { [key: string]: any }[]; // Datos de la tabla
}
export const Tabla: React.FC<TableProps> = ({ columnas, datos }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
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
            {datos
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => (
                <TableRow hover key={rowIndex} sx={{ cursor: "pointer" }}>
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
        <TablePagination
          rowsPerPageOptions={[5, 10, 50]}
          component="div"
          count={datos.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            display: "flex",
            justifyContent: "center", // Centrar horizontalmente
            alignItems: "center", // Centrar verticalmente
            paddingY: 2, // Añadir un poco de espacio vertical
          }}
        />
      </TableContainer>
    </Paper>
  );
};
