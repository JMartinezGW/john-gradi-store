
// Slider

const slider = document.getElementById('slider')
let sliderSection = document.getElementsByClassName('slider__section')
let sliderSectionLast = sliderSection[sliderSection.length - 1]

const btnLeft = document.getElementById('btn-left')
const btnRight = document.getElementById('btn-right')
slider.insertAdjacentElement('afterbegin', sliderSectionLast)

const nextSlide = () => {
    const sliderSectionFirst = document.getElementsByClassName('slider__section')[0]
    slider.style.marginLeft = '-200%'
    slider.style.transition = 'all 0.5s'
    setTimeout(() => {
        slider.style.transition = 'none'
        console.log('sliderSectionFirst')
        console.log(sliderSectionFirst)
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

btnRight.addEventListener('click', () => {
    nextSlide()
})

btnLeft.addEventListener('click',  () => {
    prevSlide()
})

setInterval(() => {
    nextSlide()
}, 5000)