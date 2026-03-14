import AuthLayout from "../../layouts/AuthLayout";
import RegisterForm from "../../features/auth/components/Form/RegisterForm";

function RegisterPage(){
    return(
        <AuthLayout>
            <RegisterForm />
        </AuthLayout>
    );
}

export default RegisterPage;