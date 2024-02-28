const menuitems = document.getElementById("menuitems");
const menuicon = document.getElementById("menu-icon");

menuitems.style.maxHeight = "0px";

menuicon.addEventListener("click", (menuToggle) => {
  if (menuitems.style.maxHeight == "0px") {
    menuitems.style.maxHeight = "200px";
  } else {
    menuitems.style.maxHeight = "0px";
  }
});
menuToggle();
