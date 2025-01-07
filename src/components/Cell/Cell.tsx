// ----------------------------------------------------------------------------
// IMPORTS

// REACT
import { useState } from "react";


// ----------------------------------------------------------------------------


export interface roundedCornersInter {
    topleft: boolean, 
    topright: boolean, 
    bottomleft: boolean, 
    bottomright: boolean
}

function calculateBgColor(evenRow: boolean, hoverState: boolean, header: boolean) {
    if (header) return "#44abff";

    if ((evenRow && hoverState) || (!evenRow && !hoverState)) {
        return "#b7b7b7";
    } else {
        return "#ffffff";
    }
}

function Cell(
    {
        text, 
        evenRow = false, 
        corners = {
            topleft: false, 
            topright: false, 
            bottomleft: false, 
            bottomright: false
        }, 
        header = false, 
        hidden = false, 
    }:
    {
        text: string, 
        evenRow?: boolean, 
        corners?: roundedCornersInter, 
        header?: boolean, 
        hidden?: boolean, 
    }
) {

    const [hoverState, setHoverState] = useState<boolean>(false);

    // console.log("Cell Drawn");

    return (
        <div className="Cell"
        style={

        (!hidden) ?
            {
                maxWidth: "100%", 
                maxHeight: "100%", 
                borderTopLeftRadius: (corners.topleft) ? "0.5em" : "0", 
                borderTopRightRadius: (corners.topright) ? "0.5em" : "0", 
                borderBottomLeftRadius: (corners.bottomleft) ? "0.5em" : "0", 
                borderBottomRightRadius: (corners.bottomright) ? "0.5em" : "0", 
                // border: (hoverState) ? "0.01em solid rgb(4, 142, 255, 0.7)" : "0.01em solid rgb(29, 29, 29, 0.7)", 
                
                
                backgroundColor: calculateBgColor(evenRow, hoverState, header), 
                padding: "0.5em", 
                color: (!header) ? "#1d1d1d" : "#ffffff", 
                fontWeight: (!header) ? "normal" : "bold",
                transition: "all", 
                transitionDuration: "0.2s", 
            } 
        :   {

                maxWidth: "100%", 
                maxHeight: "100%", 
                backgroundColor: calculateBgColor(evenRow, hoverState, header), 
                padding: "0.5em", 

                color: "rgba(0, 0, 0, 0)", 
                fontWeight: "light", 
            }
        }
        // onMouseOver={() => {console.log("Mouse Over"); setHoverState(true)}}
        // onMouseOut={() => {setHoverState(false)}}
        >
            {(!hidden) ? text : "."}
        </div>
    );   
}

export default Cell;