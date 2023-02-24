const PersonForm = (props) => {
    
    const {newPerson, handleChange, handleSubmit} = props

    return (
    <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newPerson.name} name="name" onChange={handleChange}/>
        </div>
        <div>
          number: <input value={newPerson.number} name="number" onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
    )
}

export default PersonForm;