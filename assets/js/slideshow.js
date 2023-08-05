const imageWrapper = document.querySelector('.slideshow-wrapper')
const imageItems = document.querySelectorAll('.slideshow-wrapper > *')
const testimonialsItems = document.querySelectorAll('.testimonials-item')
const imageLength = imageItems.length
const perView = 2
let totalScroll = 0
const delay = 3000

function isHovered(className) {
    return $("." + className + ":hover").length > 0;
}

imageWrapper.style.setProperty('--per-view', perView)
for (let i = 0; i < perView; i++) {
    imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML)
}

let autoScroll = setInterval(scrolling, delay)

$(".testimonials-item").hover(function () {
    clearInterval(autoScroll)
}, function () {
    autoScroll = setInterval(scrolling, delay)
});

function scrolling() {
    totalScroll++
    if (totalScroll == imageLength + 1) {
        clearInterval(autoScroll)
        totalScroll = 1
        imageWrapper.style.transition = '0s'
        imageWrapper.style.left = '0'
        autoScroll = setInterval(scrolling, delay)
    }
    const widthEl = document.querySelector('.slideshow-wrapper > :first-child').offsetWidth + 24
    imageWrapper.style.left = `-${totalScroll * widthEl}px`
    imageWrapper.style.transition = '.5s'
}