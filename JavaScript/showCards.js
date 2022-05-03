const cardsDiv = document.getElementById("cardsDiv");

function showCards() {
  let cardsHTML = "";
  if (localStorage.getItem("key")) {
    let cardsArr = JSON.parse(localStorage.getItem("key"));
    let titleArr = JSON.parse(localStorage.getItem("titleKey"));

    for (let i = 0; i < cardsArr.length; i++) {
      cardsHTML += `<div class="card my-2 mx-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${titleArr[i]}</h5>
                <p class="card-text">
                    ${cardsArr[i]}
                </p>
                <button type="button" class="btn btn-success mx-2" id="readNoteBtn_${i}" onclick = "readMore(this.id);">Read More</button>
                <button type="button" class="btn btn-danger" id="deleteNoteBtn_${i}" onclick="deleteCard(this.id);">Delete Note</button>
            </div>
        </div>`;
    }
    cardsDiv.innerHTML = cardsHTML;
  }
}
