import Popup from "reactjs-popup";
import AddPlaceModal from "./AddPlaceModal";

function AddPlaceButton(props) {
    return (
        <Popup
            trigger={
                <button className="rounded-md text-white">Adicionar</button>
            }
        >
            {(close) => (
                <AddPlaceModal fun={close} onAdd={props.onAdd}/>
            )}
        </Popup>
    );
}

export default AddPlaceButton;