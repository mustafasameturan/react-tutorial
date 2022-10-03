import { useField, ErrorMessage } from "formik";

export default function File({ label, ...props}) {
    const [field, meta ,helpers] = useField(props) //meta

    async function fileOpen(){
        try {
            const [fileHandle] = await window.showOpenFilePicker();
            const file = await fileHandle.getFile();
            helpers.setValue(file)
        } catch (e) {
            helpers.setValue('')
        }
    }

    return(
        <div>
            <div>{label}</div>
            <button type="button" onClick={fileOpen} >
                {field.value && 'Dosya Seçildi!'}
                {!field.value && 'Dosya Seç!'}
            </button>
            {field.value && <button onClick={() => helpers.setValue('')}>Dosyayı Kaldır</button>}
            <ErrorMessage name={field.name} component="small" className="validation" />
        </div>
    )
}
