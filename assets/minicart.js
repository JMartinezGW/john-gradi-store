const openMiniCart = () => {
    showOverlay()
    document.getElementById('minicart').style.display = 'block';
}

const closeMiniCart = () => {
    hiddeOverlay()
    document.getElementById('minicart').style.display = 'none';
}

const hiddeOverlay = () => {
    document.getElementById('overlay').style.display = 'none';
}

const showOverlay = () => {
    document.getElementById('overlay').style.display = 'block';
}