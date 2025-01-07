// ----------------------------------------------------------------------------
// IMPORTS

// COMPONENTS
import Cell from "../Cell/Cell";
import HideColumn from "../HideColumn/HideColumn";

// ----------------------------------------------------------------------------

function Table(
    {
        tableData, 
        hiddenColumns, 
        setHiddenColumns
    }:
    {
        tableData: Array<Array<string>>, 
        hiddenColumns: Array<number>, 
        setHiddenColumns: Function
    }
) {
    


    function hideColumn(columnNumber: number) {
        setHiddenColumns((oldHiddenColumnsState: Array<number>) => {
            let newHiddenColumnsState: Array<number> = [...oldHiddenColumnsState];
            newHiddenColumnsState.push(columnNumber);
            return newHiddenColumnsState;
        });
    }

    function unhideColumn(columnNumber: number) {
        setHiddenColumns((oldHiddenColumnsState: Array<number>) => {
            let newHiddenColumnsState: Array<number> = [];
            oldHiddenColumnsState.forEach((colNo: number) => {
                (colNo !== columnNumber) ? newHiddenColumnsState.push(colNo) : {};
            });
            return newHiddenColumnsState;
        })
    }

    return (
        <div className="Table"
        style={{
        }}
        >
            <table
            style={{
                borderCollapse: "collapse", 
                width: "100%", 
            }}>

                <tr>
                    {
                        tableData[0].map( (_, colNo: number) => {
                            return (
                                <td
                                style={{
                                }}
                                >
                                    <div
                                    style={{
                                        display: "flex", 
                                        justifyContent: "center", 
                                        alignItems: "center", 
                                        paddingBottom: "0.5em", 
                                        background: "none", 

                                    }}
                                    >
                                        <HideColumn 
                                        clickCallback={
                                            (hiddenColumns.includes(colNo)) ? 
                                            unhideColumn : 
                                            hideColumn
                                        }
                                        column={colNo}
                                        active={hiddenColumns.includes(colNo)}
                                        />
                                    </div>

                                </td>
                            );
                        } )
                    }   
                </tr>    

                {tableData.map( (_, rowNo: number) => {
                    return (
                        <tr style={{
                        }}>
                            {tableData[rowNo].map( (cellText: string, colNo: number) => {
                                return (
                                    <td style={{
                                        textWrap: "nowrap", 
                                    }}>
                                       <Cell 
                                       text={cellText} 
                                       evenRow={rowNo % 2 === 0} 
                                       corners={{
                                        topleft: colNo === 0 && rowNo === 0, 
                                        topright: colNo === tableData[rowNo].length - 1 && rowNo === 0, 
                                        bottomleft: colNo === 0 && rowNo === tableData.length - 1, 
                                        bottomright: colNo === tableData[rowNo].length - 1 && rowNo === tableData.length - 1, 
                                       }}
                                       header={rowNo === 0}
                                       hidden={hiddenColumns.includes(colNo)}
                                       /> 
                                    </td>
                                );
                            } )}
                        </tr>
                    );
                } )}
            </table>
        </div>
    );
}

export default Table;