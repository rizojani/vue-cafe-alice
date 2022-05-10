/** @format */

// alert("heloo");
function sidbarTogal() {
  let isExpanded = document.body.classList.contains("menu-expanded");
  console.log(isExpanded);
  if (isExpanded) {
    document.body.classList.remove("menu-expanded");
    //   document.body.removeClass("menu-expanded");
    document.body.classList.add("menu-collapsed");
  } else {
    document.body.classList.add("menu-expanded");
    document.body.classList.remove("menu-collapsed");
  }
}
