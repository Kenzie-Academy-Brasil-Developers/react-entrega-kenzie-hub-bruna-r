export function Select({ label, register, error }) {
  return (
    <fieldset>
      {label && <label htmlFor={register.name}>{label}</label>}
      <select id={register.name} {...register}>
        <option value="">Selecione o módulo</option>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro Módulo
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo Módulo
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro Módulo
        </option>
        <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
      </select>
      {error && <p>{error.message}</p>}
    </fieldset>
  );
}
