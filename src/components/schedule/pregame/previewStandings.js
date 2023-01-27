import React, { useContext, useState } from "react";
import { PreviewContext } from "../../../dispatch/dispatch";
import { Division } from "../../standings/division";
import { Conference } from "../../standings/conference";
import { League } from "../../standings/league";

export const PreviewStandings = () => {
  const [preview, setPreview] = useContext(PreviewContext);




  if (preview[0].division.id === preview[1].division.id) {
    return (
  
        <Division name={preview[0].division.nameShort} />
     
    );
  } else if (preview[0].conference.id === preview[1].conference.id) {
    return (
        <Conference name={preview[0].conference.name}/>
    ) 
  } else {
    return <League />
  }
};