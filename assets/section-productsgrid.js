const myProductList = document.getElementsByClassName('myproduct__box')
const productVariant = []
for (let i = 0; i < myProductList.length; i++) {
    myProductList[i].addEventListener('mouseover', function (event) {
        const imagen = event.target.attributes.imagen.value // getting img from attibute html
        const productId = event.target.attributes.product.value
        productVariant[productId] = event.target.attributes.variant
        document.getElementById('product-main-' + productId).src = imagen
    });
}
for (let i = 0; i < myProductList.length; i++) {
    myProductList[i].addEventListener('click', function (event) {
        const imagen = event.target.attributes.imagen.value // getting img from attibute html
        const productId = event.target.attributes.product.value
        productVariant[productId] = event.target.attributes.variant
        console.log(productVariant[productId])
        document.getElementById('product-main-' + productId).src = imagen
    });
}
const addToCartBtnList = document.getElementsByClassName('myproduct__btn')
for (let i = 0; i < addToCartBtnList.length; i++) {
    addToCartBtnList[i].addEventListener('click', async function (event) {
        const variantId = (productVariant[event.target.attributes.product.value] ? productVariant[event.target.attributes.product.value] : event.target.attributes.variant.value)
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
        console.log('request')
        console.log(request)
    });
}