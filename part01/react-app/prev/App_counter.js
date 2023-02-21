import { useState } from 'react'

const Header = ({counter}) => <div>{counter}</div>

const Button = ({name, onClick}) => <button onClick={onClick}>{name}</button>

const App = () => {
    const [counter, setCounter] = useState(0)

    console.log("rendering...", counter)

    const increaseByOne = () => {
        console.log(`before ${counter}`)
        setCounter(counter + 1)
    }
    const decreaseByOne = () => {
        console.log(`before ${counter}`)
        setCounter(counter - 1)
    }
    const setToZero = () => {
        console.log(`before ${counter}`)
        setCounter(0)
    }

    return (
        <div>
            <Header counter={counter} />
            <Button name="Plus" onClick={increaseByOne} />
            <Button name="Decrease" onClick={decreaseByOne} />
            <Button name="Zero" onClick={setToZero} />
        </div>
    )
}

export default App