export function Input({ label, type, placeholder, register, error }) {
  return (
    <fieldset>
      {label && <label htmlFor={register.name}>{label}</label>}
      <input
        type={type}
        id={register.name}
        placeholder={placeholder}
        {...register}
      />
      {error && <p>{error.message}</p>}
    </fieldset>
  );
}
