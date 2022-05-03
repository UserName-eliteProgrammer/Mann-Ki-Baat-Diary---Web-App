const searchInp = document.getElementById("searchInp");
let cardsHTML = "";

searchInp.addEventListener("input", () => {
  const inpVal = searchInp.value;
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
      showOnlyThisCard(itemsMatched[i]);
    }
    cardsDiv.innerHTML = cardsHTML;
  }
});

function showOnlyThisCard(index) {
  let cardsArr = JSON.parse(localStorage.getItem("key"));
  let titleArr = JSON.parse(localStorage.getItem("titleKey"));

  let content = cardsArr[index].slice(0, 150);
  content += ".....";

  cardsHTML += `<div class="card my-2 mx-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${titleArr[index]}</h5>
                <p class="card-text">
                    ${content}
                </p>
                <button type="button" class="btn btn-success mx-2" id="readNoteBtn_${index}" onclick = "readMore(this.id);">Read More</button>
                <button type="button" class="btn btn-danger" id="deleteNoteBtn_${index}" onclick="deleteCard(this.id);">Delete Note</button>
            </div>
        </div>`;
}
