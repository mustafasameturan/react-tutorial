import { useField, ErrorMessage } from "formik";

function Password({ label, ...props}){    
    const [field] = useField(props); // meta - helpers

    return(
        <label>
            <div>{label}</div>
            <input type="password" {...field} {...props} />
            <ErrorMessage name={field.name} component="small" className="validation" />
        </label>
    )
}   

export default Password;