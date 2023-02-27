const Persons = ({ personsToShow }) => {

    if (!personsToShow) {
        return <div></div>
    }

    return (
        <div>
            {personsToShow.map(({name, number}) =>
            <p key={number}>
                {name} {number}
            </p>
            )}
        </div>
    )
}

export default Persons