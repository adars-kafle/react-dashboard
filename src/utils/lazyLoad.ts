import React from "react";

type ImportFunction<P> = () => Promise<{ default: React.ComponentType<P> }>;

export const lazyLoad = <P>(
  importFunc: ImportFunction<P>
): React.LazyExoticComponent<React.ComponentType<P>> => React.lazy(importFunc);
