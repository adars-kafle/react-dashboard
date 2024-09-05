import React from "react";
import { Box, CircularProgress, CircularProgressProps } from "@mui/material";
import { styles } from "./styles";

const Loader: React.FC<CircularProgressProps> = (props) => {
  return (
    <Box sx={styles.box}>
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={styles.circularProgressFirst}
        {...props}
      />
      <CircularProgress
        variant="determinate"
        sx={styles.circularProgressSecond}
        {...props}
      />
    </Box>
  );
};

export default Loader;
