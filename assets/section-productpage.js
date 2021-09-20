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

// Slider

const slider = document.getElementById('slider')
let sliderSection = document.getElementsByClassName('slider__section')
let sliderSectionLast = sliderSection[sliderSection.length - 1]

const btnLeft = document.getElementById('btn-left')
const btnRight = document.getElementById('btn-right')

slider.insertAdjacentElement('afterbegin', sliderSectionLast)

const nextSlide = () => {
    console.log('testing')
    const sliderSectionFirst = document.getElementsByClassName('slider__section')[0]
    slider.style.marginLeft = '-200%'
    slider.style.transition = 'all 0.5s'
    setTimeout(() => {
        slider.style.transition = 'none'
        slider.insertAdjacentElement('beforeend', sliderSectionFirst)
        slider.style.marginLeft = '-100%'
    }, 500)
}

const prevSlide = () => {
    let sliderSection = document.getElementsByClassName('slider__section')
    let sliderSectionLast = sliderSection[sliderSection.length - 1]
    slider.style.marginLeft = '0'
    slider.style.transition = 'all 0.5s'
    setTimeout(() => {
        slider.style.transition = 'none'
        slider.insertAdjacentElement('afterbegin', sliderSectionLast)
        slider.style.marginLeft = '-100%'
    }, 500)
}

btnRight.addEventListener('click', nextSlide())

btnLeft.addEventListener('click', prevSlide())

setInterval(nextSlide(), 5000)