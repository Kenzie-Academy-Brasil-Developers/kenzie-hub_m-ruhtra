import api from "../../../services";

import { useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";

import { Link, useNavigate } from "react-router-dom";
import { loginFormSchema } from "./loginForm.schema";

import Input from "../Input";
import InputPassword from "../InputPassword";
import styles from "./style.module.scss";

import { toast } from 'react-toastify';

export const LoginForm = ({ setUser }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const userLogin = async (payLoad) => {
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

  const submit = (payLoad) => {
    userLogin(payLoad);
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit(submit)}>
      <Input
        label="Email"
        id="email"
        type="email"
        placeholder="Digite seu email"
        error={errors.email}
        {...register("email")}
      />

      <InputPassword
        label="Senha"
        placeholder="Digite sua senha"
        error={errors.password}
        {...register("password")}
      />

      <div className={styles.btnLoginFormContainer}>
        <button className="btn primary" type="submit" disabled={loading}>Entrar</button>
        <p className="headline bold">Ainda não possui uma conta?</p>
        <Link className="btn secondary link" to="/register">Cadastre-se</Link>
      </div>
    </form>
  );
};
