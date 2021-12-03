let swapviews = document.querySelectorAll(".swap-view");
let view1Box = document.querySelector("#view1");
let view2Box = document.querySelector("#view2");
swapviews.forEach(function(swapview) {
    swapview.addEventListener("click", function() {
        swap_the_view(this);
    });
});
function swap_the_view(swapper) {
    let activeswap = document.querySelector(".swap-view-active");
    if (activeswap == swapper) {
        console.log("same tbh");
        return;
    }
    activeswap.classList.remove("swap-view-active");
    swapper.classList.add("swap-view-active");
    let swapval = swapper.getAttribute("value");
    if (swapval == 1) {
        view1Box.classList.add("hide-mobile");
        view2Box.classList.remove("hide-mobile");
        view1Box.classList.remove("display-mobile");
        view2Box.classList.add("display-mobile");
    }
    else if (swapval == 0) {
        view2Box.classList.add("hide-mobile");
        view1Box.classList.remove("hide-mobile");
        view1Box.classList.add("display-mobile");
        view2Box.classList.remove("display-mobile");
    }
}
