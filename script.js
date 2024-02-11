/*----side bar menu----*/
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
/*---see more--- projects---*/
function myFunction() {
    var x = document.getElementById("myDIV");
    var s = document.getElementById("seeMore");
    var l = document.getElementById("seeLess");
    if (x.style.display === "none") {
      x.style.display = "block";
      s.style.display= "none";
      l.style.display= "block";
    } else {
      x.style.display = "none";
      s.style.display= "block";
      l.style.display= "none";
    }
  }
/*---see more--- acknowledgment---*/
function myFunctionCert() {
  var xc = document.getElementById("myCert");
  var sc = document.getElementById("seeMoreCert");
  var lc = document.getElementById("seeLessCert");
  if (xc.style.display === "none") {
    xc.style.display = "block";
    sc.style.display= "none";
    lc.style.display= "block";
  } else {
    xc.style.display = "none";
    sc.style.display= "block";
    lc.style.display= "none";
  }
}
