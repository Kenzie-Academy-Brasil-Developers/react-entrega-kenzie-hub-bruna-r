import Logo from "../../assets/Logo.svg";
import { StyledHeaderLoginPage } from "./style";
import { LoginForm } from "../../components/forms/LoginForm";

export function LoginPage() {
  return (
    <>
      <StyledHeaderLoginPage>
        <img src={Logo} />
      </StyledHeaderLoginPage>
      <LoginForm />
    </>
  );
}
