import { useField, ErrorMessage } from "formik";

function Select({ label, options, ...props}){

    const [field] = useField(props)

    return(
        <label>
            <div>{label}</div>
            <select {...field} {...props}>
            <option value="">Choose</option>
                {options.map((option, key) => (
                    <option value={option.key} key={key}>
                        {option.value}
                    </option>
                ))}
            </select>
            <ErrorMessage name={field.name} component="small" className="validation" />
        </label>
    )
}

export default Select;