function isWhiteSpace(s: string) {
    return /^\s+$/.test(s);
  }

function removeSpaces(arr: Array<Array<string>>) {

    let maxRowLength: number =  0;

    // Removing cells where theres an empty string and
    // removing trailing and leading whitespaces, if any, 
    // from all the cells' text

    let newArr: Array<Array<string>> = [];
    arr.forEach((row: Array<string>) => {

        let newRow: Array<string> = [];

        row.forEach((cellText: string) => {
            
            let newCellText: string = cellText;
            if (!(cellText === "") && !isWhiteSpace(cellText)) newRow.push(newCellText.trim());
        });

        if (newRow.length > maxRowLength) maxRowLength = newRow.length;

        newArr.push(newRow);
    });

    // Adding new cells with text "." wherever the row length
    // is less than the greatest row length of the table
    // This is done so that the table still looks like a table
    // without any missing cells

    newArr.forEach((row: Array<string>) => {
        while (row.length < maxRowLength) row.push(".");
    });

    return newArr;
}

export default function csvToArray(csv: string) {
    let arr: Array<Array<string>> = [];
    let currentRow: Array<string> = [];
    let currentCell: Array<string> = [];

    for (let i = 0; i < csv.length; i++) {
        let currentChar: string = csv.charAt(i);

        if (currentChar === "\n") {
            currentRow.push(currentCell.join(""));
            currentCell.splice(0, currentCell.length);
            arr.push([...currentRow]);
            currentRow.splice(0, currentRow.length);
        } else if (currentChar === ",") {
            currentRow.push(currentCell.join(""));
            currentCell.splice(0, currentCell.length);
        } else currentCell.push(currentChar);
    }

    if (currentCell.length > 0) {
        currentRow.push(currentCell.join(""));
        arr.push([...currentRow]);
    }

    return removeSpaces(arr);
}

