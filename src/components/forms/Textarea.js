import { useField } from "formik";

function Textarea({ label, ...props }){

    const [field] = useField(props)

    return(
        <label>
            <div>{label}</div>
            <textarea rows="2" cols="21" 
                {...field} {...props}
            />
        </label>
    )
}

export default Textarea;