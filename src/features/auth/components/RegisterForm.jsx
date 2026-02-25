import AuthButton from './Button/AuthButton';
import Input from './Input/Input.jsx';
import { registerUser } from '../services/authService.js'
import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { registerInitialValues, registerValidationSchema } from './helper.js';

function RegisterForm() {
    const handleSubmit = async (values) => {
        await registerUser(values)
    }

    return (
        <Formik
            initialValues={registerInitialValues}
            validationSchema={registerValidationSchema}
            onSubmit={handleSubmit}>
            <Form className="bg-white py-16 px-8 shadow-2xs rounded-lg border border-[#ECF0F5] w-full max-w-96">
                <div className="flex flex-col gap-4">
                    <AuthButton style={"bg-white border border-[#ECF0F5] text-[#5D6778] "}>Sign up with Google</AuthButton>
                </div>

                <div className='flex flex-row my-8 w-full items-center mx-auto'>
                    <div className='flex-1 border-t border-gray-300' />
                    <span className='px-4 text-gray-500'>OR</span>
                    <div className='flex-1 border-t border-gray-300' />
                </div>

                <div className='flex flex-col gap-4'>
                    <Input id="nameInput" name="name" placeholder="Name" />
                    <Input id="emailInput" name="email" placeholder="Email" type='email' />
                    <Input id="usernameInput" name="username" placeholder="Username" />
                    <Input id="passwordInput" name="password" placeholder="Password" type='password' />
                </div>

                <div className='flex mt-6 items-center gap-3'>
                    {/* <Input id="termsOfUse" name="termsOfUse" className='w-4.5 h-4.5 border-2 border-[#E2E8F0]' type='checkbox'/> */}
                    <input type='checkbox' className='w-4.5 h-4.5 border-2 border-[#E2E8F0]' />
                    <span className='text-[#5D6778]'>I agree to the Terms and Privacy Policy.</span>
                </div>

                <AuthButton id="submitBtn" type='submit' style="text-white bg-[#0C1024] mt-14 rounded-md" >Register</AuthButton>

                <div className='flex justify-center items-center mt-8'>
                    <span className='text-[#5D6778]'>
                        Have an account?
                        <Link className='font-bold cursor-pointer' to={"/login"}> Log In</Link>
                    </span>
                </div>
            </Form>
        </Formik>
    );
}

export default RegisterForm;