import { useState } from 'react';
import AuthButton from './Button/AuthButton';
import AuthInput from './Input/AuthInput';
import { registerUser } from '../services/authService.js'
import { Link } from 'react-router-dom';

function RegisterForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        userName: '',
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await registerUser(formData)
    }

    const handleChange = (e) => {
        if (e.target.id == "nameInput") {
            setFormData({ ...formData, fullName: e.target.value });
        }
        else if (e.target.id == "emailInput") {
            setFormData({ ...formData, email: e.target.value });
        }
        else if (e.target.id == "usernameInput") {
            setFormData({ ...formData, userName: e.target.value });
        }
        else if (e.target.id == "passwordInput") {
            setFormData({ ...formData, password: e.target.value });
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white py-16 px-8 shadow-2xs rounded-lg border border-[#ECF0F5] w-full max-w-96">
            <div className="flex flex-col gap-4">
                <AuthButton style={"bg-white border border-[#ECF0F5] text-[#5D6778] "}>Sign up with Google</AuthButton>
            </div>

            <div className='flex flex-row my-8 w-full items-center mx-auto'>
                <div className='flex-1 border-t border-gray-300' />
                <span className='px-4 text-gray-500'>OR</span>
                <div className='flex-1 border-t border-gray-300' />
            </div>

            <div className='flex flex-col gap-4'>
                <AuthInput id="nameInput" placeholder="Name" onChange={handleChange} />
                <AuthInput id="emailInput" placeholder="Email" type='email' onChange={handleChange} />
                <AuthInput id="usernameInput" placeholder="Username" onChange={handleChange} />
                <AuthInput id="passwordInput" placeholder="Password" type='password' onChange={handleChange} />
            </div>

            <div className='flex mt-6 items-center gap-3'>
                <input type='checkbox' className='w-4.5 h-4.5 border-2 border-[#E2E8F0]' />
                <span className='text-[#5D6778]'>I agree to the Terms and Privacy Policy.</span>
            </div>

            <AuthButton id="submitBtn" type='submit' style="text-white bg-[#0C1024] mt-14 rounded-md" >Register</AuthButton>

            <div className='flex justify-center items-center mt-8'>
                {/* <span className='text-[#5D6778]'>Have an account?<span className='font-bold cursor-pointer'> Log In</span></span> */}
                <span className='text-[#5D6778]'>
                    Have an account?
                    <Link className='font-bold cursor-pointer' to={"/login"}> Log In</Link>
                </span>
            </div>
        </form>
    );
}

export default RegisterForm;