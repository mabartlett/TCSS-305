function main() {
  var s = "SGVsbG8sIGN1cmlvdXMuIEknbSBhZnJhaWQgeW91IHdvbid0IGZpbmQgYW55dGhpbmcg"
          + "aGVyZSwgYnV0IEkgYXBwcmVjaWF0ZSB5b3VyIGVudGh1c2lhc20u";
  console.log(atob(s));
  
  // Display navbar list when hamburger icon is pressed.
  var Nav = document.getElementById("Nav");
  var NavButton = document.getElementById("NavButton");
  NavButton.addEventListener("click", function() {
    if (Nav.dataset.showList == "true") {
      Nav.dataset.showList = false;
      NavButton.textContent = "\u2261";
    } else {
      Nav.dataset.showList = true;
      NavButton.textContent = "\u00D7";
    }
  });
}

main();