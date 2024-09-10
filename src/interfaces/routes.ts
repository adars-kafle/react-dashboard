import { ComponentType, LazyExoticComponent } from "react";

type RouteElement =
  | ComponentType<any>
  | LazyExoticComponent<ComponentType<any>>;

export interface RoutesConfig {
  path?: string;
  element?: RouteElement;
  layout?: ComponentType<{ children: React.ReactNode }>;
  children?: RoutesConfig[];
}
