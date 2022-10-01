import { useField } from "formik";

function Input({ label, ...props}){    
    const [field] = useField(props); // meta - helpers

    return(
        <label>
            <div>{label}</div>
            <input type="text" {...field} {...props} />
        </label>
    )
}   

export default Input;