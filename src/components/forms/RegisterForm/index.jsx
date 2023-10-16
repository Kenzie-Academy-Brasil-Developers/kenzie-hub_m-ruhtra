import api from "../../../services";

import { useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";

import { useNavigate } from "react-router-dom";
import { registerFormSchema } from "./registerForm.schema";

import Input from "../Input";
import InputPassword from "../InputPassword";
import Select from "../Select";
import styles from "./style.module.scss";

import { toast } from "react-toastify";

export const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const userRegister = async (payLoad) => {
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

  const submit = (payLoad) => {
    userRegister(payLoad);
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit(submit)}>
      <Input
        label="Nome"
        id="name"
        type="text"
        placeholder="Digite aqui seu nome"
        error={errors.name}
        {...register("name")}
      />

      <Input
        label="Email"
        id="email"
        type="email"
        placeholder="Digite aqui seu email"
        error={errors.email}
        {...register("email")}
      />

      <InputPassword
        label="Senha"
        placeholder="Digite aqui sua senha"
        error={errors.password}
        {...register("password")}
      />

      <InputPassword
        label="Confirmar Senha"
        placeholder="Digite novamente sua senha"
        error={errors.confirmPassword}
        {...register("confirmPassword")}
      />

      <Input
        label="Bio"
        id="bio"
        type="text"
        placeholder="Fale sobre você"
        error={errors.bio}
        {...register("bio")}
      />

      <Input
        label="Contato"
        id="contact"
        type="text"
        placeholder="Opção de contato"
        error={errors.contact}
        {...register("contact")}
      />

      <Select
        label="Selecionar módulo"
        id="course_module"
        error={errors.course_module}
        {...register("course_module")}
      >
        <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
        <option value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
        <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
        <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
      </Select>

      <div className={styles.btnRegisterFormContainer}>
        <button className="btn primary" type="submit" disabled={loading}>Cadastrar</button>
      </div>
    </form>
  );
}; 
