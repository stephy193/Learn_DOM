document wird vom Browser automatisch angelegt, ich muss es nicht selbst anlegen
über document kommuniziert das JS File mit dem HTML File
über das document kann ich Elemente im HTML ändern, ohne das HTML File selbst zu ändern
createElement("p") - kreiert z.B. ein neues p-Element im HTML
ich rufe das "document" im JS ab, also wäre es ein Objekt
Die gängisten Dinge, die ich mit document machen kann: Elemente finden (z.B. um es dann zu ändern), Inhalte und Aussehen ändern, neue Elemente einfügen, auf Events reagieren (z.B. wenn man auf einen Button klickt wäre das ein Event)
Wenn ich ein div ändern will, immer die id bzw. class mitbedenken. Wenn ich nur div eingebe, nimmt er die erste. Class kann ich mit einem Punkt angeben. ID mit einem #.
Ich darf die gleiche Variable nicht 2x vergeben, sonst überschreibt es sich - newItem, newItem2,...

Tabellen:
onst tabelle = document.querySelector("#tabelle");
rows, rows.length, rows[0].cells[9], caption, tHead, tBody, tFoot
Alle Zellen durchlaufen:
for (const zeile of tabelle.rows) {
  for (const zelle of zeile.cells) {
    console.log(zelle.textContent);
  }
}
----- damit kann man ganze Tabelle bearbeiten

Zeile löschen:
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