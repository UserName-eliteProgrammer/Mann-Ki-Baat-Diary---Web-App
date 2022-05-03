console.log("Script Included");
showCards();

const addNoteBtn = document.getElementById("addNoteBtn");
const text = document.getElementById("text");
const noteTitle = document.getElementById("noteTitle");

let textContent = "";
let titleContent = "";

addNoteBtn.addEventListener("click", () => {
  textContent = text.value;
  titleContent = noteTitle.value;

  addToLocalStorage(textContent, titleContent);
  showCards();

  noteTitle.value = "";
  text.value = "";
});

function deleteCard(id) {
  let cardsArr = JSON.parse(localStorage.getItem("key"));
  let titleArr = JSON.parse(localStorage.getItem("titleKey"));

  cardsArr.splice(id, 1);
  titleArr.splice(id, 1);

  localStorage.setItem("key", JSON.stringify(cardsArr));
  localStorage.setItem("titleKey", JSON.stringify(titleArr));
  showCards();
}
