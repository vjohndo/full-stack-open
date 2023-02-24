const Filter = ({nameFilter, handleFilter}) => {
    return (
        <form>
            filter shown with <input value={nameFilter} onChange={handleFilter}/>
        </form>
    )   
}

export default Filter