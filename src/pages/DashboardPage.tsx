import React from "react";
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

type ModulesProps = {
  title: string;
  description: string;
  href: string;
};

const modules: ModulesProps[] = [
  {
    title: "Suppliers",
    description: "Manage the suppliers for the system.",
    href: "/suppliers",
  },
  {
    title: "Users",
    description: "Manage the users in the system.",
    href: "/users",
  },
];

const DashboardPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" fontWeight={600} mb={4}>
        Welcome to the Dashboard
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        alignItems="stretch"
      >
        {modules.map((module) => (
          <Box
            key={module.title}
            component={Link}
            to={module.href}
            sx={{
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
            }}
          >
            <Typography variant="h5" fontWeight={600}>
              {module.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" mt={2}>
              {module.description}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default DashboardPage;
