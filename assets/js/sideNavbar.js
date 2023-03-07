data = [
  {
    name: " Mes taches",
    icon: "fas fa-tasks",
    linkTo: "tasks",
  },
  {
    name: " Catégories",
    icon: "fas fa-shapes",
    underlinks: [
      {
        name: "Sport",
        linkTo: "sport",
      },
      {
        name: "Cuisine",
        linkTo: "cuisine",
      },
      {
        name: "Voyage",
        linkTo: "voyage",
      },
    ],
  },
  {
    name: " Agenda",
    icon: "fas fa-calendar-alt",
    linkTo: "agenda",
  },
  {
    name: "Statistiques",
    icon: "fas fa-chart-bar",
    linkTo: "stat",
  },
];
/// auto set
buildNavbar(data);
setUpNavbar();
setUpSize();
var activeTab = undefined;

//Functions resize

function bigNav() {
  let resizer = document.getElementById("resizer-navbar");
  let navbar = document.getElementById("navbar-left");
  navbar.classList.add("full-nav");
  navbar.classList.remove("small-nav");
  resizer.classList.remove("small-nav-on");
}
function setUpSize() {
  let resizer = document.getElementById("resizer-navbar");
  let navbar = document.getElementById("navbar-left");
  resizer.addEventListener("click", () => {
    if (navbar.classList.contains("full-nav")) {
      navbar.classList.remove("full-nav");
      navbar.classList.add("small-nav");
      resizer.classList.add("small-nav-on");
      closeAllOpenUnderLink();
    } else {
      bigNav();
    }
  });
}

function closeAllOpenUnderLink() {
  let rows = document.querySelectorAll(".row-nav");
  rows.forEach((row) => {
    if (row.children[1] != undefined) {
      desactiveUnderLink(row);
    }
  });
}
/// Functions Link
function setUpNavbar() {
  organiseUnderLink();
  paging();
}

function paging() {
  let links = document.querySelectorAll(".link");
  links.forEach((link) => {
    let target = link.getAttribute("target");
    link.addEventListener("click", () => {
      activeTab = target;
      createPaper(link, "right", 0);
    });
  });
}
function organiseUnderLink() {
  let rows = document.querySelectorAll(".row-nav");
  rows.forEach((row) => {
    if (row.children[1] != undefined) {
      underLinks(row);
    } else {
      simpleLink(row);
    }
  });
  rearrageactiveRow();
  setUpUnderLinks();
}
/**
 *
 * @param {HTMLElement} row
 */
function underLinks(row) {
  let top = row.firstElementChild;
  let iconDrop = top.lastElementChild;
  let underlink = row.children[1];
  let sizeUnderlinks = underlink.childElementCount;
  let height = 2.5 * +sizeUnderlinks;
  top.addEventListener("click", () => {
    if (underlink.getAttribute("active") == null) {
      underlink.style.height = height + "rem";
      underlink.setAttribute("active", "");
      animateUnderLinks(underlink, true);
      iconDrop.classList.add("rotate-up");
      bigNav();
    } else {
      underlink.removeAttribute("style");
      underlink.removeAttribute("active");
      animateUnderLinks(underlink, false);
      iconDrop.classList.remove("rotate-up");
    }
  });
}
function setUpUnderLinks() {
  let rowsUnderLink = document.querySelectorAll(".row-under-content");
  rowsUnderLink.forEach((underlink) => {
    let top = underlink.parentElement.parentElement.firstElementChild;
    underlink.addEventListener("click", () => {
      rearrageactiveUnderLink(top);

      underlink.classList.add("active-underLink");
      desactiveActiveUnderLink(underlink);
      top.classList.add("row-active");
    });
  });
}

function desactiveActiveUnderLink(underlinkMe) {
  let rowsUnderLink = document.querySelectorAll(".row-under-content");
  rowsUnderLink.forEach((underlink) => {
    if (underlink != underlinkMe) {
      underlink.classList.remove("active-underLink");
    }
  });
}

