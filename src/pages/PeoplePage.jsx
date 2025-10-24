import { useEffect, useState } from "react";
import PeopleList from "../components/people/PeopleList";
import axios from "axios";
import FilterInput from "../components/people/FilterInput";
import AddPersonButton from "../components/people/AddPersonButton";

function PeoplePage() {
    const [people, setPeople] = useState([]);
    const [places, setPlaces] = useState([]);
    const [loadingPlaces, setLoadingPlaces] = useState(false);

    async function fetchPeople(name) {
        try {
            let baseLink = "http://localhost:8000/api/people/"
            if (name != '') baseLink += '?name=' + name
            const response = await axios.get(baseLink);
            setPeople(response.data);
        }
        catch (error) {
            console.error("Could not fetch people: ", error)
        }
    }

    const fetchAllPlaces = async () => {
        try {
            setLoadingPlaces(true)
            const response = await axios.get("http://localhost:8000/api/place/");
            setPlaces(response.data);
            setLoadingPlaces(false);
        }
        catch (error) {
            console.error("Could not fetch places: ", error);
        }
    }

    const updatePerson = (updatedPerson) => {
        setPeople((oldPeople) => 
            oldPeople.map((p) => p.id === updatedPerson.id ? updatedPerson : p)
        );
    }

    const addPerson = (person) => {
        setPeople((oldPeople) => [...oldPeople, person])
    }

    useEffect(() => {
        fetchPeople('');
    }, [])

    const handleInputChange = (value) => {
        setTimeout(() => {console.log(value)}, 300)
        fetchPeople(value);
    }

    const handleDeletedPerson = (personId) => {
        setPeople((oldPeople) => oldPeople.filter((p) => p.id != personId))
    }

    return (
        <div className="min-h-screen w-screen h-screen flex bg-slate-500 justify-center p-6">
            <div className="space-y-4">
                <h1 className="text-white p-6">Página de Pessoas</h1>
                <div className="flex space-x-3">
                    <FilterInput handleInputChange={handleInputChange}/>
                    <AddPersonButton places={places} onOpen={fetchAllPlaces} onAdd={addPerson}/>
                </div>
                
                <PeopleList onDelete={handleDeletedPerson} people={people} places={places} onEdit={fetchAllPlaces} loadingPlaces={loadingPlaces} onUpdatePerson={updatePerson}/>
            </div>
        </div>
    )
}

export default PeoplePage;