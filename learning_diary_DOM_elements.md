document wird vom Browser automatisch angelegt, ich muss es nicht selbst anlegen
über document kommuniziert das JS File mit dem HTML File
über das document kann ich Elemente im HTML ändern, ohne das HTML File selbst zu ändern
createElement("p") - kreiert z.B. ein neues p-Element im HTML
ich rufe das "document" im JS ab, also wäre es ein Objekt
Die gängisten Dinge, die ich mit document machen kann: Elemente finden (z.B. um es dann zu ändern), Inhalte und Aussehen ändern, neue Elemente einfügen, auf Events reagieren (z.B. wenn man auf einen Button klickt wäre das ein Event)
Wenn ich ein div ändern will, immer die id bzw. class mitbedenken. Wenn ich nur div eingebe, nimmt er die erste. Class kann ich mit einem Punkt angeben. ID mit einem #.