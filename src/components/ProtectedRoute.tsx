import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Loader } from "./Loading";

export const ProtectedRoute: React.FC = () => {
  const { user, isLoading, refetchUser } = useAuth();

  useEffect(() => {
    if (!user && !isLoading) {
      refetchUser();
    }
  }, [user, isLoading, refetchUser]);

  if (isLoading) {
    return <Loader size={24} />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
