let variantSelected = 0
const variants = document.getElementsByName('variant')
for (let i = 0; i < variants.length; i++) {
    variants[i].addEventListener('mouseover', function (event) {
        const image = event.target.dataset.image
        const variantId = event.target.dataset.variant
        variantSelected = variantId
        document.getElementById('product-image').src = image
    });
}