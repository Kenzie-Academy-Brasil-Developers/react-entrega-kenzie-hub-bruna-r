import { addTechFormSchema } from "./addTechFormSchema";
import { SelectModal } from "../SelectModal";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input";

export function AddTechForm() {
  const { createCardTech, setModalCreateTech } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(addTechFormSchema),
  });

  const submit = (formData) => {
    createCardTech(formData);
    setModalCreateTech(false);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="HeaderForm">
        <p>Cadastrar Tecnologia</p>
        <p onClick={() => setModalCreateTech(false)}>X</p>
      </div>
      <Input
        type="text"
        label="Nome"
        placeholder="Tecnologia"
        register={register("title")}
        error={errors.title}
      />

      <SelectModal
        label="Selecionar Nível"
        register={register("status")}
        error={errors.status}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}
