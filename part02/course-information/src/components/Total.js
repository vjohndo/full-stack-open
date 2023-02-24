const Total = ({parts}) => {
    const total = parts.reduce( (acc, {exercises}) => acc + exercises, 0)
    return <p><strong>Number of exercises {total}</strong></p>
}

export default Total