
// Slider

const slider = document.getElementById('slider')
let dataTitles = document.getElementById('slider').dataset.titles
let dataDescriptions = document.getElementById('slider').dataset.descriptions
dataTitles = JSON.parse(dataTitles)
dataDescriptions = JSON.parse(dataDescriptions)
let sliderSection = document.getElementsByClassName('slider__section')
let sliderSectionLast = sliderSection[sliderSection.length - 1]

let sliderActual = 0

const getInfomationSlide = () => {
    const info = document.getElementById('info')
    info.innerHTML=`
    <h2>${dataTitles[sliderActual].title}</h2>
    ${dataDescriptions[sliderActual].description}
    `
}

getInfomationSlide()

const btnLeft = document.getElementById('btn-left')
const btnRight = document.getElementById('btn-right')
slider.insertAdjacentElement('afterbegin', sliderSectionLast)

const nextSlide = () => {
    if (sliderActual < sliderSection.length - 1) sliderActual++
    else if(sliderActual === sliderSection.length - 1) sliderActual = 0
    getInfomationSlide()
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
    if (sliderActual === 0) sliderActual = sliderSection.length - 1
    else sliderActual--
    getInfomationSlide()
    let sliderSectionLast = sliderSection[sliderSection.length - 1]
    slider.style.marginLeft = '0'
    slider.style.transition = 'all 0.5s'
    setTimeout(() => {
        slider.style.transition = 'none'
        slider.insertAdjacentElement('afterbegin', sliderSectionLast)
        slider.style.marginLeft = '-100%'
    }, 500)
}

btnRight.addEventListener('click', (e) => {
    nextSlide()
    e.target.style.pointerEvents = 'none'
    setTimeout(() => {
        e.target.style.pointerEvents = ''
    }, 500)
})

btnLeft.addEventListener('click',  (e) => {
    prevSlide()
    e.target.style.pointerEvents = 'none'
    setTimeout(() => {
        e.target.style.pointerEvents = ''
    }, 500)
})