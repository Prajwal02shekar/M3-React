import React from 'react'

const PlayerList = (props) => {
    // console.log(props)
    let { song ,handlePlay} = props
    console.log(song)
    console.log(handlePlay)
    let { thumbnailUrl, views, subscriber, duration } = props.song
    return (
        <div className='playerList' onClick={()=>handlePlay(song)}>

            <img src={thumbnailUrl} height={110} width={250} alt="" />
            <p>View: {views}</p>
            <p> subscriber: {subscriber}</p>
            <p> Duration: {duration}</p>
        </div>
    )
}

export default PlayerList