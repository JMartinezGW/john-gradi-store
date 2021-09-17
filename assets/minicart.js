const openMiniCart = () => {
    showOverlay()
    getProductsMiniCart()
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

const getProductsMiniCart = async () => {
    try {
        const request = await fetch('/cart.js')
        console.log(request)
    } catch (error) {
        console.error(error)
    }
}