import { SxProps } from "@mui/material";

export const flexEndBox: SxProps = {
  display: "flex",
  justifyContent: "flex-end",
  gap: 2,
  mb: 2,
};

export const tableCellStyle: SxProps = {
  borderRight: "1px solid rgba(224, 224, 224, 1)",
  "&:last-child": {
    borderRight: "none",
  },
};

export const tableProps = {
  tableLayout: "fixed",
};
