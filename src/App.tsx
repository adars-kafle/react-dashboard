import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme/theme";

import ProtectedRoute from "./components/ProtectedRoute";

import { LoginPage, SignupPage } from "./pages/Auth";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardPage from "./pages/Dashboard";
import SuppliersPage from "./pages/Suppliers";
import { LoginPage, SignupPage } from "./pages/Auth";
import NotFoundPage from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route element={<ProtectedRoute />}>
            <Route
              element={
                <DashboardLayout>
                  <Outlet />
                </DashboardLayout>
              }
            >
              <Route path="/" element={<DashboardPage />} />
              <Route path="/suppliers" element={<SuppliersPage />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
