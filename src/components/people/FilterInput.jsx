function FilterInput({handleInputChange}) {
    return (
        <input className="p-2 border border-white text-black bg-white rounded w-100" 
        placeholder="Digite um nome"
        type="text" onChange={(e) => handleInputChange(e.target.value)}></input>
    )
}

export default FilterInput;