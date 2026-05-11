import React from 'react'

const Task4 = () => {
    let places = [
        {
            id: 1,
            Place_name: "Mysore",
            place_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
            place_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhm10csNfXPNmB2CiVcaQm44P-LJfvEelgeg&s"
        },
        {
            id: 2,
            Place_name: "Delhi",
            place_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
            place_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7bcWbn3Mxt0XNrsFFC_zlnOhINxgz_iQ9A&s"
        },
        {
            id: 3,
            Place_name: "Hyderabad",
            place_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
            place_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsO5IzAye7aWsay0KZyv_Y8TlxMYU_dCzEg&s"
        },
        {
            id: 4,
            Place_name: "Chennai",
            place_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
            place_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaf65-5JjTNevomEkYg3ihaMkRzNPi6ldTLA&s"
        }
    ]


    let randomPlace = places[Math.floor(Math.random() * places.length)]
    console.log(randomPlace)
    return (
        <div>
            <h1>{randomPlace.Place_name}</h1>
            <img src={randomPlace.place_image} alt="" />
            <p>{randomPlace.place_Description}</p>
        </div>
    )
}

export default Task4