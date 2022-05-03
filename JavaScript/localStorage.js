function addToLocalStorage(textContent, titleContent) {
  let cardsArr = new Array();
  let titleArr = new Array();

  if (localStorage.getItem("key")) {
    cardsArr = JSON.parse(localStorage.getItem("key"));
    titleArr = JSON.parse(localStorage.getItem("titleKey"));
  }
  cardsArr.push(textContent);
  titleArr.push(titleContent);
  localStorage.setItem("key", JSON.stringify(cardsArr));
  localStorage.setItem("titleKey", JSON.stringify(titleArr));
}
