/**
 *
 * Automatic
 */
getAllcategories();

//
function getTheBoy() {
  let xhr;
  try {
    xhr = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e2) {
      try {
        xhr = new XMLHttpRequest();
      } catch (e3) {
        xhr = false;
      }
    }
  }
  return xhr;
}
function getAllcategories() {
  let xhr = getTheBoy();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var retour = JSON.parse(xhr.responseText);
        if (retour.status == "error") {
        } else {
          console.log(retour);
          categoriesData = retour;
        }
      } else {
        console.log(xhr.status);
      }
    }
  };

  xhr.addEventListener("error", function (event) {
    alert("Oups! Quelque chose s'est mal passé lors de la publication .");
  });
  xhr.open("POST", `${base_url}index.php/Select/getallcategories`, true);
  xhr.send(null);
}

function switchContainer() {
  let container = document.getElementById("main-container");
  container.style.opacity = 0;
  setTimeout(() => {
    container.style.opacity = 1;
  }, 300);
}
