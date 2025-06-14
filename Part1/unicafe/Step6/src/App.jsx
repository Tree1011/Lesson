import { useState } from 'react'

const Header = () => {
  return(
    <h2>give feedback</h2>
  )
}

const Button = (props) => (
      <button onClick={props.handleClick}>{props.text}</button>
)

const Content = () => {
  return(
    <h2>statistics</h2>
  )
}

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.text} </td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if(props.good === 0 && props.neutral === 0 && props.bad===0){
    return<p>No feedback given</p>;
  }
  return(
    <table> 
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine 
        text="all" 
        value={props.good + props.neutral + props.bad}
      />
      <StatisticLine 
        text="average" 
        value={(props.good - props.bad) / (props.good + props.neutral + props.bad)}
      />
      <StatisticLine 
        text="positive" 
        value={(props.good * 100) / (props.good + props.neutral + props.bad) + "%"}
      />
    </table>
  )
}

const App = () => {
  // save clicks of each bustton to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick =() => {
    setGood(good + 1)
  }

  const neutralClick =() => {
    setNeutral(neutral +1)
  }

  const badClick =() => {
    setBad(bad +1)
  }

  return (
    <div>
      <Header/>
      <Button handleClick={goodClick} text="good"/>
      <Button handleClick={neutralClick} text="neutral"/>
      <Button handleClick={badClick} text="bad"/>
      <Content/>
      <Statistics good = {good} neutral ={neutral} bad ={bad}/>
    </div>
  )
}

export default App