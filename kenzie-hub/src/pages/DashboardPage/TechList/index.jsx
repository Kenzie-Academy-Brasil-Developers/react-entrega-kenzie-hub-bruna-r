import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export function TechList({ tech }) {
  const { setModal } = useContext(TechContext);
  return (
    <li onClick={() => setModal(true)}>
      <p>{tech.title}</p>
      <p>{tech.status}</p>
    </li>
  );
}
