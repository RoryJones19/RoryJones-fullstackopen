const Header = (props) => {
  return (
    <div>
      <h1>{props.info.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part name = {props.info.part1} exercises = {props.info.exercises1}></Part>
      <Part name = {props.info.part2} exercises = {props.info.exercises2}></Part>
      <Part name = {props.info.part3} exercises = {props.info.exercises3}></Part>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.info.exercises1 + props.info.exercises2 + props.info.exercises3}</p>
    </div>
  )
}

const App = () => {
  const info = {
    course : 'Half Stack application development',
    part1 : 'Fundamentals of React',
    exercises1 : 10,
    part2 : 'Using props to pass data',
    exercises2 : 7,
    part3 : 'State of a component',
    exercises3 : 14
  }

  return (
    <div>
      <Header info={info} />
      <Content info={info}/>
      <Total info={info}/>
    </div>
  )
}

export default App