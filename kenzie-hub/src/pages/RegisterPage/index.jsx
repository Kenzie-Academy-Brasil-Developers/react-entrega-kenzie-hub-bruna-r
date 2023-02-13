import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { RegisterForm } from "../../components/RegisterForm";
import { StyledHeaderPage } from "../../styles/header";

export function RegisterPage({ registerUser }) {
  return (
    <>
      <StyledHeaderPage>
        <img src={Logo} />
        <Link to="/">Voltar</Link>
      </StyledHeaderPage>
      <RegisterForm registerUser={registerUser} />
    </>
  );
}
