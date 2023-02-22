import { useContext, useState } from "react";
import Logo from "../../assets/Logo.svg";
import { UserContext } from "../../providers/UserContext";
import { StyledHeaderPage } from "../../styles/header";
import { Modal } from "../../components/Modal";
import {
  StyledSection,
  StyledSectionTecnologyList,
} from "../../pages/DashboardPage/style";
import { TechContext } from "../../providers/TechContext";
import { AddTechForm } from "../../components/forms/AddTechForm";
import { TechList } from "./TechList";

export function DashboardPage() {
  const { modal, setModal, techs } = useContext(TechContext);
  const { logOut, user } = useContext(UserContext);
  console.log(techs);
  return (
    <>
      <StyledHeaderPage>
        <img src={Logo} />
        <button onClick={() => logOut()}>Sair</button>
      </StyledHeaderPage>
      <StyledSection>
        <div>
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </div>
      </StyledSection>
      <StyledSectionTecnologyList>
        <div>
          <h2>Tecnologias</h2>
          <button
            className="BtnAddTech"
            onClick={() => {
              setModal(true);
            }}
          >
            +
          </button>
        </div>
        {techs.length > 0 && (
          <ul>
            {techs.map((tech) => (
              <TechList key={tech.id} tech={tech} />
            ))}
          </ul>
        )}
      </StyledSectionTecnologyList>
      {modal && <Modal />}
    </>
  );
}
