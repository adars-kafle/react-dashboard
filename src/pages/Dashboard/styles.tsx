import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const StyledModuleBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textDecoration: "none",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
    },
    "& h5": {
        color: theme.palette.primary.main,
    },
    "& p": {
        color: theme.palette.text.secondary,
    },
}));
