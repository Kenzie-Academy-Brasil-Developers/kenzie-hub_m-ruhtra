import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { editTechFormSchema } from "./editTechForm.schema";

import { useContext } from "react";

import { TechContext } from "../../../providers/TechProviders";
import Select from "../Select";

export const EditTechForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(editTechFormSchema),
  });

  const { editTech, editingTech, setEditingTech } = useContext(TechContext);

  const submit = (payLoad) => {
    editTech(payLoad);
    setEditingTech(null);
    reset();
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit(submit)}>
      <div className="inputContainer">
        <label className="headline label" htmlFor="title">Nome</label>
        <input className="disabled"
          label="Nome"
          id="title"
          type="text"
          disabled="disabled"
          defaultValue={editingTech.title}
        />
      </div>

      <Select
        label="Selecionar status"
        id="status"
        defaultValue={editingTech.status}
        error={errors.status}
        {...register("status")}
      >
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </Select>

      <div className="btnFormContainer">
        <button 
          className="btn primary" 
          type="submit"
        >Salvar Alterações</button>
      </div>

    </form>
  );
};
