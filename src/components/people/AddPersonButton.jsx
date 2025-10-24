import Popup from "reactjs-popup";
import AddPersonModal from "./AddPersonModal";

function AddPersonButton(props) {
    return( <Popup
        trigger={
            <button className="bg-emerald-600 text-white rounded-md w-auto" >Adicionar</button>
        }
        onOpen={() => {props.onOpen()}}
        modal nested
    >
        {(close) => (
            <AddPersonModal places={props.places} fun={close} onAdd={props.onAdd}/>
        )}
    </Popup>
    )
}

export default AddPersonButton;