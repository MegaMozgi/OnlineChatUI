import * as Yup from 'yup'



export const loginInitialValues = {
    username: '',
    password: ''
}


//Registration schema
export const  registerValidationSchema = Yup.object({
    password: Yup.string()
    .min(8, "Password must be at least 8 symbols")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[!@#$%^&*]/, "Password must contain at least one special character")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Password is required"),
    email: Yup.string()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format")
    .required("Email is required"),
    name: Yup.string().min(2, "Password must be at least 2 symbols"),
    username: Yup.string().required("Username is required")
}) 

export const registerInitialValues = {
    name: '',
    email: '',
    username: '',
    password: ''
}