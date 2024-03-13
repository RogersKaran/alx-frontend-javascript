// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from "./interface";
// Import types from crud.js
import { insertRow, deleteRow, updateRow } from "./crud";

// Create row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

// Insert row
const newRowID: RowID = insertRow(row);
console.log(`Insert row ${newRowID}`, row);

// Update row
const updatedRow: RowElement = { ...row, age: 23 };
console.log(`Update row ${newRowID}`, updatedRow);
updateRow(newRowID, updatedRow);

// Delete row
deleteRow(newRowID);
console.log(`Delete row id ${newRowID}`);

