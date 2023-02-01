import React from "react";
import {ImageBackground} from 'react-native'
import rink from '../../images/rink.png'
export const Rink = () => {

    return (

<ImageBackground
  source={rink}
  style={{width: '100%', height: '100%'}}
> 
    {/* <....yourContent...> */}
</ImageBackground>
        // <img src={rink} alt="am" className="rink-pic" />
    )
    
}