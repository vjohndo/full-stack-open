const Persons = ({ personsToShow }) => {
    
    const output = 
        (!personsToShow) ? 
        <></> : 
        personsToShow.map(({ name, number }) =>
            <p key={number}>
                {name} {number}
            </p>
        )

    return <div>{output}</div>
}

export default Persons