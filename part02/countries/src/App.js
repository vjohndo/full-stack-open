import './App.css';
import axios from "axios"
import {useEffect, useState} from "react"
import Countries from './components/Countries';

function App() {

  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    if (searchTerm) {
      axios
      .get(`https://restcountries.com/v3.1/name/${searchTerm}`)
      .then(response => {
        if (response.status !== 404) {
          setCountries(response.data)
        } else {
          setCountries([])
        }
      })
      .catch(err => console.log(err))
    }
  },[searchTerm])

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="App">
      <label>find countries</label>
      <div>
        <input value={searchTerm} onChange={handleChange}/>
      </div>
      <Countries countries={countries} />
    </div>
  );
}

export default App;
