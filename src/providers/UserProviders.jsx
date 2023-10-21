import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/index";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const userLogout = () => {
    setUser(null);
    navigate("/");
    localStorage.removeItem("@TOKEN");
  };

  const userLogin = async (payLoad, setLoading) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", payLoad);
      setUser(data.user);
      localStorage.setItem("@TOKEN", data.token);
      navigate("/dashboard");
    } catch (error) {
      if (error.response?.data.message === "invalid email" || "Incorrect email / password combination") {
        toast.error("email/senha incorreto");
      }
    } finally {
      setLoading(false);
    };
  };

  const userRegister = async (payLoad, setLoading) => {
    try {
      setLoading(true);
      await api.post("/users", payLoad);
      navigate("/");
      toast.success("Conta criada com sucesso!");
    } catch (error) {
      if (error.response?.data.message === "Email already exists") {
        toast.error("Usuário já cadastrado!");
      } else if (error.response?.data.message !== "Email already exists"){
        toast.error("Ops! Algo deu errado.");
      }    
    } finally {
      setLoading(false);
    };
  };

  return (
    <UserContext.Provider value={{ user, userLogin, userLogout, userRegister }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };