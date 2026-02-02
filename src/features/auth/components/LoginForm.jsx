import { useState } from 'react';
import AuthButton from './Button/AuthButton.jsx';
import AuthInput from './Input/AuthInput.jsx';
import { loginUser } from '../services/authService.js'
import { Link } from 'react-router-dom';


function LoginForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        await loginUser(formData);
    }

    const handleChange = (e) => {
        if (e.target.id == "usernameInput") {
            setFormData({ ...formData, username: e.target.value });
            console.log(formData)
        }
        else if (e.target.id == "passwordInput") {
            setFormData({ ...formData, password: e.target.value });
            console.log(formData)
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
                <AuthInput id="usernameInput" placeholder="Name" onChange={handleChange} />
                <AuthInput id="passwordInput" placeholder="Password" type='password' onChange={handleChange} />
            </div>

            <div className='flex justify-end mt-4'>
                <span>Forgot Password?</span>
            </div>

            <AuthButton id="submitBtn" type='submit' style="text-white bg-[#0C1024] mt-14 rounded-md" >Log in</AuthButton>

            <div className='flex justify-center items-center mt-8'>
                {/* <span className='text-[#5D6778]'>Have an account?<span className='font-bold cursor-pointer'> Sign up</span></span> */}
                <span className='text-[#5D6778]'>
                    Have an account?
                    <Link className='font-bold cursor-pointer' to={"/register"}> Sign up</Link>
                </span>
            </div>
        </form>
    );
}

export default LoginForm;