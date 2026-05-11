// // // import React, { Component } from 'react'

// // // export default class Child extends Component {
// // //   render() {
// // //     console.log(this.props)
// // //     return (
// // //       <div>
// // //         <h1>Child Component</h1>
// // //         <h3>My name is  {this.props.username}</h3>
// // //         <p>Iam {this.props.age} yearls old</p>
// // //       </div>
// // //     )
// // //   }
// // // }



// // //? Example 2
// // import React, { Component } from 'react'

// // export default class Child extends Component {
// //   render() {
// //     console.log(this.props.student)
// //     let {stdName,stdAge,stdAddress,stdFriend}=this.props.student
// //     return (
// //       <div>
// //         <h1>Child Component</h1>
// //         <h3>My name is {stdName}</h3>
// //         <h3>My age is {stdAge}</h3>
// //         <h3>My address is {stdAddress}</h3>
// //         <h3>My friend name {stdFriend}</h3>
// //       </div>
// //     )
// //   }
// // }


// //!------------------------------------------------
// //? Props with FBC
// import React from 'react'

// const Child = () => {
//   return (
//     <div>Child</div>
//   )
// }

// export default Child



import React from 'react'

const Child = () => {
  return (
    <div>
      <h1>Child Component</h1>
    </div>
  )
}

export default Child