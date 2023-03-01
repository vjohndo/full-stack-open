const Countries = ({countries}) => {
    if (countries === null) {
        return <p>No Countries Found</p>
    } else if (countries.length > 10) {
        return <p>Too many countries, specify another filter</p>
    } else if (countries.length === 1) {

        const country = countries[0]

        return (
            <div>
                <h1>{country.name.common}</h1>
                <p>capital: {country.capital}</p>
                <p>area: {country.area}</p>

                <h2>languages: </h2>
                <ul>
                    {Object.values(country.languages).map(language => {
                        return <li key={language}>{language}</li>
                    })}
                </ul>
                <img src={country.flags.png} />
            </div>
        )
    }

    console.log(countries)

    return (
        <div>
        {countries.map(country => {
                return <p key={country.name.common}>{country.name.common}</p>
            })}
        </div>
    )
}

export default Countries