import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface IProps {
  titulo: string;
  opciones?: { subtitulo: string; ruta: string }[];
}

export const Submenu = ({ titulo, opciones }: IProps) => {
  const validacion = opciones && opciones.length > 0;

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!validacion) {
      navigate("/Requerimientos");
    }

    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        sx={{ color: "#6f6f6f" }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={validacion && <KeyboardArrowDownIcon />}
      >
        {titulo}
      </Button>

      {validacion && (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {opciones.map((opcion) => (
            <MenuItem onClick={() => navigate(`/${opcion.ruta}`)}>
              {opcion.subtitulo}
            </MenuItem>
          ))}
        </Menu>
      )}
    </div>
  );
};
