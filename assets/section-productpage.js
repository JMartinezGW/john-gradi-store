let variantSelected = 0
const variants = document.getElementsByName('variant')
for (let i = 0, j = variants.length;i < j; i++) {
    variants[i].addEventListener('click', (event) => {
        const image = event.target.dataset.image
        const variantId = event.target.dataset.variant
        const price = event.target.dataset.price
        variantSelected = variantId
        document.getElementById('product-image').src = image
        document.getElementById('product-price').innerText = price
    });
}

document.getElementById('btn-add-cart').addEventListener('click', async (event) => {
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
                if (event.target.dataset.bundle && event.target.dataset.bundle.length > 0) {
                    openModalBundle(event.target.dataset.bundle)
                } else {
                    location.href="/cart"
                }
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

const openModalBundle = (productHandle) => {
    document.getElementById('modal-bundle').style.display = 'block'
    try {
        fetch(`/products/${productHandle}.js`).then((res) => res.json())
        .then((response) => {
            getModalBundleInformation(response)
        })
    } catch (error) {
        console.error(error)
    }
}

const getModalBundleInformation = (item) => {
    document.getElementById('modal-bundle-title').innerText = item.title
    document.getElementById('modal-bundle-image').src = item.variants[0].featured_image.src
    document.getElementById('modal-bundle-price').innerText = '$' + item.variants[0].price
    document.getElementById('modal-bundle-variants').innerHTML = getVariantsBundle(item.variants)
}

document.getElementById('close-modal-bundle').addEventListener('click', () => {
    document.getElementById('modal-bundle').style.display = 'none'
})

const getVariantsBundle = (variants) => {
    let html = ''
    variants.forEach(variant => {
        html += `
            <input 
                type="radio"
                id="${variant.id}"
                name="variant-bundle"
                value="${variant.id}"
                class="product-bundle__variant"
                data-variant="${variant.id}"
                data-image="${variant.featured_image.src}'"
                data-price="${variant.price}"
            >
            <label for="${variant.id}" class="product-bundle__variant__label">
                ${variant.title}
            </label>
        `
    });
    return html
}