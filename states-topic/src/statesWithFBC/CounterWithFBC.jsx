import React, { useState } from 'react'

const CounterWithFBC = () => {
    let [count,setCount]=useState(0)

    let handleIncremant=()=>{
        setCount(count+1)
    }
    let handleDecrement=()=>{
        setCount(count-1)
    }
    
    let handleReset=()=>{
        setCount(0)
    }
  return (
    <div>
        <h1>Count is :{count}</h1>
        <button onClick={handleIncremant}>Increament</button>
        <button onClick={handleDecrement}>Decremant</button>
        <button onClick={handleReset}>Reset</button>

    </div>
  )
}

export default CounterWithFBC