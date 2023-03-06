setUpTextAreas();
function texting() {
  this.style.height = 0;
  this.style.height = this.scrollHeight + "px";
}

function setUpTextAreas() {
  let tx = document.getElementsByTagName("textarea");
  for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute(
      "style",
      `height: ${tx[i].scrollHeight}px;overflow-y: hidden;`
    );
    tx[i].addEventListener("input", texting, false);
  }
}
function createPaperTask() {
  let paperExistant = document.querySelector("#paper-textarea");
  if (paperExistant == undefined) {
    let paper = document.createElement("div");
    paper.setAttribute("id", "paper-textarea");
    paper.innerHTML = `
  <div id="closer-paper-textarea"></div>
  <textarea class="msg-task-title" placeholder="Titre de la tache" autofocus></textarea>
  <textarea class="msg-task-descri" placeholder="A propos de la tache"></textarea>

  <div class="bar-paper">

      <div class="utils-icon"> <i class="fas fa-image"></i> </div>
      <div class="btn-bar-paper">
          <div class="text-btn-paper">Planifier</div>
          <div class="icon-btn-paper"><i class="fas fa-check"></i></div>
      </div>
  </div>
  `;
    let windowWidth = window.innerWidth;
    document.body.appendChild(paper);
    setTimeout(() => {
      if (windowWidth <= 768) {
        paper.style.transform = "translateY(0) translateX(50%)";
      } else {
        paper.style.transform = "translateY(0)";
      }
      setUpPaperTasks();
    }, 20);
  }
}

function setUpPaperTasks() {
  let paper = document.getElementById("paper-textarea");
  removePaperTasks(paper);
}

/**
 *
 * @param {HTMLElement} paper
 */
function removePaperTasks(paper) {
  let closer = document.getElementById("closer-paper-textarea");
  closer.addEventListener("click", () => {
    paper.style.transform = "";
    setTimeout(() => {
      paper.parentNode.removeChild(paper);
    }, 200);
  });
}
