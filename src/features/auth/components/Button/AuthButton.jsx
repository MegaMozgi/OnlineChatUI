function AuthButton({ children, style, onClick, type = "button" }) {
    return (
        <button type={type} onClick={onClick} className={`rounded px-6 py-3 w-full max-w-80 cursor-pointer ${style}`}>
            <span>
                {children}
            </span>
        </button>
    );
}

export default AuthButton;