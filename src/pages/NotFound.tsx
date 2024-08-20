import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" component="div" color="text.primary">
        404
      </Typography>
      <Typography variant="h5" component="div" color="text.secondary">
        Oops! Page Not Found
      </Typography>
      <Typography
        variant="body1"
        component="div"
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        Go to Homepage
      </Button>
    </Box>
  );
};

export default NotFoundPage;
