setUpTextAreas();
//task variables
var tasksGlobale = {
  nom: "",
  categorie: "",
  details: "",
  couleur: "",
  idstatus: "",
  sousTaches: [],
  pics: [],
  //surplus
  debut: "",
  estimation: "",
};
var repereBull = undefined;
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
function setBullTask(text, numerotation) {
  let tasks = document.querySelectorAll(".bulle-task-paper");
  tasks[numerotation].innerHTML = `
      ${text}
  `;
}

function createPaperTask() {
  let paperExistant = document.querySelector("#paper-textarea");

  if (paperExistant == undefined) {
    tasksGlobale = {
      nom: "",
      categorie: "",
      details: "",
      couleur: "",
      idstatus: "",
      sousTaches: [],
      pics: [],
      //surplus
      debut: "",
      estimation: "",
    };

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

      <label class="utils-icon" for="img-btn"> 
      <div id="nbr-image-down"> 

      </div>
      <i class="fas fa-image"></i> 
      </label>
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

  if (tasksGlobale.nom.trim() == "") {
    let result = saveDataTask();
    if (result == "error") {
      createSidePopUp("Veuiller planifier quelque chose :(", "error");
      return 0;
    }
    // createSidePopUp("Planidied", "good");
  }
  createHider();
  taskSpecfification.setAttribute("id", "task-specification");
  //   <select name="" id="importance-task">
  //   <option value="1">Très important</option>
  //   <option value="2">Urgent</option>
  //   <option value="3">Neutre</option>
  //   <option value="4">A faire ou pas</option>

  // </select>
  taskSpecfification.innerHTML = `
  <div class="title-specification">Personnalisation</div>
  <div class="input-spec">
      <div class="label-spec">Catégorie</div>
      <select name="" id="categorie-task">
          <option value="1">Devoir d'école</option>
          <option value="2">Cuisine</option>
          <option value="3">sport</option>
      </select>
  </div>
  <div class="input-spec">
      <div class="label-spec">Importance</div>
     <input type="range" min="0" max="12" id="importance-task"/>
  </div>
  <div class="input-spec-bulls">
      <div class="label-spec">Couleur </div>
      <div class="bulls-container">
          <div class="bull-color pinkMe" colorValue="1"></div>
          <div class="bull-color greenMe" colorValue="2"></div>
          <div class="bull-color purpleMe" colorValue="3"></div>
          <div class="bull-color blueMe" colorValue="4"></div>
          <div class="bull-color orangeMe" colorValue="5"></div>
      </div>
  </div>
  <div class="footer-specification">
      <div class="button-btn-spec" id="btn-validation-task">
          Valider
      </div>
  </div>
  `;
  document.body.appendChild(taskSpecfification);
  setUpPersonnalisation();
  BullsColor();
}

function setUpPersonnalisation() {
  let importance = document.getElementById("importance-task");
  let categorie = document.getElementById("categorie-task");
  let btnValidationTask = document.getElementById("btn-validation-task");
  btnValidationTask.addEventListener("click", () => {
    let importanceValue = importance.value;
    let categorieValue = categorie.value;
    let color = document.querySelector(".selected-bull");
    if (color == undefined) {
      // default color
      color = 1;
    }
    tasksGlobale.idstatus = importanceValue;
    tasksGlobale.categorie = categorieValue;
    tasksGlobale.couleur = color.getAttribute("colorValue");
    console.log(tasksGlobale);
    sendTask(tasksGlobale);
  });
}

function BullsColor() {
  let bulls = document.querySelectorAll(".bull-color");
  bulls.forEach((bull) => {
    bull.addEventListener("click", myColor);
  });
}
function myColor() {
  this.classList.add("selected-bull");
  let bulls = document.querySelectorAll(".bull-color");
  bulls.forEach((bull) => {
    if (bull != this) {
      bull.classList.remove("selected-bull");
    }
  });
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
  if (titreTask.value.trim() == "") {
    setUpBullesTask();
    return "error";
  }
  if (paper.classList.contains("main-task")) {
    tasksGlobale.nom = titreTask.value;
    tasksGlobale.details = descriptionTask.value;
    tasksGlobale.debut = debutDate.value + " " + debutTime.value;
    tasksGlobale.estimation = finDate.value + " " + finTime.value;
    paper.classList.remove("main-task");
    //
    if (repereBull != -1) {
      bullesRow.innerHTML += createBullTask(tasksGlobale.nom, "tache-P", "-1");
    } else {
      reArrangeData("tache");
    }
  } else {
    /// sous tache non existant

    if (repereBull == undefined) {
      let sousTache = {
        nom: titreTask.value,
        details: descriptionTask.value,
        debut: debutDate.value + " " + debutTime.value,
        estimation: finDate.value + " " + finTime.value,
      };
      bullesRow.innerHTML += createBullTask(
        sousTache.nom,
        "soustache-P",
        tasksGlobale.sousTaches.length
      );
      tasksGlobale.sousTaches.push(sousTache);
    }
    // sous tache existant
    else {
      reArrangeData("sousTache");
    }
  }
  setUpBullesTask();
  console.log(tasksGlobale);
}
//
//
//
// reArrage the data in TaskGlobale variable
function reArrangeData(type) {
  let debutDate = document.getElementById("debut-date");
  let debutTime = document.getElementById("debut-time");
  let finDate = document.getElementById("fin-date");
  let finTime = document.getElementById("fin-time");
  let titreTask = document.getElementById("title-task-paper");
  let descriptionTask = document.getElementById("descri-task-paper");
  //

  //
  // reArrange the data in TaskGlobale
  if (type == "tache") {
    tasksGlobale.nom = titreTask.value;
    tasksGlobale.details = descriptionTask.value;
    tasksGlobale.debut = debutDate.value + " " + debutTime.value;
    tasksGlobale.estimation = finDate.value + " " + finTime.value;
    //

    //
    setBullTask(tasksGlobale.nom, 0);
    //
  } else if (type == "sousTache") {
    //
    let sousTache = {
      nom: titreTask.value,
      details: descriptionTask.value,
      debut: debutDate.value + " " + debutTime.value,
      estimation: finDate.value + " " + finTime.value,
    };
    //
    //
    tasksGlobale.sousTaches[repereBull] = sousTache;
    setBullTask(sousTache.nom, +repereBull + 1);
  }
  //
  //
}

//
//
//

function setUpBullesTask() {
  let taskFarany = document.querySelectorAll(".bulle-task-paper");
  taskFarany.forEach((task) => {
    task.addEventListener("click", reAddData);
  });
}

function reAddData() {
  saveDataTask();
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
  repereBull = +num;
  //
  if (+num == -1) {
    paper.classList.add("main-task");
    debutDate.value = tasksGlobale.debut.split(" ")[0];
    debutTime.value = tasksGlobale.debut.split(" ")[1];
    finDate.value = tasksGlobale.estimation.split(" ")[0];
    finTime.value = tasksGlobale.estimation.split(" ")[1];
    titreTask.value = tasksGlobale.nom;
    descriptionTask.value = tasksGlobale.details;
    titreTask.setAttribute("placeholder", "Titre Tache");
    descriptionTask.setAttribute("placeholder", "A propos de la Tache");
  } else {
    debutDate.value = tasksGlobale.sousTaches[num].debut.split(" ")[0];
    debutTime.value = tasksGlobale.sousTaches[num].debut.split(" ")[1];
    finDate.value = tasksGlobale.sousTaches[num].estimation.split(" ")[0];
    finTime.value = tasksGlobale.sousTaches[num].estimation.split(" ")[1];
    titreTask.value = tasksGlobale.sousTaches[num].nom;
    descriptionTask.value = tasksGlobale.sousTaches[num].details;
    titreTask.setAttribute("placeholder", "Titre sous-tache");
    descriptionTask.setAttribute("placeholder", "A propos de la sous-tache");
  }
  //
}

function addSousTache() {
  let titreTask = document.getElementById("title-task-paper");
  let descriptionTask = document.getElementById("descri-task-paper");
  //
  let statusData = saveDataTask();
  cleanPaper();
  //
  if (statusData != "error") {
    titreTask.setAttribute("placeholder", "Titre sous-tache");
    descriptionTask.setAttribute("placeholder", "A propos de la sous-tache");
  } else {
    createSidePopUp("Veuiller donner un titre ", "error");
  }
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
  repereBull = undefined;
}

function setUpPaperTasks() {
  let paper = document.getElementById("paper-textarea");
  let planificateur = document.getElementById("planificateur");
  let taskAddeur = document.getElementById("addeur-sousTache");
  taskAddeur.addEventListener("click", addSousTache);
  planificateur.addEventListener("click", createTaskFinalizer);
  removePaperTasks(paper);
  setUpImageDownloader();
}

function setUpImageDownloader() {
  let btn_img = document.getElementById("img-btn");
  let compteurBox = document.getElementById("nbr-image-down");
  var compteur = 0;
  btn_img.addEventListener("input", () => {
    compteur++;
    compteurBox.style.display = "flex";
    compteurBox.innerHTML = compteur;
    //file
    saveImage(btn_img.files[0], tasksGlobale.pics);
    //
  });
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

function sendTask(data) {
  let xhr = getTheBoy();
  let formData = new FormData();
  let paper = document.getElementById("paper-textarea");
  formData.append("task", JSON.stringify(data));
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var retour = JSON.parse(xhr.responseText);
        if (retour.status == "error") {
          createSidePopUp(retour.detail, "error");
        } else {
          createSidePopUp("Tache enregistré", "good");
          removeNavbar();
          removePaperTasks(paper);
        }
      } else {
        console.log(xhr.status);
      }
    }
  };

  xhr.addEventListener("error", function (event) {
    alert("Oups! Quelque chose s'est mal passé lors de la publication .");
  });

  xhr.open("POST", `${base_url}index.php/Insert/inserttache`, true);
  xhr.send(formData);
}
