// import React, { Component } from 'react'

// export default class Example1 extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "Ajith",
//             age: 22,
//             address: {
//                 street: "#384",
//                 area: "RR Nagar",
//                 city: "Bangalore",
//                 pincode: 560098
//             },
//             skills: ["HTML", "CSS", "Javascript", "Java", "SQL", "React JS", "Betting"]
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h1>My name is {this.state.name}</h1>
//                 <h1>My age is {this.state.age}</h1>
//                 {/* <h1>My address is {this.state.address}</h1> */}
//                 <p>{this.state.address.street}</p>
//                 <p>{this.state.address.area}</p>
//                 <p>{this.state.address.city}</p>
//                 <p>{this.state.address.pincode}</p>

//                 <p>{
//                     this.state.skills.map((item)=>{
//                         console.log(item)
//                         return(
//                           <li key={item}>{item}</li>
//                         )
//                     })
//                 }</p>

//             </div>
//         )
//     }
// }




//?  Example 2
// import React, { Component } from 'react'

// export default class Example1 extends Component {
//     constructor() {
//         super();
//         this.state = {
//             emp1: {
//                 name: "Ajith",
//                 age: 22,
//                 address: "Ajith Palace",
//                 designation: "Developer"
//             },
//             emp2: {
//                 name: "Dishanth",
//                 age: 21,
//                 address: "Dishanth Palace",
//                 designation: "Tester"
//             }
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Emp 1 Details</h1>

//                 <h3>My name is {this.state.emp1.name}</h3>
//                 <h1>Emp 2 Details</h1>
//                 <h3>My name is {this.state.emp2.name}</h3>


//             </div>
//         )
//     }
// }




//? Update the state object
//? Initializing state objects with state way

import React, { Component } from 'react'

export default class Example1 extends Component {

    state={
        myFavFood:"Masala Dosa"
    }
    handleFood=()=>{
            this.setState({myFavFood:"Veg Biryani"})
    }
  render() {
    return (
      <div>
            <h1>My fav food is {this.state.myFavFood}</h1>
            <button onClick={this.handleFood}>Change Food</button>
      </div>
    )
  }
}
