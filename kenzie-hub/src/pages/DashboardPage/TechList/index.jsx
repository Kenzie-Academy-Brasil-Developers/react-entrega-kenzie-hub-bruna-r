import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export function TechList({ tech }) {
  const { setModalEditTech } = useContext(TechContext);

  return (
    <li onClick={() => setModalEditTech(tech)}>
      <p>{tech.title}</p>
      <p>{tech.status}</p>
    </li>
  );
}
