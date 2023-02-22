import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { RegisterForm } from "../../components/forms/RegisterForm";
import { StyledHeaderPage } from "../../styles/header";

export function RegisterPage() {
  return (
    <>
      <StyledHeaderPage>
        <img src={Logo} />
        <Link to="/">Voltar</Link>
      </StyledHeaderPage>
      <RegisterForm />
    </>
  );
}
