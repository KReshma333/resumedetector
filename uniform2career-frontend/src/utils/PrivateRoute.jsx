import React from "react";
import { Navigate } from "react-router-dom";
import { getLoggedUser } from "./auth";  // ✅ make sure path is correct

export default function PrivateRoute({ children }) {
  const user = getLoggedUser();
  return user ? children : <Navigate to="/login" replace />;
}
