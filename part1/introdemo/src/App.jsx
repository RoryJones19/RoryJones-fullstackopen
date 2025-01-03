const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const App = () => {
  const friends = ['Peter', 'Maya']
  return (
    <>
      <h1>Greetings</h1>
      <Hello name={friends}/>
      <Footer />
    </>
  )
}

export default App