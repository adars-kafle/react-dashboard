import { lazyLoad } from "../../utils/lazyLoad";

export const LoginPage = lazyLoad(
  () => import("../../pages/Authentication/LoginPage")
);
export const SignupPage = lazyLoad(
  () => import("../../pages/Authentication/SignupPage")
);
export const DashboardPage = lazyLoad(() => import("../../pages/Dashboard"));
export const SuppliersPage = lazyLoad(() => import("../../pages/Suppliers"));
export const NotFoundPage = lazyLoad(() => import("../../pages/NotFound"));
