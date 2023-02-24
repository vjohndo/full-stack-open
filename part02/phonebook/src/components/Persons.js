const Persons = ({ personsToShow }) => {
    return (
    <div>
        {personsToShow.map(({ name, number }) =>
            <p key={number}>
                {name} {number}
            </p>
        )}
    </div>
    )
}

export default Persons