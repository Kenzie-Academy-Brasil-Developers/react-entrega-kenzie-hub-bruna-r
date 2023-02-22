import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
  name: yup.string().required("Este campo é obrigratório"),
  email: yup
    .string()
    .required("Este campo é obrigratório")
    .email("O email digitado é inválido"),
  password: yup
    .string()
    .required("Este campo é obrigratório")
    .min(8, "A senha precisa ter pelo menos 8 caracteres")
    .matches(/[a-zA-Z]/, "A senha deve conter letras")
    .matches(/([0-9])/, "A senha deve conter números")
    .matches(/(\W|_)/, "A senha de conter pelo menos um caracter especial"),
  confirmPassword: yup
    .string()
    .required("Este campo é obrigratório")
    .oneOf([yup.ref("password")], "A senha precisa ser igual"),
  bio: yup.string().required("Este campo é obrigratório"),
  contact: yup.string().required("Este campo é obrigratório"),
});
