import React from 'react'
import Player from './Player'
import PlayerList from './PlayerList'

const VideoContainer = (props) => {
    // console.log(props)
    let {state,handlePlay,play}=props
    // console.log(state)
    // console.log(handlePlay)
    // console.log(play)
    return (

        <section className="videoContainer">
            <aside className="playerContainer">
            <Player play={play}/>
            </aside>
            <aside className="playerListComntainer">
                {
                    state.map((song)=>{
                        return(
                            <PlayerList song={song} handlePlay={handlePlay}/>
                        )
                    })
                }
            </aside>
        </section>
    )
}

export default VideoContainer