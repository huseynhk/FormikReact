import * as yup from "yup";
const passWordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Basqa bir Email daxil edin")
    .required("Email girmek mecburidir"),

  age: yup
    .number()
    .positive("Musbet Yas daxil edin")
    .integer("Tam reqem daxil edin")
    .required("Yas girmek mecburidir"),

  password: yup
    .string()
    .min(5, "Minimum 5 xarakter olmalidi")
    .matches(passWordRules, {
      message: "En az 1 boyuk 1 kicik ve 1 reqem daxil edin ",
    })
    .required("Password girmek mecburidir"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password uygun gelmir")
    .required("Tekrar Password girmek mecburidir"),
});



export const advanceSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Minimum 3 xarakter olmalidi")
      .required("UserName girmek mecburidir"),
  
      university: yup
      .string()
      .trim()
      .oneOf(['bdu' , 'sdu' , 'ada' , 'ldu'] ,'Univerisitet secin')
      .required("Univerisitet girmek mecburidir"),
  
      isAccepted: yup
      .boolean()
      .oneOf([true], "Qebul edin")
  });
