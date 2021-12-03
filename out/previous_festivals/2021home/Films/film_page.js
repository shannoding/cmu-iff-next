let swapviews = document.querySelectorAll(".swap-view");
let asideBox = document.querySelector("aside");
let articleBox = document.querySelector("article");
swapviews.forEach(function(swapview) {
    swapview.addEventListener("click", function() {
        swap_the_view(this);
    });
});
function swap_the_view(swapper) {
    let activeswap = document.querySelector(".swap-view-active");
    if (activeswap == swapper) {
        console.log("same");
        return;
    }
    activeswap.classList.remove("swap-view-active");
    swapper.classList.add("swap-view-active");
    let swapval = swapper.getAttribute("value");
    if (swapval == 0) {
        asideBox.classList.add("hide-mobile");
        articleBox.classList.remove("hide-mobile");
        asideBox.classList.remove("display-mobile");
        articleBox.classList.add("display-mobile");
    }
    else if (swapval == 1) {
        articleBox.classList.add("hide-mobile");
        asideBox.classList.remove("hide-mobile");
        asideBox.classList.add("display-mobile");
        articleBox.classList.remove("display-mobile");
    }
}
