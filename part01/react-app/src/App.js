import {useState} from "react"

const Button = (props) => {
    return <button onClick={props.onClick}>
        {props.text}
    </button>
}

const App = () => {
    const [value, setValue] = useState(10)

    const hello = (output) => () => console.log('hello world, ' + output)

    const setToValue = (value) => () => setValue(value)

    return (
        <div>
            {value}
            <Button onClick={setToValue(1)} text="1"/>
            <Button onClick={setToValue(100)} text="1"/>
            <Button onClick={setToValue(10000)} text="1"/>
            <Button onClick={setToValue(value + 1)} text="1"/>
        </div>
    )
}

export default App;