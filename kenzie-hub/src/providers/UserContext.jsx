import { createContext, useEffect } from "react";
import { api } from "../services/api";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [techs, setTechs] = useState([]);
  const { loading, setLoading } = useState(false);

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
      setTechs(response.data.user.techs);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      navigate("/dashboard");
    } catch (error) {
      localStorage.removeItem("@TOKEN");
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      const AutoLogin = async () => {
        try {
          const response = await api.get("/profile", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(response.data);
          setTechs(response.data.techs);
          navigate("/dashboard");
        } catch (error) {
          localStorage.removeItem("@TOKEN");
        }
      };
      AutoLogin();
    }
  }, []);

  const logOut = () => {
    setUser({});
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    toast.success("Logout realizado com sucesso!");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ registerUser, loginUser, logOut, user, techs, setTechs }}
    >
      {children}
    </UserContext.Provider>
  );
};
