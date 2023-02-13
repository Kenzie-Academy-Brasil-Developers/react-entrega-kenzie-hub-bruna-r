import Logo from "../../assets/Logo.svg";
import { LoginForm } from "../../components/LoginForm";
import { StyledHeaderLoginPage } from "./style";

export function LoginPage({ loginUser }) {
  return (
    <>
      <StyledHeaderLoginPage>
        <img src={Logo} />
      </StyledHeaderLoginPage>
      <LoginForm loginUser={loginUser} />
    </>
  );
}
