import React from "react";
import { Navigate, Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";

const ArtistProtected = () => {
  const { loggedInUser } = useAuth();

  if (!loggedInUser || loggedInUser.role !== "artist") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ArtistProtected;