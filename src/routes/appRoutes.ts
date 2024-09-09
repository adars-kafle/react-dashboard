import { ProtectedRoute } from "../components/ProtectedRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import { type RoutesConfig } from "../interfaces/routes";

import {
  LoginPage,
  SignupPage,
  DashboardPage,
  SuppliersPage,
  NotFoundPage,
} from "../components/LazyComponents";

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
