import AuthLayout from "../../features/auth/components/AuthLayout";
import RegisterForm from "../../features/auth/components/RegisterForm";
import { Link } from "react-router-dom";

function RegisterPage(){
    return(
        <AuthLayout>
            <RegisterForm />
        </AuthLayout>
    );
}

export default RegisterPage;