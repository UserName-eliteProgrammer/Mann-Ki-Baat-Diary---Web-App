const cardsDiv = document.getElementById("cardsDiv");

function insertContent(inpStr) {
  let content = "";
  for (let j = 0; j < inpStr.length; j++) {
    if (inpStr.charAt(j) == "\n") {
      content += "<br>";
    } else {
      content += inpStr.charAt(j);
    }
  }
  return content;
}

function showCards() {
  let cardsHTML = "";
  if (localStorage.getItem("key")) {
    let cardsArr = JSON.parse(localStorage.getItem("key"));
    let titleArr = JSON.parse(localStorage.getItem("titleKey"));

    for (let i = 0; i < cardsArr.length; i++) {
      let contentStr = cardsArr[i].slice(0, 25);

      if (cardsArr[i].length > 25) {
        contentStr += ".....";
      }

      let content = insertContent(contentStr); // showCards

      cardsHTML += `<div class="card my-2 mx-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${titleArr[i]}</h5>
                <p class="card-text" style="word-wrap: break-word;">
                  ${content}
                </p>
                <button type="button" class="btn btn-success mx-2" id="readNoteBtn_${i}" onclick = "readMore(this.id);">Read More</button>
                <button type="button" class="btn btn-danger" id="deleteNoteBtn_${i}" onclick="deleteCard(this.id);">Delete</button>
            </div>
        </div>`;
    }
    cardsDiv.innerHTML = cardsHTML;
  }
}
