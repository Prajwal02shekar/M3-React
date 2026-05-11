import React from 'react'

const Task1 = () => {

    let principalAmount=Number(prompt("Enter the principal amount"));
    let rateOfInterest=Number(prompt("Enter the rate of interest"));
    let time=Number(prompt("Enter the time in years"));
    let simpleInterest=(principalAmount*rateOfInterest*time)/100;
    console.log(simpleInterest)
  return (
    <div>

        <h1>Simple Interst Calculation</h1>

        <h3>Prioncipal Amount:{principalAmount}</h3>
        <h3>Rate of interst : {rateOfInterest}</h3>
        <h3>Time : {time}</h3>
        <h3>Simple Interest : {simpleInterest}</h3>
    </div>
  )
}

export default Task1


//? Task 2
// Create a React component using JSX that calculates and displays the Car EMI based on user input (purchase price, down payment, interest rate, and loan term). Use prompt() to collect inputs and display the calculated monthly payment along with all the entered details inside a component
