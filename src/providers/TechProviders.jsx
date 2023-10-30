import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserProviders";
import { toast } from "react-toastify";

import api from "../services/index";

const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const { techList, setTechList } = useContext(UserContext);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingTech, setEditingTech] = useState(null);

  const [loading, setLoading] = useState(false);


  const createTech = async (payLoad) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      setLoading(true);

      const { data } = await api.post("/users/techs", payLoad, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      setTechList([...techList, data]);
      toast.success("Tecnologia criada com sucesso!");
    } catch (error) {
      if (error.response?.data.message === "User Already have this technology created you can only update it") {
        toast.error("Essa tecnologia já existe!");
      };
    } finally {
      setLoading(false);
      setIsCreateOpen(false);
    };
  };

  const deleteTech = async (techId) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      const newTechList = techList.filter((tech) => tech.id !== techId);

      setTechList(newTechList);
      toast.success("Tecnologia deletada com sucesso!");

    } catch (error) {
      console.log(error);
      if (error) {
        toast.error("Ops, algo deu errado!");
      };
    };
  };

  const editTech = async (payLoad) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      const { data } = await api.put(`/users/techs/${editingTech.id}`, payLoad, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      const newTechList = techList.map((tech) => {
        if (tech.id === editingTech.id) {
          return data;
        } else {
          return tech;
        };
      });

      setTechList(newTechList);
      toast.success("Tecnologia atualizada com sucesso!");
    } catch (error) {
      if (error) {
        toast.error("Ops, Algo deu errado!");
      };
    };
  };

  return (
    <TechContext.Provider
      value={{
        isCreateOpen,
        setIsCreateOpen,
        loading,
        setLoading,
        editingTech,
        setEditingTech,
        createTech,
        deleteTech,
        editTech
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export { TechContext, TechProvider };
