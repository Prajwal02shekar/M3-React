import React, { useState } from 'react'
import VIDEO from './video.json'
import VideoContainer from './pages/VideoContainer'

// console.log(VIDEO)
const App = () => {
    let [state,setState]=useState(VIDEO)
    // console.log(state)

    let [play,setPlay]=useState(state[0])
    // console.log(play)


    let handlePlay=(song)=>{
        setPlay(song)
    }
    return (
        <div className='container'>
            <VideoContainer state={state} play={play} handlePlay={handlePlay} />
        </div>
    )
}

export default App