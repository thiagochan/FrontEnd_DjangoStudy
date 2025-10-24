import axios from "axios";
import Popup from "reactjs-popup";
import EditPlaceModal from "./EditPlaceModal";

function PlacesList(props) {
    const filtered = props.places.filter(p => p.name.toLowerCase().includes(props.query.toLowerCase()));

    async function handleDelete(placeId) {
        let url = "http://localhost:8000/api/place/" + placeId + "/"

        try {
            await axios.delete(url);
        }
        catch(err) {
            console.error(err);
        }

        props.onDelete(placeId)
    }

    return (
        <ul className="overflow-y-auto space-y-4 p-6 rounded-md bg-slate-200">
            {
                filtered.map((p, index) => (
                    <li key={index} className="flex space-x-3">
                        <button className="text-left rounded-md w-full text-white">{p.name}</button>
                        <Popup
                            trigger={
                            <button className="text-left rounded-md text-white">Editar</button>
                            }
                        >
                            {(close) => (
                                <EditPlaceModal fun={close} onEdit={props.onEdit} place={p}></EditPlaceModal>
                            )}
                        </Popup>
                        <button onClick={() => {handleDelete(p.id)}} className="text-left rounded-md text-white">Deletar</button>
                    </li>
                ))
            }
        </ul>
    )
}

export default PlacesList;