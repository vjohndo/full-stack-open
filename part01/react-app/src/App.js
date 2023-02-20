const Hello = (props) => {
  console.log(props)
  return <p>Hello, {props.name}, of {props.age} </p>
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
      <p>{{name: "Alistar"}.name}</p>
      <p>{["This is renderable", "So render"]}</p>
    </>
  )
}

export default App;