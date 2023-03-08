var imagePath = "";

/**
 *
 * @param {*} file
 * @param {Array} pics
 */
function saveImage(file, pics) {
  let xhr = getTheBoy();
  let formData = new FormData();
  formData.append("fileToUpload", file);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var retour = JSON.parse(xhr.responseText);
        if (retour.status == "error") {
          createSidePopUp(retour.detail, "error");
        } else {
          createSidePopUp(base_url + retour.img, "image");
          pics.push(retour.img);
        }
      } else {
        console.log(xhr.status);
      }
    }
  };

  xhr.addEventListener("error", function (event) {
    alert("Oups! Quelque chose s'est mal passé lors de la publication .");
  });

  xhr.open("POST", `${base_url}index.php/Upload/uploadFile`, true);
  xhr.send(formData);
}
