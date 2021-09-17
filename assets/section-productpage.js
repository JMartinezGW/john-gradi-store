let variantSelected = 0
const variants = document.getElementsByName('variant')
for (let i = 0; i < variants.length; i++) {
    variants[i].addEventListener('click', (event) => {
        const image = event.target.dataset.image
        const variantId = event.target.dataset.variant
        const price = event.target.dataset.price
        variantSelected = variantId
        document.getElementById('product-image').src = image
        document.getElementById('product-price').innerText = price
    });
}

document.getElementById('btn-add-cart').addEventListener('click', async () => {
    if (variantSelected === 0) {
        alert('First select a variant please')
    } else {
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
                            id: variantSelected
                        }
                    ]
                })
            });
            if (request.status === 200) {
                location.href="/cart"
                // openMiniCart()
            } else {
                alert('Not enough stock')
            }
        } catch (error) {
            console.log('error')
            console.error(error)
        }
    }
})