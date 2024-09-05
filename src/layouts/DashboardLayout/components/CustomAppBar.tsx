import React, { useState } from "react";
import {
  Toolbar,
  Typography,
  IconButton,
  CircularProgress,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";
import { AppBar } from "../styles";
import { useAuth } from "../../../hooks/useAuth";
import { toastError, toastSuccess } from "../../../utils/toaster";
import { AppBarProps } from "../../../interfaces/types";

const AppBarComponent: React.FC<AppBarProps> = ({ open, handleDrawerOpen }) => {
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const { logout } = useAuth();

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
      toastSuccess("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toastError("Failed to logout");
    } finally {
      setIsLoggingOut(false);
    }
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
        <IconButton
          color="inherit"
          onClick={handleLogout}
          disabled={isLoggingOut}
        >
          {isLoggingOut ? (
            <CircularProgress color="inherit" size={24} />
          ) : (
            <>
              <Typography sx={{ mr: 1 }}>Logout</Typography>
              <LogoutIcon />
            </>
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
