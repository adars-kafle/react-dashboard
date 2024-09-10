import React from "react";
import { useTheme } from "@mui/material/styles";
import { Divider, IconButton, List } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Drawer, DrawerHeader } from "../styles";
import MenuItems from "./MenuItems";
import { type DrawerProps } from "../../../../interfaces/ui";

const DrawerComponent: React.FC<DrawerProps> = ({
  open,
  handleDrawerClose,
}) => {
  const theme = useTheme();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <MenuItems open={open} />
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
