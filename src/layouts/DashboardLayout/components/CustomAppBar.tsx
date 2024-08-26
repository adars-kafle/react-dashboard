import React from "react";
import { Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../utils/auth";
import { AppBar } from "../styles";

interface AppBarProps {
  open: boolean;
  handleDrawerOpen: () => void;
}

const AppBarComponent: React.FC<AppBarProps> = ({ open, handleDrawerOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <IconButton color="inherit" onClick={handleLogout}>
          <Typography sx={{ mr: 1 }}>Logout</Typography>
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
