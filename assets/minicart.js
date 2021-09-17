const openMiniCart = () => {
    showOverlay()
    document.getElementById("minicart").classList.add("active");
}

const closeMiniCart = () => {
    hiddeOverlay()
    document.getElementById("minicart").classList.remove("active");
}

const hiddeOverlay = () => {
    document.getElementById("overlay").style.display = "none";
}

const showOverlay = () => {
    document.getElementById("overlay").style.display = "block";
}