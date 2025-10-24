import { useEffect, useState } from "react";
import PlacesList from "../components/places/PlacesList";
import axios from "axios";
import FilterInput from "../components/people/FilterInput";
import AddPlaceButton from "../components/places/AddPlaceButton";

function PlacesPage() {
    const [places, setPlaces] = useState([]);
    const [query, setQuery] = useState("");

    async function getAllPlaces() {
        try {
            const response = await axios.get("http://localhost:8000/api/place/");
            setPlaces(response.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAllPlaces();
    }, [])

    function handleInputChange(q) {
        setQuery(q);
    }

    function onAdd(place) {
        setPlaces((oldPlaces) => [...oldPlaces, place]);
    }

    function onDelete(placeId) {
        setPlaces((oldPlaces) => oldPlaces.filter((p) => p.id != placeId))
    }

    function onEdit(place) {
        setPlaces((oldPlaces) => oldPlaces.map((p) => p.id == place.id ? place : p))
    }

    return (
        <div className="min-h-screen w-screen h-screen flex bg-slate-500 justify-center p-6">
            <div className="space-y-4">
                
                <h1 className="text-white p-6">Página de Lugares</h1>
                <div className="space-x-3">
                    <FilterInput handleInputChange={handleInputChange}/>
                    <AddPlaceButton onAdd={onAdd}/>
                </div>
                <PlacesList places={places} query={query} onDelete={onDelete} onEdit={onEdit}/>
            </div>
        </div>
    )
}

export default PlacesPage;