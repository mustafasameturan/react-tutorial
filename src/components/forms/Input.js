import { useField, ErrorMessage } from "formik";

function Input({ label, ...props}){    
    const [field] = useField(props); // meta - helpers

    return(
        <label>
            <div>{label}</div>
            <input type="text" {...field} {...props} />
            <ErrorMessage name={field.name} component="small" className="validation" />
        </label>
    )
}   

export default Input;