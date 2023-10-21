import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema";

import Input from "../Input";
import InputPassword from "../InputPassword";
import Select from "../Select";
import styles from "./style.module.scss";

import { UserContext } from "../../../providers/UserProviders";

export const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const { userRegister } = useContext(UserContext);

  const submit = (payLoad) => {
    userRegister(payLoad, setLoading);
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
