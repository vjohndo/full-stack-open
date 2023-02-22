import { useState } from "react"

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                Click on the button
            </div>
        )
    } 

    return (
        <div>
            Button press history: {props.allClicks.join(", ")}
        </div>
    )
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

const App = () => {
    const [clicks, setClicks] = useState({
        left: 0, right: 0
    })
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat("L"))
        setClicks((prev) => ({
            ...prev,
            left: prev.left + 1
        }))
    }

    const handleRightClick = () => {
        setAll([...allClicks, "R"])
        setClicks({ ...clicks, right: clicks.right + 1})
    }

    return (
        <div>
            {clicks.left}
            <Button handleClick={handleLeftClick} text='left' />
            <Button handleClick={handleRightClick} text='right' />
            {clicks.right}
            <History allClicks={allClicks}/>
        </div>
    )
}

export default App