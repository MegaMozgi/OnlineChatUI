import { Field, ErrorMessage as Error } from "formik";

function Input({ id, name, placeholder, type = "text" }) {
    return (
        <>
            <Field
                id={id}
                name={name}
                placeholder={placeholder}
                type={type}
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none" />
            <Error name={name}>{(error) => <span className="text-red-700">{error}</span>}</Error>
        </>
    );
}

export default Input;