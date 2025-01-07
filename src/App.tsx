// ----------------------------------------------------------------------------
// IMPORTS

// SCRIPTS
import csvToArray from "./scripts/csvToArray";

// REACT
import { useState } from "react";

// COMPONENTS
import Table from "./components/Table/Table";
import ExportAsCSV from "./components/ExportAsCSV/ExportAsCSV";


// ----------------------------------------------------------------------------

function App() {

//   let tableData: Array<Array<string>> = csvToArray(
// `ID,Name,Age,Email,Registration Date,Active
// 1,John Doe,29,john.doe@example.com,2023-05-15,TRUE
// 2,Jane Smith,34,jane.smith@example.com,2023-06-20,FALSE
// 3,Samuel Green,22,samuel.green@example.com,2023-07-10,TRUE
// 4,Emily White,27,emily.white@example.com,2023-08-05,FALSE
// 5,Michael Brown,31,michael.brown@example.com,2023-09-12,TRUE
// 6,Sophia Black,25,sophia.black@example.com,2023-10-01,TRUE
// 7,William Gray,40,william.gray@example.com,2023-11-18,FALSE
// 8,Olivia Blue,21,olivia.blue@example.com,2023-12-25,TRUE
// 9,Liam Red,28,liam.red@example.com,2024-01-02,FALSE
// 10,Ava Gold,35,ava.gold@example.com,2024-01-07,TRUE`
// );

  let tableData: Array<Array<string>> = csvToArray(
`ID,Name,Age,Email,Phone Number,Address,Gender,Registration Date,Last Login,Account Type,Active
1,John Doe,29,john.doe@example.com,555-123-4567,123 Elm St, Male,2023-05-15,2024-01-01,Premium,TRUE
2,Jane Smith,34,jane.smith@example.com,555-987-6543,456 Oak St,Female,2023-06-20,2024-01-02,Free,FALSE
3,Samuel Green,22,samuel.green@example.com,555-222-3333,789 Pine St,Male,2023-07-10,2023-12-15,Basic,TRUE
4,Emily White,27,emily.white@example.com,555-444-5555,101 Maple St,Female,2023-08-05,2023-12-20,Premium,FALSE
5,Michael Brown,31,michael.brown@example.com,555-666-7777,202 Birch St,Male,2023-09-12,2024-01-03,Basic,TRUE
6,Sophia Black,25,sophia.black@example.com,555-888-9999,303 Cedar St,Female,2023-10-01,2023-12-25,Free,TRUE
7,William Gray,40,william.gray@example.com,555-000-1111,404 Walnut St,Male,2023-11-18,2024-01-05,Premium,FALSE
8,Olivia Blue,21,olivia.blue@example.com,555-111-2222,505 Aspen St,Female,2023-12-25,2024-01-06,Basic,TRUE
9,Liam Red,28,liam.red@example.com,555-333-4444,606 Willow St,Male,2024-01-02,2024-01-06,Free,FALSE
10,Ava Gold,35,ava.gold@example.com,555-555-6666,707 Cherry St,Female,2024-01-07,2024-01-07,Premium,TRUE
11,Ethan Green,32,ethan.green@example.com,555-777-8888,808 Magnolia St,Male,2023-04-12,2024-01-04,Basic,FALSE
12,Isabella White,26,isabella.white@example.com,555-999-0000,909 Cypress St,Female,2023-03-08,2023-12-30,Premium,TRUE
13,Noah Black,33,noah.black@example.com,555-222-1111,101 Spruce St,Male,2023-02-18,2023-12-15,Free,FALSE
14,Mia Blue,24,mia.blue@example.com,555-444-3333,202 Hickory St,Female,2023-01-20,2023-12-18,Basic,TRUE
15,James Red,29,james.red@example.com,555-666-4444,303 Chestnut St,Male,2023-06-22,2024-01-01,Free,FALSE
16,Charlotte Gold,30,charlotte.gold@example.com,555-888-5555,404 Palm St,Female,2023-07-14,2023-12-24,Premium,TRUE
17,Benjamin Silver,31,benjamin.silver@example.com,555-000-6666,505 Fir St,Male,2023-08-08,2023-12-31,Basic,FALSE
18,Amelia Purple,22,amelia.purple@example.com,555-111-7777,606 Linden St,Female,2023-09-15,2024-01-02,Free,TRUE
19,Lucas Gray,37,lucas.gray@example.com,555-333-8888,707 Alder St,Male,2023-10-11,2024-01-05,Premium,FALSE
20,Harper Brown,34,harper.brown@example.com,555-555-0000,808 Sequoia St,Female,2023-11-01,2024-01-03,Basic,TRUE
21,Ella Gold,27,ella.gold@example.com,555-777-2222,909 Juniper St,Female,2023-03-17,2023-12-22,Premium,TRUE
22,Alexander White,29,alexander.white@example.com,555-999-3333,101 Poplar St,Male,2023-02-05,2023-12-25,Free,FALSE
23,Avery Green,23,avery.green@example.com,555-222-4444,202 Olive St,Female,2023-04-03,2024-01-01,Basic,TRUE
24,Sophia Black,25,sophia.black@example.com,555-444-5555,303 Cedar St,Female,2023-05-12,2024-01-07,Premium,FALSE
25,Mason Gray,38,mason.gray@example.com,555-666-8888,404 Beech St,Male,2023-06-30,2024-01-06,Free,TRUE
26,Evelyn Blue,28,evelyn.blue@example.com,555-888-1111,505 Ash St,Female,2023-07-21,2023-12-31,Premium,F`
  );

  const [hiddenColumnsState, setHiddenColumnsState] = useState<Array<number>>([]);

  return (
    <div className="App"
    style={{
      minHeight: "100vh", 
      minWidth: "100vw", 

      backgroundColor: "#1d1d1d", 
      fontFamily: "sans-serif", 
      // backgroundColor: "blue",

      color: "#ffffff"
    }}>

      <Table tableData={tableData} hiddenColumns={hiddenColumnsState} setHiddenColumns={setHiddenColumnsState} />
      <div style={{minHeight: "1em"}}></div>
      <ExportAsCSV tableData={tableData} hiddenColumns={hiddenColumnsState}/>

    </div>
  );
}

export default App;