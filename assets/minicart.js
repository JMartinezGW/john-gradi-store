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
    console.log(JSON.stringify(item))
    const html = `
    <div class="row" id="product-profile-${item.id}">
        <div class="col-3">
            ${item.product_title}
        </div>
        <div class="col-4">
            ${item.product_title}
        </div>
        <div class="col-2">
            <input type="button" data-item='${JSON.stringify(item)}' onclick="decreaseQuantity(this)" value="-">
            <input type="button" data-item='${JSON.stringify(item)}' onclick="incrementQuantity(this)" value="+">
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
    const itemJSON = JSON.parse(item.dataset.item)
    itemJSON.quantity++
    replaceHtmlProduct(itemJSON)
}

const decreaseQuantity = (item) => {
    const itemJSON = JSON.parse(item.dataset.item)
    itemJSON.quantity++
    replaceHtmlProduct(itemJSON)
}


const replaceHtmlProduct = (item) => {
    const tempBlockHtml = document.createElement('div')
    tempBlockHtml.innerHTML = productProfile(item)
    document.getElementById('product-profile-' + item.id).replaceWith(tempBlockHtml)
}