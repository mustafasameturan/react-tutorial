import { useField, ErrorMessage } from "formik";

function InputNumber({ label, ...props}){    
    const [field] = useField(props); // meta - helpers

    return(
        <label>
            <div>{label}</div>
            <input type="number" {...field} {...props} />
            <ErrorMessage name={field.name} component="small" className="validation" />
        </label>
    )
}   

export default InputNumber;