import * as yup from "yup";

export const addTechFormSchema = yup.object().shape({
  title: yup.string().required("Este campo é obrigratório"),
  status: yup.string().required("Este campo é obrigratório"),
});
