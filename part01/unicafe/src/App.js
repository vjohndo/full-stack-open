import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return <p>{text} {value}</p>
}

const Statistics = ({good, neutral, bad}) => {

  const calculateTotal = () => {
    return good + neutral + bad
  }

  const calculateAverage = () => {
    if (calculateTotal() <= 0) {
      return 0
    }
    
    return (good*1 + bad*-1) / (good + bad + neutral)
  } 

  if (calculateTotal() === 0) {
    return <p>No feedback given</p>
  }

  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={calculateTotal()}/>
      <StatisticLine text="average" value={calculateAverage()}/>
    </div>
  )
}

const Button = ({onClick, text}) => {
  return <button onClick={onClick}>{text}</button>
}

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

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleIncrement(setGood)} text="good" />
      <Button onClick={handleIncrement(setNeutral)} text="neutral" />
      <Button onClick={handleIncrement(setBad)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App