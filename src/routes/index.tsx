import React, { ReactElement, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes as RoutesComponent,
  Route,
  Outlet,
} from "react-router-dom";
import { type RoutesConfig } from "../interfaces/types";
import routeConfig from "./routesConfig";
import ErrorBoundary from "../components/ErrorBoundary";
import Loader from "../components/Loading";

const renderRoutes = (routes: RoutesConfig[]): ReactElement[] => {
  return routes.map((route, i) => {
    let element: React.ReactNode;

    if (route.layout) {
      const LayoutElement = route.layout;
      element = (
        <LayoutElement>
          {route.children ? (
            <Outlet />
          ) : route.element ? (
            <route.element />
          ) : null}
        </LayoutElement>
      );
    } else if (route.element) {
      const RouteElement = route.element;
      element = (
        <Suspense fallback={<Loader />}>
          <RouteElement />
        </Suspense>
      );
    } else {
      element = null;
    }

    return (
      <Route key={i} path={route.path} element={element}>
        {route.children && renderRoutes(route.children)}
      </Route>
    );
  });
};

const Routes = () => {
  return (
    <ErrorBoundary>
      <Router>
        <RoutesComponent>{renderRoutes(routeConfig)}</RoutesComponent>
      </Router>
    </ErrorBoundary>
  );
};

export default Routes;
