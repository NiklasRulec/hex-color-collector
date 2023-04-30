// ! ++++++++++ Überprüfen, ob der Browser Local Storage unterstützt ++++++++++

if (typeof Storage !== "undefined") {
  // Wenn Local Storage unterstützt wird, die vorhandenen Elemente laden
  if (localStorage.getItem("colorsList")) {
    document.querySelector(".card-wrapper").innerHTML =
      localStorage.getItem("colorsList");
  } else {
    alert("Willkommen. Du hast bisher noch keine Farben gespeichert");
  }
} else {
  alert("Local Storage wird in diesem Browser nicht unterstützt");
}

// ! ++++++++++ Neue Color Card generieren ++++++++++

function addCard() {
  // ! ++++++++++ Variablen ++++++++++
  const cardWrapper = document.querySelector(".card-wrapper");
  const newCard = document.createElement("article");
  const newColor = document.createElement("div");
  const newColorName = document.createElement("h3");
  let hexInput = document.querySelector(".hexinput").value;
  const node = document.createTextNode("Hex : " + hexInput);
  // ! ++++++++++ Card zusammensetzen ++++++++++
  console.log(hexInput);
  newCard.classList.add("card");
  cardWrapper.appendChild(newCard);
  newColor.classList.add("color");
  newCard.appendChild(newColor);
  newColor.style.backgroundColor = hexInput;
  newColor.appendChild(newColorName);
  newColorName.appendChild(node);
  // ! ++++++++++ Delete Button hinzufügen ++++++++++
  let deleteButton = document.createElement("button");
  let deleteText = document.createTextNode("Löschen");
  deleteButton.appendChild(deleteText);
  deleteButton.classList.add("deletebutton");
  newCard.appendChild(deleteButton);
  // ! ++++++++++ Neue Card im localstorage speichern ++++++++++
  localStorage.setItem(
    "colorsList",
    document.querySelector(".card-wrapper").innerHTML
  );
  // ! ++++++++++ Seite neu laden ++++++++++
  location.reload(forcedReload);
}

// ! ++++++++++ Card mit Button löschen  ++++++++++

let deleteButtons = document.querySelectorAll(".deletebutton");

deleteButtons.forEach(function (element) {
  element.addEventListener("click", function () {
    this.parentElement.remove();
    localStorage.setItem(
      "colorsList",
      document.querySelector(".card-wrapper").innerHTML
    );
    console.log("Card wurde gelöscht");
  });
});
