function AuthInput({ placeholder, type = "text", id, onChange }) {


    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none" />
    );
}

export default AuthInput;