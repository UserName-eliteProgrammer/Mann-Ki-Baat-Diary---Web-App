

function readMore(id) {
    id = Number(id.slice(12));
    console.log(id);
    const cardsArr = JSON.parse(localStorage.getItem("key"));
    const titleArr = JSON.parse(localStorage.getItem("titleKey"));


    for (let i = 0; i < cardsArr.length; i++) {
        if (i == id) {
            let modalContent = cardsArr[i];
            let titleOfModal = titleArr[i];
            document.querySelector(
              "body"
            ).innerHTML += `<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${titleOfModal}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ${modalContent}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`;
            break;
        }
    }
}