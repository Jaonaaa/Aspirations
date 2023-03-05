/**
 *
 * @param {HTMLElement} anchor
 * @param {String} alignement
 */
function createPaper(anchor, content, emplacement) {
  if (anchor == undefined || checkElementDisplay(anchor)) {
    return null;
  }
  removeOtherPaper();
  let paper = document.createElement("div");
  paper.classList.add("paper");
  if (emplacement == "right") {
    rightPaper(paper, content, anchor);
  } else if (emplacement == "bottom") {
    bottomPaper(paper, content, anchor);
  }
}
/**
 *
 * @param {HTMLElement} paper
 * @param {HTMLElement} anchor
 */
function bottomPaper(paper, content, anchor) {
  //
  let triangle = document.createElement("div");
  triangle.classList.add("top-triangle");
  paper.appendChild(triangle);
  //
  let css = getComputedStyle(anchor);
  let extraTop = +css.height.replace("px", "") + 20;
  let extraright = +css.width.replace("px", "");
  /// get the exactPlace that where the paper should be placed
  ///
  let windowWidth = window.innerWidth;
  let top = anchor.getBoundingClientRect().top + extraTop;
  let right = windowWidth - anchor.getBoundingClientRect().left - extraright;

  window.addEventListener("resize", () => {
    if (!checkElementDisplay(anchor)) {
      windowWidth = window.innerWidth;
      top = anchor.getBoundingClientRect().top + extraTop;
      right = windowWidth - anchor.getBoundingClientRect().left - extraright;
      paper.style.right = right + "px";
      paper.style.top = top + "px";
    } else {
      let parent = paper.parentNode;
      if (parent != null) {
        parent.removeChild(paper);
      }
    }
  });
  //
  paper.appendChild(content);
  paper.style.right = right + "px";
  paper.style.top = top + "px";
  animatePaper(paper);
}
/**
 *
 * @param {HTMLElement} paper
 */
function animatePaper(paper) {
  paper.style.opacity = 0;
  // let paperExistant = document.querySelector(".paper");
  let height = 0;
  setTimeout(() => {
    document.body.appendChild(paper);
    height = paper.getBoundingClientRect().height;
  }, 30);

  setTimeout(() => {
    paper.style.minHeight = height + "px";
    paper.style.opacity = 1;

    removeBlur();
    // paper.style.padding = "0.5rem";
  }, 70);
}
function rightPaper(paper, content, anchor) {
  let css = getComputedStyle(anchor);
  let extraTop = +css.height.replace("px", "");
  let extraleft = +css.width.replace("px", "");
  /// get the exactPlace that where the paper should be placed
  ///
  let top = anchor.getBoundingClientRect().top;
  let left = anchor.getBoundingClientRect().left + extraleft - 10;
  window.addEventListener("resize", () => {
    if (!checkElementDisplay(anchor)) {
      top = anchor.getBoundingClientRect().top - extraTop;
      left = anchor.getBoundingClientRect().left + extraleft - 10;
      paper.style.right = left + "px";
      paper.style.top = top + "px";
    } else {
      let parent = paper.parentNode;
      if (parent != null) {
        parent.removeChild(paper);
      }
    }
  });
  //
  paper.appendChild(content);
  paper.style.left = left + "px";
  paper.style.top = top + "px";
  animatePaper(paper);
}

function removeOtherPaper() {
  let papers = document.querySelectorAll(".paper");
  papers.forEach((paper) => {
    paper.style.opacity = 0;
    paper.style.height = 0;
    paper.style.overflow = "hidden";
    setTimeout(() => {
      let parent = paper.parentNode;
      if (parent != null) {
        parent.removeChild(paper);
      }
    }, 30);
  });
}
/**
 *
 * @param {HTMLElement} anchor
 */
function checkElementDisplay(anchor) {
  let css = getComputedStyle(anchor);
  let missingAnchor = false;
  if (css.display == "none") {
    missingAnchor = true;
  }
  return missingAnchor;
}

function removeBlur() {
  let root = document.getElementById("root");
  let on = true;
  root.addEventListener("click", () => {
    if (on) {
      removeOtherPaper();
      on = false;
      removeActivePaper("");
    }
  });
}
