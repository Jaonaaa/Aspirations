///Auto
let dataList = ["Profil", "Thème", "Déconnexion"];
setUpAdder();
setUpParams();
setUpContainer();
//structure max height

function setUpContainer() {
  let header = +getComputedStyle(
    document.getElementById("header")
  ).height.replace("px", "");
  let rowTicket = +getComputedStyle(
    document.getElementById("rows-tickets")
  ).height.replace("px", "");
  let mainContainer = document.getElementById("data-container");
  //
  let windowHeight = window.innerHeight;
  //
  let maxHeight = windowHeight - (header + rowTicket);
  mainContainer.style.maxHeight = maxHeight + "px";
  window.addEventListener("resize", () => {
    header = document.getElementById("header").getBoundingClientRect().height;
    rowTicket = document
      .getElementById("rows-tickets")
      .getBoundingClientRect().height;
    maxHeight = windowHeight - (header + rowTicket);
    mainContainer.style.maxHeight = maxHeight + "px";
  });
}

///
function setUpParams() {
  let params = document.querySelectorAll(".icon-parameter");
  params.forEach((param) => {
    param.addEventListener("click", () => {
      if (param.classList.contains("active-paper")) {
        removeOtherPaper();
        param.classList.remove("active-paper");
      } else {
        setTimeout(() => {
          param.classList.add("active-paper");
        }, 30);
        createPaper(param, createList(dataList), "bottom", 0);
        removeActivePaper(param);
      }
    });
  });
}

function removeActivePaper(paramRep) {
  let params = document.querySelectorAll(".icon-parameter");
  params.forEach((param) => {
    if (paramRep != param) {
      param.classList.remove("active-paper");
    }
  });
}
/**
 *
 * @param {Array} data
 * @returns
 */
function createList(data) {
  let list = document.createElement("div");
  list.classList.add("list-content");
  data.forEach((data) => {
    list.innerHTML += `
            <div class="row-list">${data}</div>
        `;
  });
  return list;
}
//////////ADDER ////////////////

function setUpAdder() {
  let adder_btn = document.getElementById("btn-add-something");
  let activate = false;
  adder_btn.addEventListener("click", () => {
    if (activate == false) {
      adder_btn.classList.add("active-btn-something");
      activate = true;
      getBtnSomething(adder_btn);
    } else {
      adder_btn.classList.remove("active-btn-something");
      activate = false;
      removeBtnSomething();
    }
  });
}
/**
 *
 * @param {HTMLElement} btnSomething
 */
/// show the other something btn XD
function getBtnSomething(btnSomething) {
  let topBtn = btnSomething.getBoundingClientRect().top;
  let btnsData = [
    {
      target: "note",
      icon: "fas fa-file",
    },
    {
      target: "task-paper",
      icon: "fas fa-project-diagram",
    },
  ];
  let transformY = 4;
  let root = document.getElementById("root");
  btnsData.forEach((btn) => {
    let btnElement = document.createElement("div");
    btnElement.classList.add("btn-something");
    btnElement.innerHTML += `<i class="${btn.icon}"></i>`;
    root.appendChild(btnElement);
    //
    btnElement.addEventListener("click", () => {
      if (btn.target == "task-paper") {
        createPaperTask();
      }
    });
    //
    setTimeout(() => {
      btnElement.style.transform = `translateY(-${transformY}rem)`;
      transformY += 4;
    }, 100);
  });
}

function removeBtnSomething() {
  let btns = document.querySelectorAll(".btn-something");
  btns.forEach((btn) => {
    btn.style.transform = "none";
    setTimeout(() => {
      btn.parentNode.removeChild(btn);
    }, 100);
  });
}
