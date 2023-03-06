function createHider() {
  let hider = document.createElement("div");
  hider.setAttribute("id", "hider");
  let height = window.innerHeight;
  hider.style.height = height + "px";
  window.addEventListener("resize", () => {
    height = window.innerHeight;
    hider.style.height = height + "px";
  });
  document.body.prepend(hider);
  setTimeout(() => {
    hider.style.opacity = 1;
  }, 20);
  hider.addEventListener("click", () => {
    removeNavbar();
  });
}

function removeNavbar() {
  let hider = document.getElementById("hider");
  if (hider != undefined) {
    hider.style.opacity = 0;
    setTimeout(() => {
      hider.parentNode.removeChild(hider);
    }, 200);
  }
}
