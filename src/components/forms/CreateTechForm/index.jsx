import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createTechFormSchema } from "./createTechForm.schema";

import Input from "../Input";
import Select from "../Select";

import { useContext } from "react";
import { TechContext } from "../../../providers/TechProviders";

export const CreateTechForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(createTechFormSchema),
  });

  const { createTech, loading } = useContext(TechContext);
  
  const submit = (payLoad) => {
    createTech(payLoad);
    reset();
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit(submit)}>
      <Input
        label="Nome"
        id="title"
        type="text"
        placeholder="Nome da tecnologia"
        error={errors.title}
        {...register("title")}
      />

      <Select
        label="Selecionar status"
        id="status"
        error={errors.status}
        {...register("status")}
      >
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </Select>

      <div className="btnFormContainer">
        <button className="btn primary" type="submit" disabled={loading}>Cadastrar Tecnologia</button>
      </div>
    </form >
  );
};
