import { useField } from "formik"

function Checkbox({ label, ...props}){

    const[field, meta , helpers] = useField(props) //meta

    const check = () => {
        helpers.setValue(!field.value)
    }

    return(
        <label>
            <input
                type="checkbox"
                onClick={check}
             />
                {/* <FiCheck size={16} />
            </input> */}
            {label}
        </label>
    )
}

export default Checkbox;