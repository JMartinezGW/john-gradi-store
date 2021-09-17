const openMiniCart = () => {
    showOverlay()
    document.getElementById('minicart').display = 'block';
}

const closeMiniCart = () => {
    hiddeOverlay()
    document.getElementById('minicart').display = 'none';
}

const hiddeOverlay = () => {
    document.getElementById('overlay').style.display = 'none';
}

const showOverlay = () => {
    document.getElementById('overlay').style.display = 'block';
}