import React from 'react'

const Task2 = () => {
    let places = [
        {
            id: 1,
            placeName: "Mysore Palace",
            placeImage: "https://www.mysoretourism.org.in/images/v2/places-to-visit/mysore-maharaja-palace-header-mysore-tourism.jpg",
            placeDescription: "Mysore Palace, also known as Amba Vilas Palace, is a historical palace and a royal residence. It is located in Mysore, Karnataka, India. It used to be the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills eastward"
        },
        {
            id: 2,
            placeName: "Bangalore Palace",
            placeImage: "https://karnatakatourism.org/_next/image/?url=https%3A%2F%2Fweb-cms.karnatakatourism.org%2Fwp-content%2Fuploads%2F2025%2F07%2FBangalore-Palace_600-1280x720-1.jpg&w=3840&q=75",
            placeDescription: "Bengaluru Palace is a 19th-century royal palace located in Bengaluru, Karnataka, India. It was commissioned by the Maharaja of Mysore, and was completed in 1874."
        },
        {
            id: 3,
            placeName: "Dishanth Palace",
            placeImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAWnpeo6v5RTbloHNeNIuMDAZHmKXjJJY7Vw&s",
            placeDescription: "Bannur Rd, Mysuru, Harohalli (J), Karnataka 570028"
        }
    ]
    return (
        <div>
            {
                places.map((item) => {
                    console.log(item)
                    return (
                        <>
                            <h1>{item.placeName}</h1>
                            <img src={item.placeImage} alt="" ></img>
                            <p>{item.placeDescription}</p>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Task2