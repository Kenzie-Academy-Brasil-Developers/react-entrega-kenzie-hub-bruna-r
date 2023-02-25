import { AddTechForm } from "../forms/AddTechForm";
import { UpdateTechForm } from "../forms/UpdateTechForm";
import { StyledModal } from "./style";

export const Modal = ({ children }) => {
  return <StyledModal role={"dialog"}>{children}</StyledModal>;
};