//desactive une liste déroulante  => a utilisé si il est active
function desactiveUnderLink(row) {
  let underlink = row.children[1];
  let links = Array.from(underlink.children);
  let timer = 10;
  let iconDrop = row.children[0].lastElementChild;
  iconDrop.classList.remove("rotate-up");
  underlink.removeAttribute("style");
  underlink.removeAttribute("active");
  links.forEach((link) => {
    setTimeout(() => {
      link.removeAttribute("style");
    }, timer);
    timer += 80;
  });
}
/**
 *
 * @param {HTMLElement} row
 */
function animateUnderLinks(element, status) {
  let links = Array.from(element.children);
  let timer = 10;
  links.forEach((link) => {
    if (status == true) {
      setTimeout(() => {
        link.style.opacity = 1;
      }, timer);
    } else {
      setTimeout(() => {
        link.removeAttribute("style");
      }, timer);
    }
    timer += 80;
  });
}

function simpleLink(row) {
  let top = row.firstElementChild;
}
// quand on click sur un sous lien
function rearrageactiveUnderLink(top) {
  let topRows = document.querySelectorAll(".row-nav");
  topRows.forEach((row) => {
    let topChild = row.firstElementChild;
    if (row.children[1] != undefined && row.children[0] != top) {
      topChild.classList.remove("row-active");
      let iconDrop = row.children[0].lastElementChild;
      iconDrop.classList.remove("rotate-up");
      desactiveUnderLink(row);
    } else {
      topChild.classList.remove("row-active");
    }
  });
}

function rearrageactiveRow() {
  let topRows = document.querySelectorAll(".top-content-row");
  topRows.forEach((row) => {
    let unders = row.parentElement.children[1];
    row.addEventListener("click", () => {
      if (unders == undefined) {
        topRows.forEach((row2) => {
          // if (row2.classList.contains("row-active")) {
          row2.classList.remove("row-active");
          if (row2.parentElement.children[1] != undefined) {
            if (row2 != row) {
              desactiveUnderLink(row2.parentElement);
            }
            // }
          }
        });
        desactiveActiveUnderLink(null);
        row.classList.add("row-active");
      }
    });
  });
}

/**
 *
 * @param {Array} datas
 */
function buildNavbar(datas) {
  let navbar = document.createElement("div");
  navbar.setAttribute("id", "navbar-left");
  navbar.classList.add("full-nav");
  let resize = document.createElement("div");
  resize.setAttribute("id", "resizer-navbar");
  resize.innerHTML = `<i class="fas fa-angle-left"></i>`;
  navbar.appendChild(resize);
  datas.forEach((data) => {
    navbar.appendChild(buildRowNav(data));
  });
  //
  let structure = document.getElementById("structure");
  structure.prepend(navbar);
  // for another time
  //return navbar;
}

function buildRowNav(data) {
  let row = document.createElement("div");
  row.classList.add("row-nav");
  ///
  let top = document.createElement("div");
  top.classList.add("top-content-row");
  //

  top.innerHTML = `
  <div class="icon-nav"> <i class="${data.icon}"></i> </div>
  <div class="text-nav">${data.name}</div>
  `;

  // add the top content to the row
  row.appendChild(top);
  // add the under link to the row
  if (data.underlinks != undefined) {
    let under = document.createElement("div");
    under.classList.add("under-content-rows");
    data.underlinks.forEach((data) => {
      under.appendChild(addUnderLinks(data));
    });
    top.innerHTML += `
    <div class="dropdown-icon"><i class="fas fa-angle-down"></i></div>
    `;
    row.appendChild(under);
  } else {
    top.classList.add("link");
    top.setAttribute("target", data.linkTo);
  }

  return row;
}

function addUnderLinks(data) {
  let row = document.createElement("div");
  row.classList.add("row-under-content");
  row.classList.add("link");
  row.setAttribute("target", data.linkTo);
  row.innerHTML = `
    <div class="under-target" >${data.name}</div>
    `;
  return row;
}
