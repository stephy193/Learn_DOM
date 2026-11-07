const myDiv = document.querySelector("#myDiv").style.color = "red";

const myList = document.getElementById("myList");
const newItem = document.createElement("li");
newItem.textContent = "Item 4";
myList.append(newItem);

const newItem2 = document.createElement("li");
newItem2.textContent = "Item 2.5";
myList.insertBefore(newItem2, myList.children[2]);