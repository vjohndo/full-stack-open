import Part from "./Part"

const Content = ({parts}) => {

    return (
        <div>
            {parts.map(({name, exercises, partId}) => {
                return <Part 
                    key={partId}
                    name={name}
                    exercises={exercises}
                />
            })}
        </div>
    )
}
export default Content