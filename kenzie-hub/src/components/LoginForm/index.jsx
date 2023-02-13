import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormSchema } from "./loginFormSchema";
import { Link } from "react-router-dom";

export function LoginForm({ loginUser }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  const submit = (formData) => {
    loginUser(formData);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2>Login</h2>

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
      <button type="submit">Entrar</button>

      <p>Ainda não possui uma conta?</p>
      <Link to="/register">Cadastre-se</Link>
    </form>
  );
}
