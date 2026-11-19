const myDiv = document.querySelector("#myDiv");
myDiv.style.color = "red";


//Herumspielen mit table
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

const newRow2 = myTable.insertRow();
const cell3 = newRow2.insertCell();
cell3.textContent = "Paul";

const cell4 = newRow2.insertCell();
cell4.textContent = "15";

//Herumspielen mit form & input

const formular = document.querySelector("#myForm");
const nameLabel = formular.querySelector('label[for="name"]');
const nameInput = formular.querySelector("#name");
nameLabel.textContent = "Password:";
nameInput.type= "password";
nameInput.id="password";
nameInput.name="password";

const colorSelector = document.querySelector("#color");
const newColor = document.createElement("option");
newColor.value = "pink";
newColor.textContent = "Pink";
colorSelector.append(newColor);

const sizeInput = document.querySelectorAll('input[name="size"]');
sizeInput.forEach(function (sizeInput) {
sizeInput.addEventListener("change", function() {
    const chosenSize = document.querySelector('input[name="size"]:checked');
if(chosenSize) {
    console.log(chosenSize.value);
} else {
    console.log("No size chosen");
}
});
});

//Herumspielen mit button

const submitButton = document.querySelector("#submitBtn");
submitButton.addEventListener ("click", function () {
    alert("Thank you!");
    formular.reset ();
});


// Herumspielen mit div
myDiv.style.backgroundColor = "lightblue";
// myDiv ist in Zeile 1 schon deklariert//


//Herumspielen mit ul
myList.addEventListener ("click", function(event) {
    const eintrag = event.target.closest("li");
    if (eintrag) {
        console.log(eintrag.textContent);
    }
})

//Herumspielen mit select/option
const placeholder = document.createElement("option");
placeholder.value = "";
placeholder.textContent = "Please select...";
placeholder.defaultSelected = true;
colorSelector.prepend(placeholder);
