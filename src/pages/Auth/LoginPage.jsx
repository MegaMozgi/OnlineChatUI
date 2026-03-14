import AuthLayout from "../../layouts/AuthLayout";
import LoginForm from "../../features/auth/components/Form/LoginForm"

function LoginPage(){
    return(
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    );
}

export default LoginPage;