function buildDetails(task) {
  let container = document.createElement("div");
  container.classList.add("details-container");
  //first
  container.innerHTML = buildBoxDetails(task, "tache");
  //sous tache
  task.sous_tache.forEach((tache) => {
    container.innerHTML += buildBoxDetails(tache, "sousTache");
  });
  return container;
}

function buildBoxDetails(task, type) {
  let headerContent = "";
  let btnConfirmer = "";
  if (type == "tache") {
    headerContent = `
    <div class="mark-details">
        <div class="rect-mark ${getColor(task.couleur)} ">${getTextCategory(
      task.categorie
    )}</div>
        <div class="rect-mark ${getColor(task.couleur)} ">Niveau ${
      task.importance
    }</div>
    </div>
    <div class="progression-details">${task.etat}%</div>
    `;
  } else if (type == "sousTache") {
    if (task.fin == null) {
      headerContent = `
        <div class="status-sousTache-details status-good status-notFinished">
            <i class="fas fa-times"></i>
        </div>
        `;
      btnConfirmer = ` <div class="rect-mark btn-to-confirm" > Terminer </div>`;
    } else {
      headerContent = `
        <div class="status-sousTache-details status-good">
            <i class="fas fa-check"></i>
        </div>
        `;
    }
  }
  let box = `
    <div class="box-details">
    <div class="header-details">
        <div class="title-task-details">${task.nom}</div>
        ${headerContent}
    </div>
    <div class="date-details-task">
        <div class="debut-task-details">22 Jan 2022 11:10 - </div>
        <div class="fin-task-details"> 22 Jan 2022 16:34</div>
    </div>
    <div class="details-text">
        ${task.details}
    </div>
    ${btnConfirmer}
    </div>
    `;
  console.log(btnConfirmer);

  return box;
}
