import Popup from "reactjs-popup";
import EditPeopleModal from "./EditPeopleModal";
import axios from "axios";

function PeopleList(props) {
    async function handleDelete(personId) {
        try {
            await axios.delete("http://localhost:8000/api/people/" + personId + "/");
        } catch (err) {
            console.error(err);
        }

        props.onDelete(personId)
    }

    return (
        <ul className="overflow-y-auto space-y-4 p-6 bg-slate-200 rounded-md">
            {props.people.map((person, index) => (
                <li key={index} className="flex space-x-3">
                    <button className="bg-slate-400 w-full text-left rounded-md text-white">
                        {person.name}
                    </button>
                    <Popup trigger={
                        <button className="text-white">Editar</button>
                    } modal nested
                    onOpen={() => {
                        props.onEdit();
                    }}
                    >
                        {(close) => (
                            <EditPeopleModal person={person} fun={close} places={props.places} onUpdatePerson={props.onUpdatePerson}/>
                        )}
                    </Popup>
                    <button onClick={() => handleDelete(person.id)} className="bg-slate-400 text-left rounded-md text-white">
                        Deletar
                    </button>
                </li>
            ))}
        </ul>
        
    );
}

export default PeopleList;