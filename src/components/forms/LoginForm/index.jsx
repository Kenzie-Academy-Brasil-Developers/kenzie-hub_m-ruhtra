import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginForm.schema";

import { Link } from "react-router-dom";

import Input from "../Input";
import InputPassword from "../InputPassword";
import styles from "./style.module.scss";

import { UserContext } from "../../../providers/UserProviders";

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const { userLogin } = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const submit = (payLoad) => {
    userLogin(payLoad, setLoading);
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
