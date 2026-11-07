const myDiv = document.querySelector("#myDiv").style.color = "red";

const myList = document.getElementById("myList");
const newItem = document.createElement("li");
newItem.textContent = "Item 4";
myList.append(newItem);

const newItem2 = document.createElement("li");
newItem2.textContent = "Item 2.5";
myList.insertBefore(newItem2, myList.children[2]);

const myTable = document.getElementById("myTable");
const newRow = myTable.insertRow();
const cell1 = newRow.insertCell();
cell1.textContent = "Lisa";

const cell2 = newRow.insertCell();
cell2.textContent = "32";
myTable.tBodies[0].deleteRow(1);

myTable.tHead.style.fontStyle = "italic";