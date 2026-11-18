07.11.2026:
document wird vom Browser automatisch angelegt, ich muss es nicht selbst anlegen
über document kommuniziert das JS File mit dem HTML File
über das document kann ich Elemente im HTML ändern, ohne das HTML File selbst zu ändern
createElement("p") - kreiert z.B. ein neues p-Element im HTML
ich rufe das "document" im JS ab, also wäre es ein Objekt
Die gängisten Dinge, die ich mit document machen kann: Elemente finden (z.B. um es dann zu ändern), Inhalte und Aussehen ändern, neue Elemente einfügen, auf Events reagieren (z.B. wenn man auf einen Button klickt wäre das ein Event)
Wenn ich ein div ändern will, immer die id bzw. class mitbedenken. Wenn ich nur div eingebe, nimmt er die erste. Class kann ich mit einem Punkt angeben. ID mit einem #.
Ich darf die gleiche Variable nicht 2x vergeben, sonst überschreibt es sich - newItem, newItem2,...

assignment - tables:
onst tabelle = document.querySelector("#tabelle");
rows, rows.length, rows[0].cells[9], caption, tHead, tBody, tFoot
Alle Zellen durchlaufen:
for (const zeile of tabelle.rows) {
  for (const zelle of zeile.cells) {
    console.log(zelle.textContent);
  }
}
----- damit kann man ganze Tabelle bearbeiten

Zeile löschen
tabelle.deleteRow(1) - gilt nur für Tabellen. Auch auf z.B. tBody anwendbar:
tabelle.tBodies[0].deleteRow(0);
dann wird nur die 1. Zeile aus dem Body gelöscht.
Eine Tabelle kann mehrere Bodies haben - da aufpassen

Einen Style für alle Zellen im Body anwenden:
for (const body of myTable.tBodies) {
  body.style.fontStyle = "italic";
}

für tHead gehts einfacher:
myTable.tHead.style.fontStyle = "italic";

15.11.2026 
form & input:
= Formular, Teil der Website indem was eingegeben wird
für <input> verschiedene types möglich, z.B. e-mail, password,...
input id ist notwendig, damit es in JS mit # gefunden werden kann
nur inputs mit name werden mitgeschickt, wenn nur id vorhanden - wird nicht mitgeschickt!
Checkboxen sind unabhängig voneinander und Radio ist eine Gruppe, wo nur einer wählbar ist (in unserem Beispiel Small und Large)
wenn man ein Radio bearbeitet - querySelector() nimmt das erste was passt, aber nicht alle Elemente. Wenn man mehrere checken möchte, dann querySelectorAll() und dann .forEach(). 

buttons:
Knopf, den man anklicken kann
ohne JS macht ein button gar nichts, er lässt sich nur anklicken
Code gibt buttons eine Aufgabe
Types: submit oder reset
wenn man kein type definiert, ist es automatisch submit wenn der Knopf in einem Formular steht
buttonName.addEventListener("click", function () {
}); ----- um dem Klick eine Aufgabe zu geben

div: 
neutraler Behälter, fasst mehrere Elemente zusammen. Diese kann man dann gemeinsam ansprechen mit JS oder gestalten in CSS.

ul:
ul ist eine Liste ohne feste Reihenfolge - unordered list
man nutzt es zB für Menüs und Navigationsleisten
in einem ul dürfen nur <li> stehen, keine anderen Elemente
ol wäre eine Liste mit Reihenfolge
dl wäre Begriff + Beschreibung
man kann auch Unterlisten haben, also eine <ul> in einer <li>

