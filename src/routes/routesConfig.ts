import React from "react";

import { ProtectedRoute } from "../components/ProtectedRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import { RoutesConfig } from "../interfaces/types";

const LoginPage = React.lazy(() => import("../pages/Authentication/LoginPage"));
const SignupPage = React.lazy(
  () => import("../pages/Authentication/SignupPage")
);
const DashboardPage = React.lazy(() => import("../pages/Dashboard"));
const SuppliersPage = React.lazy(() => import("../pages/Suppliers"));
const NotFoundPage = React.lazy(() => import("../pages/NotFound"));

// Define route configuration
const routeConfig: RoutesConfig[] = [
  { path: "/login", element: LoginPage },
  { path: "/signup", element: SignupPage },
  {
    layout: ProtectedRoute,
    children: [
      {
        layout: DashboardLayout,
        children: [
          { path: "/", element: DashboardPage },
          { path: "/suppliers", element: SuppliersPage },
        ],
      },
    ],
  },
  { path: "*", element: NotFoundPage },
];

export default routeConfig;
