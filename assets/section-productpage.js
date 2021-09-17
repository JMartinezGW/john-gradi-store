let variantSelected = 0
const variants = document.getElementsByName('variant')
for (let i = 0; i < variants.length; i++) {
    variants[i].addEventListener('click', (event) => {
        const image = event.target.dataset.image
        const variantId = event.target.dataset.variant
        variantSelected = variantId
        document.getElementById('product-image').src = image
    });
}

document.getElementById('btn-add-cart').addEventListener('click', async (event) => {
    const variantId = (variantSelected !== 0 ? variantSelected : event.target.dataset.variant)
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
})