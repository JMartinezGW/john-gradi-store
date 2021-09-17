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
        fetch('/cart.js').then((res) => res.json())
        .then((response) => {
            const items = response.items
            let html = ''
            for (let i = 0; i < items.length; i++) {
                html += productProfile(items[i])
            }
            document.getElementById('minicart-products').innerHTML = html
        })
    } catch (error) {
        console.error(error)
    }
}

const productProfile = (item) => {
    const html = `
    <div class="row" id="product-profile-${item.id}">
        <div class="col-3">
            ${item.product_title}
        </div>
        <div class="col-4">
            ${item.product_title}
        </div>
        <div class="col-2">
            <input type="button" onclick="decreaseQuantity('${JSON.stringify(item)}')" value="-">
            <input type="button" onclick="incrementQuantity('${JSON.stringify(item)}')" value="+">
        </div>
        <div class="col-3">
            ${item.quantity}<br>
            ${(item.price * item.quantity)}
        </div>
    </div>
    `
    return html
}

const incrementQuantity = (item) => {
    const itemJSON = JSON.parse(item)
    itemJSON.quantity++
    document.getElementById('product-profile-' + itemJSON.id) = productProfile(itemJSON)
}

const decreaseQuantity = (item) => {
    const itemJSON = JSON.parse(item)
    itemJSON.quantity--
    document.getElementById('product-profile-' + itemJSON.id) = productProfile(itemJSON)
}