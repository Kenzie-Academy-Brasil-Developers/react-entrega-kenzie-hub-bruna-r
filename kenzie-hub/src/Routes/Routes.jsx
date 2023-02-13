import { Route, Routes, useNavigate } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { api } from "../services/api";
import { useState } from "react";
import { toast } from "react-toastify";

export function AppRoutes() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const registerUser = async (formData) => {
    try {
      const response = await api.post("/users", formData);
      toast.success("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const loginUser = async (formData) => {
    try {
      const response = await api.post("/sessions", formData);
      toast.success("Login realizado com sucesso!");
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logOut = () => {
    setUser({});
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/");
  };
  return (
    <Routes>
      <Route path="/" element={<LoginPage loginUser={loginUser} />} />
      <Route
        path="/register"
        element={<RegisterPage registerUser={registerUser} />}
      />
      <Route
        path="/dashboard"
        element={<DashboardPage logOut={logOut} user={user} />}
      />
      <Route path="*" element={<h1>Erro 404 página não encontrada</h1>} />
    </Routes>
  );
}
