import Course from "./components/Course"

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        partId: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        partId: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        partId: 3
      },
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App