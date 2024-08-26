import React, { useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import AppBarComponent from "./components/CustomAppBar";
import DrawerComponent from "./components/CustomDrawer";
import { DrawerHeader } from "./styles";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBarComponent open={open} handleDrawerOpen={handleDrawerOpen} />
      <DrawerComponent open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main">
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
