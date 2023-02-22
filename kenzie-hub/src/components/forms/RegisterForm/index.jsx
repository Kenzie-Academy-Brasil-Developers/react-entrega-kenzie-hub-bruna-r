import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { Select } from "../Select";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormSchema } from "./registerFormSchema";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

export function RegisterForm() {
  const { registerUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerFormSchema),
  });

  const submit = (formData) => {
    registerUser(formData);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2>Crie sua conta</h2>
      <p>Rápido e grátis, vamos nessa</p>

      <Input
        type="text"
        label="Nome"
        placeholder="Digite seu nome"
        register={register("name")}
        error={errors.name}
      />
      <Input
        type="email"
        label="Email"
        placeholder="Digite seu email"
        register={register("email")}
        error={errors.email}
      />
      <Input
        type="password"
        label="Senha"
        placeholder="Digite sua senha"
        register={register("password")}
        error={errors.password}
      />
      <Input
        type="password"
        label="Conforme sua senha"
        placeholder="Confirme sua senha"
        register={register("confirmPassword")}
        error={errors.confirmPassword}
      />
      <Input
        type="text"
        label="Bio"
        placeholder="Fale sobre você"
        register={register("bio")}
        error={errors.bio}
      />
      <Input
        type="text"
        label="Contato"
        placeholder="Opção de contato"
        register={register("contact")}
        error={errors.contact}
      />

      <Select
        label="Selecionar módulo"
        register={register("course_module")}
        error={errors.course_module}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}
