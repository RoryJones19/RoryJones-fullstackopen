import { useState } from 'react'

const StatisticLine = (props) => {
  return(
    <p>{props.text} {props.value}</p>
  )
}

const Statistics = (props) => {
  let stats
  if(props.good + props.bad + props.neutral == 0){
    stats = (<div>
      <h1>Statistics</h1>
      <p>No Feedback Given</p>
    </div>)
  }
  else{
    stats = (
      <div>
        <h1>Statistics</h1>
        <StatisticLine text="Good" value={props.good}></StatisticLine>
        <StatisticLine text="Neutral" value={props.neutral}></StatisticLine>
        <StatisticLine text="Bad" value={props.bad}></StatisticLine>
        <StatisticLine text="All" value={props.all}></StatisticLine>
        <StatisticLine text="Average" value={props.average}></StatisticLine>
        <StatisticLine text="Positive" value={props.positive}></StatisticLine>

        <table>
          <tr>
            <td>Good {props.good}</td>
          </tr>
          <tr>
            <td>Neutral {props.neutral}</td>
          </tr>
          <tr>
            <td>Bad {props.bad}</td>
          </tr>
          <tr>
            <td>All {props.all}</td>
          </tr>
          <tr>
            <td>Average {props.average}</td>
          </tr>
          <tr>
            <td>Positive {props.positive}</td>
          </tr>
        </table>
      </div>
    )
  }
  return stats
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    const updatedAll = all + 1
    setAll(updatedAll)
    setAverage((updatedGood - bad) / updatedAll)
    setPositive(updatedGood / updatedAll)
  }

  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    const updatedAll = all + 1
    setAll(updatedAll)
    setAverage((good - updatedBad) / updatedAll)
    setPositive(good / updatedAll)
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    const updatedAll = all + 1
    setAll(updatedAll)
    setAverage((good - bad) / updatedAll)
    setPositive(good / updatedAll)
  }

  return (
    <div>
      <h1>Give FeedBack</h1>
      <Button handleClick={handleGood} text={"Good"}></Button>
      <Button handleClick={handleNeutral} text={"Neutral"}></Button>
      <Button handleClick={handleBad} text={"Bad"}></Button>

      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive}></Statistics>
    </div>
  )
}

export default App