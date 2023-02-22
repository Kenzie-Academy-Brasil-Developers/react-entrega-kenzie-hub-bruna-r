import { AddTechForm } from "../forms/AddTechForm";
import { UpdateTechForm } from "../forms/UpdateTechForm";
import { StyledModal } from "./style";

export const Modal = () => {
  return (
    <StyledModal role={"dialog"}>
      <AddTechForm />
      <UpdateTechForm />
    </StyledModal>
  );
};
