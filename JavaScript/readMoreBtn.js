let readLessBtn = false;
let prevHTML = null;

function readMore(id) {
  id = Number(id.slice(12));
  prevHTML = cardsDiv.innerHTML;

  const cardsArr = JSON.parse(localStorage.getItem("key"));
  const titleArr = JSON.parse(localStorage.getItem("titleKey"));

  for (let i = 0; i < cardsArr.length; i++) {
    if (i == id) {
      let content = "";
      for (let j = 0; j < cardsArr[i].length; j++) {
        content += `<span>${cardsArr[i].charAt(j)}</span>`;
        if (cardsArr[i].charAt(j) == "\n") {
          content += `<br>`;
        }
      }

      cardsDiv.innerHTML = `<div class="card my-2 mx-2" style="width: 100%; word-wrap: word-break">
            <div class="card-body">
                <h5 class="card-title">${titleArr[i]}</h5>
                <p class="card-text">
                  ${content}
                </p>
                <button type="button" class="btn btn-success mx-2" onclick = "readLess();">Read Less</button>
                <button type="button" class="btn btn-danger" id="deleteNoteBtn_${i}" onclick="deleteCard(this.id);">Delete</button>
            </div>
        </div>`;
      readLessBtn = true;
      return;
    }
  }
}

function readLess() {
  cardsDiv.innerHTML = prevHTML;
}
