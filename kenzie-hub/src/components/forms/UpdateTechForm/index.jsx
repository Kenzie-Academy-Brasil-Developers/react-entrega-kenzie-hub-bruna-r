import { updateTechFormSchema } from "./updateTechFormSchema";
import { SelectModal } from "../SelectModal";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input";

export function UpdateTechForm() {
  const { setModal, UpdateTech, DeleteTech, modalEditTech, setModalEditTech } =
    useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(updateTechFormSchema),
    defaultValues: {
      title: modalEditTech.title,
      status: modalEditTech.status,
    },
  });

  const submit = (formData) => {
    UpdateTech(modalEditTech.id, formData);
    setModalEditTech(null);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="HeaderForm">
        <p>Atualizar Tecnologia</p>
        <p onClick={() => setModalEditTech(null)}>X</p>
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
      <div className="ContainerButtonForm">
        <button type="submit">Salvar alterações</button>
        <button
          type="button"
          onClick={() => {
            DeleteTech(modalEditTech.id), setModalEditTech(null);
          }}
        >
          Excluir
        </button>
      </div>
    </form>
  );
}
