const myProductList = document.getElementsByClassName('myproduct__box')
const productVariant = []
for (let i = 0, j = myProductList.length; i < j; i++) {
    myProductList[i].addEventListener('mouseover', (event) => {
        const image = event.target.dataset.image // getting img from attibute html
        const productId = event.target.dataset.product
        document.getElementById('product-main-' + productId).src = image
    });
}
for (let i = 0, j = myProductList.length; i < j; i++) {
    myProductList[i].addEventListener('click', (event) => {
        const image = event.target.dataset.image // getting img from attibute html
        const productId = event.target.dataset.product
        const price = event.target.dataset.price
        productVariant[productId] = event.target.dataset.variant
        document.getElementById('product-main-' + productId).src = image
        document.getElementById('product-price-' + productId).innerText = price
    });
}
const addToCartBtnList = document.getElementsByClassName('myproduct__btn')
for (let i = 0, j = addToCartBtnList.length; i < j; i++) {
    addToCartBtnList[i].addEventListener('click', async (event) => {
        const variantId = (productVariant[event.target.dataset.product] ? productVariant[event.target.dataset.product] : event.target.dataset.variant)
        try {
            const request = await fetch('/cart/add.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items: [
                        {
                            quantity: 1,
                            id: variantId
                        }
                    ]
                })
            });
            if (request.status === 200) {
                // location.href="/cart"
                openMiniCart()
            } else {
                alert('Not enough stock')
            }
        } catch (error) {
            console.log('error')
            console.error(error)
        }
    });
}