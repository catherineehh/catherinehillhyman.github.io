function dropItDown(){
document.getElementByID("cpt114").classList.toggle("show");
}

window.onclick = function(event) {
  if(!event.target.matches(".dropButton")) {
    var dropdowns = document.getElementsByClassName("dropList");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropDown = dropdowns[i];
      if (openDropdown.classList.contains("show")){
        openDropdown.classList.remove("show");
        }
      }
    }
  }
