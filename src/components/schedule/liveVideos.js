import React, {useContext, useState} from "react";
import { GameCenterContext } from "../../dispatch/dispatch";

export const LiveVideos = () => {
    const game = useContext(GameCenterContext)
    const highlights = game.content.content.highlights.scoreboard.items
    const [highlight, setHighlight] = useState("")

return (
    <ul id="live-videos-containers">
                    <video controls id="highlight-video" key={highlight} autoplay>
                <source src={highlight} title="highlight" type="video/mp4" height={highlight.height} width={highlight.width}/>
            </video>
        {highlights.map((video) => {
            return (
                <li>
                    <video src={video.playbacks[1].url} onClick={() => {setHighlight(video.playbacks[3].url)}} playsInline />
                    <p>{video.title}</p>
                    
                </li>
            )
        })}

    </ul>
)
}