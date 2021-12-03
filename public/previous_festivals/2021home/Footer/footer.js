var acc = document.getElementsByClassName("footer-title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the footerSublinkContainer */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active footerSublinkContainer */
    var footerSublinkContainer = this.nextElementSibling;
    if (footerSublinkContainer.style.display === "block") {
      footerSublinkContainer.style.display = "none";
    } else {
      footerSublinkContainer.style.display = "block";
    }
  });
}