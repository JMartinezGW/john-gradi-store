const myProductList = document.getElementsByClassName('myproduct__box')
const productVariant = []
for (let i = 0; i < myProductList.length; i++) {
    myProductList[i].addEventListener('mouseover', function (event) {
        const image = event.target.attributes.image.value // getting img from attibute html
        const productId = event.target.attributes.product.value
        document.getElementById('product-main-' + productId).src = image
    });
}
for (let i = 0; i < myProductList.length; i++) {
    myProductList[i].addEventListener('click', function (event) {
        const image = event.target.attributes.image.value // getting img from attibute html
        const productId = event.target.attributes.product.value
        const price = event.target.attributes.price.value
        productVariant[productId] = event.target.attributes.variant.value
        document.getElementById('product-main-' + productId).src = image
        document.getElementById('product-price-' + productId).innerText = price
    });
}
const addToCartBtnList = document.getElementsByClassName('myproduct__btn')
for (let i = 0; i < addToCartBtnList.length; i++) {
    addToCartBtnList[i].addEventListener('click', async function (event) {
        const variantId = (productVariant[event.target.attributes.product.value] ? productVariant[event.target.attributes.product.value] : event.target.attributes.variant.value)
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