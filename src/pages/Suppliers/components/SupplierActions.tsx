import React from "react";
import { Box, Button } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { type SupplierActionsProps } from "../../../interfaces/ui";

const SupplierActions: React.FC<SupplierActionsProps> = ({ onAddSupplier }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mb: 2 }}>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={onAddSupplier}
      >
        Add Supplier
      </Button>
    </Box>
  );
};

export default SupplierActions;
