import React from 'react'
import Example1 from './StatesWithCBC/Example1'
import CounterApp from './StatesWithCBC/CounterApp'
import FBCExample1 from './statesWithFBC/FBCExample1'
import CounterWithFBC from './statesWithFBC/CounterWithFBC'

const App = () => {
  return (
    <div>
        {/* <Example1/>
        <CounterApp/>
        <FBCExample1/> */}
      <CounterWithFBC/>
    </div>
  )
}

export default App