// import React, { Component } from 'react'

// export default class Child2 extends Component {
//   render() {
//         console.log(this.props)

//     return (
//       <div>
//         <h1>Iam a child 2 component</h1>
//         <h2>My name is {this.props.user}</h2>
//         <h3>iam {this.props.age} years</h3>
//       </div>
//     )
//   }
// }



// import React from 'react'

// const Child2 = (props) => {
//     console.log(props)
//     console.log(props.username)
//     console.log(props.age)
//     let {username,age}=props

//   return (
//     <div>
//         <h2>Child 2 Component</h2>
//         <h2>My name is {username}</h2>
//         <h2>My name is {age}</h2>

//     </div>
//   )
// }

// export default Child2




import React from 'react'

const Child2 = (props) => {
    console.log(props.student)
    let {stdName,stdAge,stdFriend,stdAddress}=props.student
  return (
    <div>
        <h1>Child2 Component</h1>

        <h2>{stdName}</h2>
        <h2>{stdAge}</h2>
        <h2>{stdFriend}</h2>
        <h2>{stdAddress}</h2>

    </div>
  )
}
export default Child2