setUpTextAreas();
//task variables
var tasksGlobale = {
  name: "",
  category: "",
  details: "",
  color: "",
  importance: "",
  sousTaches: [],
  pics: [],
  //surplus
  debut: "",
  estimation_fin: "",
};
//
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

function createBullTask(text, type, numerotation) {
  let bull = `
    <div class="bulle-task-paper ${type}" numero="${numerotation}" >
      ${text}
    </div>
  `;
  return bull;
}

function createPaperTask() {
  let paperExistant = document.querySelector("#paper-textarea");
  if (paperExistant == undefined) {
    let paper = document.createElement("div");
    paper.setAttribute("id", "paper-textarea");

    paper.innerHTML = `
    <div id="bulles-task-row">
    </div>
  <div id="closer-paper-textarea"></div>
  <div class="paper-main main-task">

  <div class="parameter-task-bar"> 
  ${createDataInpuTask("debut", "Début ")}
  ${createDataInpuTask("fin", "Fin ")}
  </div>

  <textarea class="msg-task-title" id="title-task-paper" placeholder="Titre de la tache" autofocus></textarea>
  <textarea class="msg-task-descri" id="descri-task-paper" placeholder="A propos de la tache"></textarea>
  
   </div>
  <div class="bar-paper">

  <div class="btn-bar-paper-two"  id="addeur-sousTache">
    <div class="text-btn-paper">Ajouter une sous-Tache </div>
    <div class="icon-btn-paper"><i class="fas fa-plus"></i></div>
  </div>

      <label class="utils-icon" for="img-btn"> <i class="fas fa-image"></i> </label>
      <input type="file" id="img-btn" name="img-btn"/>
      <div class="btn-bar-paper"  id="planificateur">
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
      setUpTextAreas();
    }, 20);
  }
}

function createTaskFinalizer() {
  let taskSpecfification = document.createElement("div");
  createHider();
  taskSpecfification.setAttribute("id", "task-specification");
  taskSpecfification.innerHTML = `
  <div class="title-specification">Personnalisation</div>
  <div class="input-spec">
      <div class="label-spec">Catégorie</div>
      <select name="" id="">
          <option value="">1fdsq</option>
          <option value="">12fdsqfdsq</option>
          <option value="">13fdsqfdqs</option>
      </select>
  </div>
  <div class="input-spec">
      <div class="label-spec">Importance</div>
      <select name="" id="">
          <option value="">Très important</option>
          <option value="">Urgent</option>
          <option value="">Neutre</option>
          <option value="">A faire ou pas</option>

      </select>
  </div>
  <div class="input-spec-bulls">
      <div class="label-spec">Couleur </div>
      <div class="bulls-container">
          <div class="bull-color pinkMe" colorValue=""></div>
          <div class="bull-color greenMe" colorValue=""></div>
          <div class="bull-color purpleMe" colorValue=""></div>
          <div class="bull-color blueMe" colorValue=""></div>
          <div class="bull-color orangeMe" colorValue=""></div>
      </div>
  </div>
  <div class="footer-specification">
      <div class="button-btn-spec">
          Valider
      </div>
  </div>
  `;
  document.body.appendChild(taskSpecfification);
}

function removeTaskFinalizer() {
  let taskSpecfification = document.getElementById("task-specification");
  if (taskSpecfification != undefined) {
    taskSpecfification.style.opacity = 0;
    setTimeout(() => {
      taskSpecfification.parentNode.removeChild(taskSpecfification);
    }, 300);
  }
}

function createDataInpuTask(classToAdd, label) {
  let now = new Date();
  let nowStringDate = getDateNow();
  let nowStringTime = getTimeNow();
  let date = `
  <div class="date-task-paper">
      <label>${label}</label>
      <input type="date" id="${classToAdd}-date" value="${nowStringDate}"/>
      <input type="time" id="${classToAdd}-time" value="${nowStringTime}"/>
  </div>
  `;
  return date;
}
function getDateNow() {
  let now = new Date();
  let nowStringDate =
    now.getFullYear() +
    "-" +
    fillWithZero(now.getMonth() + 1) +
    "-" +
    fillWithZero(now.getDate());
  return nowStringDate;
}

function getTimeNow() {
  let now = new Date();
  let nowStringTime =
    fillWithZero(now.getHours()) + ":" + fillWithZero(now.getMinutes());
  return nowStringTime;
}
function fillWithZero(object) {
  let text = object.toString();
  if (text.length < 2) {
    text = "0" + text;
  }
  return text;
}

function saveDataTask() {
  let paper = document.querySelector(".paper-main");
  let debutDate = document.getElementById("debut-date");
  let debutTime = document.getElementById("debut-time");
  let finDate = document.getElementById("fin-date");
  let finTime = document.getElementById("fin-time");
  let titreTask = document.getElementById("title-task-paper");
  let descriptionTask = document.getElementById("descri-task-paper");
  let bullesRow = document.getElementById("bulles-task-row");

  if (paper.classList.contains("main-task")) {
    tasksGlobale.name = titreTask.value;
    tasksGlobale.details = descriptionTask.value;
    tasksGlobale.debut = debutDate.value + " " + debutTime.value;
    tasksGlobale.estimation_fin = finDate.value + " " + finTime.value;
    paper.classList.remove("main-task");
    bullesRow.innerHTML += createBullTask(tasksGlobale.name, "tache-P", "-1");
  } else {
    let sousTache = {
      nom: titreTask.value,
      details: descriptionTask.value,
      debut: debutDate.value + " " + debutTime.value,
      estimation_fin: finDate.value + " " + finTime.value,
    };
    bullesRow.innerHTML += createBullTask(
      sousTache.nom,
      "soustache-P",
      tasksGlobale.sousTaches.length
    );
    tasksGlobale.sousTaches.push(sousTache);
  }
  setUpBullesTask();
  console.log(tasksGlobale);
}

function setUpBullesTask() {
  let taskFarany = document.querySelectorAll(".bulle-task-paper");
  taskFarany.forEach((task) => {
    task.addEventListener("click", reAddData);
  });
}

function reAddData() {
  let paper = document.querySelector(".paper-main");
  let taskCible = this;
  let num = +taskCible.getAttribute("numero");
  // champs
  let debutDate = document.getElementById("debut-date");
  let debutTime = document.getElementById("debut-time");
  let finDate = document.getElementById("fin-date");
  let finTime = document.getElementById("fin-time");
  let titreTask = document.getElementById("title-task-paper");
  let descriptionTask = document.getElementById("descri-task-paper");
  //
  if (+num == -1) {
    paper.classList.add("main-task");
    debutDate.value = tasksGlobale.debut.split(" ")[0];
    debutTime.value = tasksGlobale.debut.split(" ")[1];
    finDate.value = tasksGlobale.estimation_fin.split(" ")[0];
    finTime.value = tasksGlobale.estimation_fin.split(" ")[1];
    titreTask.value = tasksGlobale.name;
    descriptionTask = tasksGlobale.details;
  } else {
    debutDate.value = tasksGlobale.sousTaches[num].debut.split(" ")[0];
    debutTime.value = tasksGlobale.sousTaches[num].debut.split(" ")[1];
    finDate.value = tasksGlobale.sousTaches[num].estimation_fin.split(" ")[0];
    finTime.value = tasksGlobale.sousTaches[num].estimation_fin.split(" ")[1];
    titreTask.value = tasksGlobale.sousTaches[num].nom;
    descriptionTask = tasksGlobale.sousTaches[num].details;
  }
}

function addSousTache() {
  let titreTask = document.getElementById("title-task-paper");
  let descriptionTask = document.getElementById("descri-task-paper");
  //
  saveDataTask();
  cleanPaper();
  //
  titreTask.setAttribute("placeholder", "Titre sous-tache");
  descriptionTask.setAttribute("placeholder", "A propos de la sous-tache");
}

function cleanPaper() {
  let debutDate = document.getElementById("debut-date");
  let debutTime = document.getElementById("debut-time");
  let finDate = document.getElementById("fin-date");
  let finTime = document.getElementById("fin-time");
  let titreTask = document.getElementById("title-task-paper");
  let descriptionTask = document.getElementById("descri-task-paper");
  debutDate.value = getDateNow();
  debutTime.value = getTimeNow();
  finDate.value = getDateNow();
  finTime.value = getTimeNow();
  titreTask.value = "";
  descriptionTask.value = "";
}

function setUpPaperTasks() {
  let paper = document.getElementById("paper-textarea");
  let planificateur = document.getElementById("planificateur");
  let taskAddeur = document.getElementById("addeur-sousTache");
  taskAddeur.addEventListener("click", addSousTache);
  planificateur.addEventListener("click", createTaskFinalizer);
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
