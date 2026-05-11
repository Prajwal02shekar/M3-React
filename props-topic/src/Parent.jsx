// // import { Component } from "react";
// // import Child from "./Child";
// // import Child2 from "./Child2";

// // //! props with CBC
// // export default class Parent extends Component{
// //     render() {
// //       return (
// //         <div>
// //           <h1>Iam a parent  component</h1>
// //           <Child  username="prajwal" age={25}/>
// //           <Child2 user="Ajith" age={20}/>
// //         </div>
// //       )
// //     }
// // }


// //? Example 2


// import React, { Component } from 'react'
// import Child from './Child'

// export default class Parent extends Component {
//   render() {
//     let student={
//         stdName:"Dishanth",
//         stdAge:21,
//         stdAddress:"Dishanth Palace",
//         stdFriend:"Ajith "
//     }
//     return (
//       <div>
//         <h1>Parent Component</h1>
//         <Child student={student}/>
//       </div>
//     )
//   }
// }



//!------------------------------------------------
//? Props with FBC
// import React from 'react'
// import Child2 from './Child2'

// const Parent = () => {
//   return (
//     <div>
//         <h1>Parent Component</h1>
//         <Child2 username="Ajith" age={22}/>        

//     </div>
//   )
// }

// export default Parent



//? Example 2
import React from 'react'
import Child2 from './Child2'

const Parent = () => {
    let student = {
        stdName: "Dishanth",
        stdAge: 21,
        stdAddress: "Dishanth Palace",
        stdFriend: "Ajith "
    }
    return (
        <div>
            <h1>Parent Component</h1>
            <Child2 student={student} />
        </div>
    )
}
export default Parent