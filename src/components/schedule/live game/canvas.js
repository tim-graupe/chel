import React, {useRef} from "react";
import rink from '../../../images/rink.png'
export const Canvas = (props) => {
const drawCanvas = (ref) => {
    if (ref) {
        ref.width = 200;
        ref.height = 100;
        const ctx = ref.getContext('2d')
        ctx.translate(ref.width/2, ref.height/2)
        ctx.beginPath();
        // ctx.drawImage()
        ctx.arc(props.props[0],props.props[1]-props.props[1]-props.props[1],5,0,2*Math.PI);
        ctx.fill()
        ctx.stroke();
    }
}

return <canvas ref={drawCanvas}  style={{backgroundImage: `url(${rink})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}/>


}