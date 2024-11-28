import * as Yup from "yup"

export const loginValidationScehma= Yup.object().shape({
    firstName :Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email:Yup.string().email("Invalid Email").required("Email is required"),
    password:Yup.string().min(3,"Password should be atleast 3 character")
})