import axios from "axios";

function AddPersonModal(props) {
    async function handleSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.target);
        const obj = {
            name: data.get('name'),
            place_id: data.get('place')
        }
        
        obj["place_id"] = (obj["place_id"] == "NULL") ? null : obj["place_id"];

        let newPerson;
        try {
            const response =  await axios.post("http://localhost:8000/api/people/", obj, {
                headers: { "Content-Type": "application/json" },
            });
            newPerson = response.data;
        }
        catch(err) {
            console.error(err);
        }
        
        props.onAdd(newPerson);

        props.fun();
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <form onSubmit={handleSubmit}>
                <div className="bg-white rounded-lg shadow-lg p-6 w-96 space-y-4">
                        <h2 className="text-xl font-semibold text-black mb-4">Adicionar pessoa</h2>
                        <label htmlFor="name" className="text-black">Nome</label>
                        <input name="name" placeholder=" Joãozinho" className="p-1 w-full border border-gray-700 text-black rounded-md"></input>
                        <label htmlFor="place" className="text-black">Lugar</label>
                        <select name="place" className="text-black p-1 border border-gray-700 rounded-md w-full">
                            <option key={0} value={null}>NULL</option>
                            {
                                props.places.map((p, index) => (
                                    <option key={index} value={p.id}>{p.name}</option>
                                ))
                            }
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

export default AddPersonModal;