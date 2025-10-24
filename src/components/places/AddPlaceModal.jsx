import axios from "axios";

function AddPlaceModal(props) {
    async function handleSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.target);
        let newPlace;
        try {
            const response = await axios.post("http://localhost:8000/api/place/", data);
            newPlace = response.data;
        }
        catch(err) {
            console.error(err);
        }

        props.onAdd(newPlace);

        props.fun();
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <form onSubmit={handleSubmit}>
                <div className="bg-white rounded-lg shadow-lg p-6 w-96 space-y-4">
                        <h2 className="text-xl font-semibold text-black mb-4">Adicionar lugar</h2>
                        <label htmlFor="name" className="text-black">Nome</label>
                        <input name="name" placeholder="Sala de estudos" className="p-1 w-full border border-gray-700 text-black rounded-md"></input>
                        
                        
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

export default AddPlaceModal;