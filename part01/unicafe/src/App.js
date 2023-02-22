import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {

  const calculateAll = () => {
    return good + neutral + bad
  }

  const calculateAverage = () => {
    if (calculateAll() <= 0) {
      return 0.0.toFixed(1)
    }
    const result = (good*1 + bad*-1) / (good + bad + neutral)
    return result.toFixed(1)
  } 

  const calculatePositive = () => {
    if (calculateAll() <= 0) {
      return 0.0.toFixed(1) + "%"
    }
    const result = (good) / (good + bad + neutral) * 100
    return result.toFixed(1) + "%"
  }

  if (calculateAll() === 0) {
    return <p>No feedback given</p>
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={good}/>
            <StatisticLine text="neutral" value={neutral}/>
            <StatisticLine text="bad" value={bad}/>
            <StatisticLine text="all" value={calculateAll()}/>
            <StatisticLine text="average" value={calculateAverage()}/>
            <StatisticLine text="positive" value={calculatePositive()}/>
          </tbody>
        </table>
      </div>
    )
  }
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