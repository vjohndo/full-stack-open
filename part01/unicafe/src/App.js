import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleIncrement = (setter) => {
    return () => setter((prev) => {
      return prev + 1
    })
  }
  
  const calculateTotal = () => {
    return good + neutral + bad
  }

  const calculateAverage = () => {
    if (calculateTotal() <= 0) {
      return 0
    }
    
    return (good*1 + bad*-1) / (good + bad + neutral)
  } 

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleIncrement(setGood)}>good</button>
      <button onClick={handleIncrement(setNeutral)}>neutral</button>
      <button onClick={handleIncrement(setBad)}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {calculateTotal()}</p>
      <p>average {calculateAverage()}</p>
    </div>
  )
}

export default App