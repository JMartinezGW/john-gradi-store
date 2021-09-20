
// Slider

const slider = document.getElementById('slider')
let sliderSection = document.getElementsByClassName('slider__section')
let sliderSectionLast = sliderSection[sliderSection.length - 1]

let sliderActual = 0

const btnLeft = document.getElementById('btn-left')
const btnRight = document.getElementById('btn-right')
slider.insertAdjacentElement('afterbegin', sliderSectionLast)

const nextSlide = () => {
    if (sliderActual < sliderSection.length - 1) sliderActual++
    else if(sliderActual === sliderSection.length - 1) sliderActual = 0
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
    if (sliderActual === 0) sliderActual = sliderSection.length - 1
    else sliderActual--
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

btnRight.addEventListener('click', () => {
    nextSlide()
})

btnLeft.addEventListener('click',  () => {
    prevSlide()
})