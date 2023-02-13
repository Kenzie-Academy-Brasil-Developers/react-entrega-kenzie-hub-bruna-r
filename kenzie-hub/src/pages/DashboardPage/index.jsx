import Logo from "../../assets/Logo.svg";
import { StyledHeaderPage } from "../../styles/header";
import { StyledSection } from "./style";

export function DashboardPage({ logOut, user }) {
  return (
    <>
      <StyledHeaderPage>
        <img src={Logo} />
        <button onClick={() => logOut()}>Logout</button>
      </StyledHeaderPage>
      <StyledSection>
        <h2>Olá, {user.name}</h2>
        <p>{user.course_module}</p>
      </StyledSection>
    </>
  );
}
