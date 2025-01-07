function arrayToCsv(arr: Array<Array<string>>, hiddenColumns: Array<number>) {

    let s: Array<string> | string = [];

    arr.forEach((row: Array<string>) => {
        row.forEach((cellText: string, colNo: number) => {
            if (!(hiddenColumns.includes(colNo))) {
                s.push(cellText);
                s.push(",");
            }
        });
        
        if (s[s.length - 1] === ",") {
            s[s.length - 1] = "\n";
        } else {s.push("\n")}
    });

    return s.join("");
}

export default arrayToCsv;