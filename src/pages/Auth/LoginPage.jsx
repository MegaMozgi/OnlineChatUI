import AuthLayout from "../../features/auth/components/AuthLayout";
import LoginForm from "../../features/auth/components/Form/LoginForm"

function LoginPage(){
    return(
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    );
}

export default LoginPage;