import { useSelector     } from "react-redux";
import modals from "../components/modals"
import { modalClose } from "../components/utils";

function Modal(){

    const { name, data } = useSelector(state => state.modal)
    const modal = modals.find(m => m.name === name)

    return(
        <div className="modal">
            <div className="modal-inner">
                <modal.element close={modalClose} data={data} />
            </div>
        </div>
    )
}

export default Modal;