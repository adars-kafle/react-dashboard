import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { StyledModuleBox } from "./styles";

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
          <Link key={module.title} to={module.href} style={{ textDecoration: 'none' }}>
            <StyledModuleBox>
              <Typography variant="h5" fontWeight={600}>
                {module.title}
              </Typography>
              <Typography variant="body2" mt={2}>
                {module.description}
              </Typography>
            </StyledModuleBox>
          </Link>
        ))}
      </Stack>
    </Container>
  );
};

export default DashboardPage;
