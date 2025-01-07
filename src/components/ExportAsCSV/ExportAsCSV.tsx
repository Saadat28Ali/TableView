// ----------------------------------------------------------------------------
// IMPORTS

// REACT
import { useState } from "react";

// SCRIPTS
import arrayToCsv from "../../scripts/arrayToCsv";


// ----------------------------------------------------------------------------

function ExportAsCSV(
    {
        tableData, 
        hiddenColumns, 
    }:
    {
        tableData: Array<Array<string>>, 
        hiddenColumns: Array<number>
    }
) {

    const [clickedState, setClickedState] = useState<boolean>(false);
    let downloadable: Blob = new Blob([arrayToCsv(tableData, hiddenColumns)], { type: "text/plain" });
    console.log(downloadable);

    if (downloadable) {
        return (
            <a
            href={URL.createObjectURL(downloadable)}
            download={"file.csv"}
            style={{
                color: "#ffffff", 
                textDecoration: "none", 
                cursor: "pointer",
            }}
            >
    
                <button className="ExportAsCSV"
                style={{
                    borderRadius: "1em", 
                    border: "0px", 
                    scale: (clickedState) ? "0.95" : "1", 
        
                    backgroundColor: (clickedState) ? "#2f77b2" : "#44abff", 
                    fontWeight: "bold", 
                    fontSize: "1em", 
                    fontFamily: "sans-serif", 
                    padding: "1em",
                    color: "white",
                    cursor: "pointer", 
                }}
    
                onMouseDown={() => {setClickedState(true)}}
                onMouseUp={() => {
                    setClickedState(false);
                }}
                >
                    Export as CSV
                </button>
            </a>            
        );
    } else {
        return (
            <a
            href={URL.createObjectURL(downloadable)}
            download={"file.csv"}
            style={{
                color: "#ffffff", 
                textDecoration: "none", 
                cursor: "pointer",
            }}
            >
        
                <button className="ExportAsCSV"
                style={{
                    borderRadius: "1em", 
                    border: "0px", 
                    scale: (clickedState) ? "0.95" : "1", 
        
                    backgroundColor: "#004c8a", 
                    fontWeight: "bold", 
                    fontSize: "1em", 
                    fontFamily: "sans-serif", 
                    padding: "1em",
                    color: "white",
                    cursor: "pointer", 
                }}
        
                onMouseDown={() => {setClickedState(true)}}
                onMouseUp={() => {
                    setClickedState(false);
                }}
                >
                    Creating CSV
                </button>                
            </a>
        );
    }

}

export default ExportAsCSV;