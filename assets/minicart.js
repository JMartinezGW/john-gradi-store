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
        if (request.status === 200) {
            const items = request.response.json()
            console.log(items)
            // for (let i = 0; i < array.length; i++) {
                
            // }
        }
    } catch (error) {
        console.error(error)
    }
}

const productProfile = (item) => {
    const html = `
    <div class="row">
        <div class="col-3">
            ${item.product_title}
        </div>
        <div class="col-4">
            ${item.product_title}
        </div>
        <div class="col-2">
            <input type="button" onclick="${item.quantity++}" value="-">
            <input type="button" onclick="${item.quantity--}" value="+">
        </div>
        <div class="col-3">
            ${(item.price * item.quantity)}
        </div>
    </div>
    `
    return html
}