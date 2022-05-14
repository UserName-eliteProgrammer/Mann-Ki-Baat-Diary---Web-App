const searchInp = document.getElementById("searchInp");
let cardsHTML = "";

searchInp.addEventListener("input", () => {
  const inpVal = searchInp.value;
  if (inpVal == "") {
    showCards();
    return;
  }

  cardsHTML = "";
  cardsDiv.innerHTML = "";
  if (localStorage.getItem("key")) {
    let cardsArr = JSON.parse(localStorage.getItem("key"));
    let titleArr = JSON.parse(localStorage.getItem("titleKey"));
    const itemsMatched = new Array();

    for (let i = 0; i < cardsArr.length; i++) {
      if (
        cardsArr[i].toLowerCase().includes(inpVal.toLowerCase()) ||
        titleArr[i].toLowerCase().includes(inpVal.toLowerCase())
      ) {
        itemsMatched.push(i);
      }
    }

    for (let i = 0; i < itemsMatched.length; i++) {
      showOnlyThisCard(itemsMatched[i], inpVal);
    }
    cardsDiv.innerHTML = cardsHTML;
  }
});

function showOnlyThisCard(index, inpVal) {
  let cardsArr = JSON.parse(localStorage.getItem("key"));
  let titleArr = JSON.parse(localStorage.getItem("titleKey"));

  let content = cardsArr[index];
  let titleContent = titleArr[index];

  let findIndexOfInpValInContent = content
    .toLowerCase()
    .search(inpVal.toLowerCase());
  let findIndexOfInpValInTitle = titleArr[index]
    .toLowerCase()
    .search(inpVal.toLowerCase());

  // console.log(inpVal);

  if (findIndexOfInpValInContent != -1) {
    content =
      content.substring(0, findIndexOfInpValInContent) +
      `<mark>${content.slice(
        findIndexOfInpValInContent,
        findIndexOfInpValInContent + inpVal.length
      )}</mark>` +
      content.slice(findIndexOfInpValInContent + inpVal.length);
  }
  if (findIndexOfInpValInTitle != -1) {
    titleContent =
      titleContent.substring(0, findIndexOfInpValInTitle) +
      `<mark>${titleContent.slice(
        findIndexOfInpValInTitle,
        findIndexOfInpValInTitle + inpVal.length
      )}</mark>` +
      titleContent.slice(findIndexOfInpValInTitle + inpVal.length);
  }

  cardsHTML += `<div class="card my-2 mx-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${titleContent}</h5>
                <p class="card-text">
                  ${content}
                </p>
                <button type="button" class="btn btn-success mx-2" id="readNoteBtn_${index}" onclick = "readMore(this.id);">Read More</button>
                <button type="button" class="btn btn-danger" id="deleteNoteBtn_${index}" onclick="deleteCard(this.id);">Delete</button>
            </div>
        </div>`;
}
