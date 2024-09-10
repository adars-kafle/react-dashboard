import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import { menuItems } from "../../../../constants/dashboardMenuItems";

const MenuItems: React.FC<{ open: boolean }> = ({ open }) => {
  const location = useLocation();
  const theme = useTheme();

  return (
    <>
      {menuItems.map((item) => (
        <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            component={Link}
            to={item.path}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
              backgroundColor:
                location.pathname === item.path
                  ? theme.palette.action.selected
                  : "inherit",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
};

export default MenuItems;
