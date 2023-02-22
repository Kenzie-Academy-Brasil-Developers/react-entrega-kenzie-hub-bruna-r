import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [techs, setTech] = useState([]);
  const token = localStorage.getItem("@TOKEN");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const loadTechs = async () => {
        try {
          const response = await api.get("/profile", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setTech(...techs, response.data.techs);
          navigate("/dashboard");
        } catch (error) {}
      };
      loadTechs();
    }
  }, []);

  const createCardTech = async (formData) => {
    try {
      const response = await api.post("/users/techs", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTech(...techs, response.data);
      toast.success("Tecnologia adicionada com sucesso");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const UpdateTech = async (idTech, formData) => {
    try {
      const response = await api.put(`/users/techs${idTech}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Tecnologia atualizada");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const DeleteTech = async (idTech) => {
    try {
      const response = await api.delete(`/users/techs${idTech}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Tecnologia Excluida");
      const newTechs = techs.filter((tech) => tech.id === !idTech);
      setTech(newTechs);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <TechContext.Provider
      value={{
        createCardTech,
        modal,
        setModal,
        techs,
        setTech,
        DeleteTech,
        UpdateTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
