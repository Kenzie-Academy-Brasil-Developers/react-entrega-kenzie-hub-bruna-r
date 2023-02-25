import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [modalCreateTech, setModalCreateTech] = useState(false);
  const { techs, setTechs } = useContext(UserContext);
  const [modalEditTech, setModalEditTech] = useState(null);
  const token = localStorage.getItem("@TOKEN");
  const navigate = useNavigate();

  const createCardTech = async (formData) => {
    try {
      const response = await api.post("/users/techs", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTechs([...techs, response.data]);
      toast.success("Tecnologia adicionada com sucesso");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const UpdateTech = async (idTech, formData) => {
    try {
      const response = await api.put(`/users/techs/${idTech}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const newTechs = techs.map((tech) => {
        if (idTech === tech.id) {
          return { ...tech, ...formData };
        } else {
          return tech;
        }
      });

      setTechs(newTechs);
      toast.success("Tecnologia atualizada");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const DeleteTech = async (idTech) => {
    try {
      const response = await api.delete(`/users/techs/${idTech}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Tecnologia Excluida");
      const newTechs = techs.filter((tech) => tech.id !== idTech);
      setTechs(newTechs);
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <TechContext.Provider
      value={{
        createCardTech,
        modalCreateTech,
        setModalCreateTech,
        techs,
        setTechs,
        DeleteTech,
        UpdateTech,
        modalEditTech,
        setModalEditTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
