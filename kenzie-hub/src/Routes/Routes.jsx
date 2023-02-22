import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { ProtectedRoutes } from "../pages/ProtectedRoutes";
import { TechProvider } from "../providers/TechContext";
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<h1>Erro 404 página não encontrada</h1>} />

      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route
          index
          element={
            <TechProvider>
              <DashboardPage />
            </TechProvider>
          }
        />
      </Route>
    </Routes>
  );
}
