const Hello = ({name, age}) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }

  return <div>
      <p>Hello, {name}, of {age} </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>

}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a + b);
  return (
    <>
      <p>Hello world, it is {now.toString()}</p>
      <p>{a} plus {b} is {a + b}</p>
      <Hello name="Mike" age="2"/>
      <Hello name="Andrew" age={2}/>
      <Hello name="Alice" age={2+2}/>
    </>
  )
}

export default App;