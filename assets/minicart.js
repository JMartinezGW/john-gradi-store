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

const getProductsMiniCart = () => {
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
            <img 
                src="${item.image}"
                style="max-height: 100px; max-width: 100%; height: auto; width: auto;"
            >
        </div>
        <div class="col-4">
            ${item.product_title}
        </div>
        <div class="col-2">
            <input class="minicart__btn-quantity" type="button" data-item='${JSON.stringify(item)}' onclick="decreaseQuantity(this)" value="-">
            <input class="minicart__btn-quantity" type="button" data-item='${JSON.stringify(item)}' onclick="incrementQuantity(this)" value="+">
        </div>
        <div class="col-3">
            Cantidad: ${item.quantity}<br>
            $${(item.price * item.quantity)}
        </div>
    </div>
    `
    return html
}

const incrementQuantity = (item) => {
    const itemJSON = JSON.parse(item.dataset.item)
    itemJSON.quantity++
    replaceHtmlProduct(itemJSON)
    changeCartRequest(itemJSON)
}

const decreaseQuantity = (item) => {
    const itemJSON = JSON.parse(item.dataset.item)
    itemJSON.quantity--
    replaceHtmlProduct(itemJSON)
    changeCartRequest(itemJSON)
}

const replaceHtmlProduct = (item) => {
    const tempBlockHtml = document.createElement('div')
    if (item.quantity > 0) { // show products with quantity > 0
        tempBlockHtml.innerHTML = productProfile(item)
    }
    document.getElementById('product-profile-' + item.id).replaceWith(tempBlockHtml)
}

const changeCartRequest = (item) => {
    try {
        fetch('/cart/change.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                quantity: item.quantity,
                id: item.key
            })
        }).then((res) => res.json())
        .then((response) => {
            for (let i = 0; i < response.items.length; i++) {
                if (response.items[i].id === item.id) {
                    if (response.items[i].quantity !== item.quantity) {
                        alert('Not enough stock')
                        item.quantity--
                        replaceHtmlProduct(item)
                        changeCartRequest(item)
                    }
                }
            }
        });
    } catch (error) {
        console.error(error)
    }
}