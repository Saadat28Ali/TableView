// ----------------------------------------------------------------------------
// IMPORTS

// REACT
import { useState } from "react";

// ----------------------------------------------------------------------------


function HideColumn(
    {
        clickCallback = () => {}, 
        column, 
        active = false, 
    }:
    {
        clickCallback?: Function, 
        column: number, 
        active: boolean, 
    }
) {

    const [hoverState, setHoverState] = useState<boolean>(false);
    const [clickedState, setClickedState] = useState<boolean>(false);

    function calculateBgColor(hoverState: boolean, active: boolean) {
        if (active) {
            if (!hoverState) return "#ffffff";
            else return "#b7b7b7";
        } else {
            return "rgba(0,0,0,0)";
        }
    }

    return (
        <button className="HideColumn" 
        style={{
            border: "0px", 
            borderRadius: "5em", 
            width: "1em", 
            height: "1em", 
            
            // backgroundColor: (!hoverState) ? "#ffffff" : "#b7b7b7", 
            backgroundColor: calculateBgColor(hoverState, active), 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            padding: "0.8em", 
            textAlign: "center", 
            color: (active) ? "#1d1d1d" : "#ffffff", 
            fontWeight: "normal", 
            fontSize: "1em", 
            transition: "all", 
            transitionDuration: "0.2s", 
            
            scale: (clickedState) ? "0.9" : "1", 
        }}
        onMouseOver={() => {setHoverState(true)}}
        onMouseOut={() => {setHoverState(false)}}

        onMouseDown={() => {setClickedState(true)}}
        onMouseUp={() => {
            setClickedState(false);
            clickCallback(column);

        }}
        >
            &#x1F441;
        </button>
    );
}

export default HideColumn