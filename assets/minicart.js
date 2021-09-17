const openMiniCart = () => {
    showOverlay()
    console.log('opened')
}

const closeMiniCart = () => {
    hiddeOverlay()
    console.log('close')
}

const hiddeOverlay = () => {
    document.getElementById("overlay").style.display = "none";
}

const showOverlay = () => {
    document.getElementById("overlay").style.display = "block";
}