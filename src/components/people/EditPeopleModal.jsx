import axios from "axios";

function EditPeopleModal(props) {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target)
        const obj = {
            "name": data.get('name'),
            "id": props.person.id,
            "place_id": data.get('place')
        }
        try {
            await axios.put("http://localhost:8000/api/people/", obj, 
                {
                    headers: {
                        "Content-type": "application/json"
                    }
                }
            )
        }
        catch (erro) {
            console.error(erro);
        }

        props.onUpdatePerson(obj)

        props.fun()
    }
    
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <form onSubmit={handleSubmit}>
                <div className="bg-white rounded-lg shadow-lg p-6 w-96 space-y-4">
                    <h2 className="text-xl font-semibold text-black mb-4">{props.person.name}</h2>
                    
                    <label htmlFor="name" className="text-black">Nome</label>
                    <input type="text" name="name" id="name" className="p-2 rounded-md w-full border border-gray-700 text-black"  placeholder={props.person.name}></input>
                    <label htmlFor="places" className="text-black">Lugar</label>
                    <select name="place" className="p-2 bg-white rounded-md text-black w-full border border-gray-700" id="places">
                        {props.places.map((place) => (
                            <option key={place.id} value={place.id}>{place.name}</option>
                        ))}
                    </select>
                

                    <div className="flex justify-left space-x-3">
                        <button type='submit'
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                        >
                            Confirmar
                        </button>
                        <button
                            onClick={props.fun}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            </form>
            
        </div>
    )
}

export default EditPeopleModal;