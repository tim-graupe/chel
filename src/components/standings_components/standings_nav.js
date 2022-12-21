import React from "react";

export const StandingsNav = (props) => {

    function handleChange(e){
        props.onChange(e)
    }
    return (
        <>
            <button onClick={() => {
      handleChange('division')
    }}>Division</button>
    <button onClick={() => {
      handleChange('wildcard')
    }}>Wildcard</button>
    <button onClick={() => {
      handleChange('conference')
    }}>Conference</button>
    <button onClick={() => {
      handleChange('league')
    }}>League</button>
        </>
    )
}