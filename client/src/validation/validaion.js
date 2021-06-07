import * as Yup from "yup";

export const formValidation = Yup.object({
  productName: Yup.string().required("Required!"),
  description: Yup.string().required("Required!"),
  price: Yup.number().required("Required!"),
  quantity: Yup.number().required("Required"),
  amount: Yup.number().required("Required"),
});

export const initialValues = {
  productName: "",
  description: "",
  price: "",
  quantity: "",
  amount: "",
};
