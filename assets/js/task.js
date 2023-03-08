let taskData = [
  {
    title: "Wallet App Design",
    category: "Design",
    content: "Lorem ipsum lor de le por",
    dateBegin: "4 Jun 2:34",
    dateEnd: "4 Jun 5:34",
    progression: 46,
    // red pink
    bgcolor: " rgb(250, 130, 130)",
  },
  {
    title: "School Homework ",
    category: "School",
    content: "Lorem ipsum lor de le por",
    dateBegin: "4 Jun 2:34",
    dateEnd: "4 Jun 5:34",
    progression: 46,
    // blue animé
    bgcolor: "rgb(0, 163, 212)",
  },
  {
    title: "Friends Trip",
    category: "Loisir",
    content: "Lorem ipsum lor de le por",
    dateBegin: "4 Jun 2:34",
    dateEnd: "4 Jun 5:34",
    progression: 76,
    // vert calme
    bgcolor: " rgb(0, 212, 0)",
  },
  {
    title: "Laver la voiture",
    category: "Corvée",
    content: "Lorem ipsum lor de le por",
    dateBegin: "4 Jun 2:34",
    dateEnd: "4 Jun 5:34",
    progression: 46,
    // orange
    bgcolor: "rgb(255, 179, 0)",
  },
];
getAllTask();

/**
 *
 * @param {Array} tasks
 * @param {String} titleSection
 */
function sectionRow(tasks, titleSection) {
  console.log(tasks);
  let sectionContainer = document.createElement("div");
  sectionContainer.classList.add("section-container");
  //
  let title = document.createElement("div");
  title.classList.add("title-section-about");
  title.innerHTML = `${titleSection}`;
  //
  let container = document.createElement("div");
  container.classList.add("container-section");
  tasks.forEach((task) => {
    container.appendChild(createTaskBox(task));
  });
  sectionContainer.appendChild(title);
  sectionContainer.appendChild(container);
  return sectionContainer;
}

function getTextCategory(id) {
  return categoriesData[+id - 1].nom;
}

function getColor(id) {
  id = +id;
  if (id == 1) {
    return "pinkMe";
  } else if (id == 2) {
    return "greenMe";
  } else if (id == 3) {
    return "purpleMe";
  } else if (id == 4) {
    return "blueMe";
  } else if (id == 5) {
    return "orangeMe";
  }
}

function createTaskBox(task) {
  let box = document.createElement("div");
  box.classList.add("task-container");
  //header);
  box.innerHTML = `
  <div class="header-task-container">
        <div class="title-task">${task.nom}</div>
        <div class="category-task ${getColor(task.couleur)}" 
        >${getTextCategory(task.categorie)} </div>
  </div>
  `;
  //body
  box.innerHTML += `
  <div class="body-task">
  ${task.details}
    </div>
  `;
  // footer
  box.innerHTML += ` 
  <div class="footer-task">
        <div class="date-task">
            <div class="icon-task"><i class="fas fa-clock"></i> </div>
            <div class="text-date">${task.dateBegin} - ${task.dateEnd}</div>
        </div>
        <div class="progression-task">
            <div class="progres-bar"></div>
            <div class="text-progress">${task.etat} %</div>
        </div>
    </div>
  `;
  return box;
}
function getAllTask() {
  let xhr = getTheBoy();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var retour = JSON.parse(xhr.responseText);
        if (retour.status == "error") {
        } else {
          console.log(retour);
          let main = document.getElementById("data-container");
          main.appendChild(sectionRow(retour, "Plus récent"));
        }
      } else {
        console.log(xhr.status);
      }
    }
  };

  xhr.addEventListener("error", function (event) {
    alert("Oups! Quelque chose s'est mal passé lors de la publication .");
  });
  xhr.open("POST", `${base_url}index.php/Select/getAllTask`, true);
  xhr.send(null);
}
