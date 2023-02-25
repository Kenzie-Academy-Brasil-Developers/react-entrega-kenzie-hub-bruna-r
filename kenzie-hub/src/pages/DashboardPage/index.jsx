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
import { TechList } from "./TechList";
import { AddTechForm } from "../../components/forms/AddTechForm";
import { UpdateTechForm } from "../../components/forms/UpdateTechForm";

export function DashboardPage() {
  const { modalEditTech, modalCreateTech, setModalCreateTech } =
    useContext(TechContext);

  const { logOut, user, techs } = useContext(UserContext);

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
              setModalCreateTech(true);
            }}
          >
            +
          </button>
        </div>
        <div>
          {techs.length > 0 ? (
            <ul>
              {techs.map((tech) => (
                <TechList key={tech.id} tech={tech} />
              ))}
            </ul>
          ) : (
            <p>Nenhuma tecnologia cadastrada</p>
          )}
        </div>
      </StyledSectionTecnologyList>
      {modalCreateTech && (
        <Modal>
          <AddTechForm />
        </Modal>
      )}

      {modalEditTech && (
        <Modal>
          <UpdateTechForm />
        </Modal>
      )}
    </>
  );
}
