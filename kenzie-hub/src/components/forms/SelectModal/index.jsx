export function SelectModal({ label, register, error }) {
  return (
    <fieldset>
      {label && <label htmlFor={register.name}>{label}</label>}
      <select id={register.name} {...register}>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediario</option>
        <option value="Avançado">Avançado</option>
      </select>
      {error && <p>{error.message}</p>}
    </fieldset>
  );
}
