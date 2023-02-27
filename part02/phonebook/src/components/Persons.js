const Persons = ({ personsToShow, onDelete }) => {

    if (!personsToShow) {
        return <div></div>
    }

    return (
        <div>
            {personsToShow.map(({name, number, id}) => (
                <p key={id}>
                    {name} {number} 
                    <button onClick={() => onDelete(id)}>Delete</button>
                </p>
            )
            )}
        </div>
    )
}

export default Persons