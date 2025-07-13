import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import AdminDashboard from "./pages/admin";
import { UserProvider, useUser } from "./context/UserContext";

// Inline PublicRoute Component
const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useUser();
  return isAuthenticated ? <Navigate to="/admin" replace /> : children;
};

// Inline PrivateRoute Component
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useUser();
  const location = useLocation();
  return isAuthenticated ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export function App() {
  return (
    <UserProvider>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/admin/*"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </UserProvider>
  );
}
