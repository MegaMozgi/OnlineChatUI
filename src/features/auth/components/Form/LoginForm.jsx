import AuthButton from '../Button/AuthButton.jsx';
import Input from '../Input/Input.jsx';
import { loginUser } from '../../services/authService.js'
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { loginInitialValues, loginValidationSchema } from '../helper.js';


function LoginForm() {
    const handleSubmit = async (values) => {
        await loginUser(values);
    }

    return (
        <Formik
            initialValues={loginInitialValues}
            validationSchema={loginValidationSchema}
            onSubmit={handleSubmit}>
            {({ isValid, dirty }) => (
                <Form className="bg-white py-16 px-8 shadow-2xs rounded-lg border border-[#ECF0F5] w-full max-w-96">
                    <div className="flex flex-col gap-4">
                        <AuthButton style={"bg-white border border-[#ECF0F5] text-[#5D6778]"}>Sign up with Google</AuthButton>
                    </div>

                    <div className='flex flex-row my-8 w-full items-center mx-auto'>
                        <div className='flex-1 border-t border-gray-300' />
                        <span className='px-4 text-gray-500'>OR</span>
                        <div className='flex-1 border-t border-gray-300' />
                    </div>

                    <div className='flex flex-col gap-4'>
                        <Input id="usernameInput" name="username" placeholder="Name" />
                        <Input id="passwordInput" name="password" placeholder="Password" type='password' />
                    </div>

                    <div className='flex justify-end mt-4'>
                        <span>Forgot Password?</span>
                    </div>

                    <AuthButton
                        id="submitBtn"
                        type='submit' 
                        disabled={!(isValid && dirty)}
                        style={`text-white mt-14 rounded-md ${!(isValid && dirty) ? 'bg-[#E2E8F0]' : 'bg-[#0C1024]'}`}>Log in</AuthButton>

                    <div className='flex justify-center items-center mt-8'>
                        <span className='text-[#5D6778]'>
                            Have an account?
                            <Link className='font-bold cursor-pointer' to={"/register"}> Sign up</Link>
                        </span>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default LoginForm;