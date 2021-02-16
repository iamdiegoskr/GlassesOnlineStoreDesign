const slider = document.getElementById('slider');
const sliderItems = document.querySelectorAll('.slider-item');
const sliderItemLast = sliderItems[sliderItems.length - 1]


const buttonRight = document.getElementById('btn-right')
const buttonLeft = document.getElementById('btn-left')


slider.insertAdjacentElement('afterbegin', sliderItemLast)


function nextBanner() {
    let firstSliderEmelement = document.querySelectorAll('.slider-item')[0];


    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all .5s'


    setTimeout(() => {
        slider.style.transition = 'none';
        slider.style.marginLeft = '-100%'
        slider.insertAdjacentElement('beforeend', firstSliderEmelement)
    }, 500);

}

function beforeBanner() {
    let sliderItems = document.querySelectorAll('.slider-item');
    let lastSliderElement = sliderItems[sliderItems.length - 1]


    slider.style.marginLeft = '0%';
    slider.style.transition = 'all .5s'


    setTimeout(() => {
        slider.style.transition = 'none';
        slider.style.marginLeft = '-100%'
        slider.insertAdjacentElement('afterbegin', lastSliderElement)
    }, 500);
}


// setInterval(() => {
//     nextBanner()
// }, 5000);


buttonRight.addEventListener('click', nextBanner)

buttonLeft.addEventListener('click', beforeBanner);