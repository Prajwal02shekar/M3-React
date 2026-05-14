import { useState } from "react";

const FBCExample1 = () => {
    // let [name, setName] = useState('ajith')
    // let [age, setAge] = useState(22)
    // let [address, setAddress] = useState('Mysore')


    // let handleName = () => {
    //     setName("dishant")
    // }
    // let handleAge = () => {
    //     setAge(23)
    // }
    // let handleAddress = () => {
    //     setAddress("Bangalore")
    // }

    let [details, setDetails] = useState({
        name: "Ajith",
        age: 22,
        addrerss: "Ajith Palace"
    })
    let { name, addrerss, age } = details

    let hanlderDetails = () => {
        setDetails({
            name: "Dishanth",
            age: 23,
            addrerss: "Dishanth Palace"
        })
    }
    return (
        <>
            <h1>My name is : {name}</h1>
            <h1>My age is :  {age}</h1>
            <h1>My address is :  {addrerss}</h1>
            <button onClick={hanlderDetails}>Change Details</button>

            {/* <button onClick={handleName}>Change name</button>
            <button onClick={handleAge}>Change age</button>
            <button onClick={handleAddress}>Change address</button> */}

        </>
    )
}
export default FBCExample1;