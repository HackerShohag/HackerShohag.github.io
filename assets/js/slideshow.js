function runSlideShow(wrapperItem, hoverItem, itemsPerView, delay) {
    const imageWrapper = document.querySelector(wrapperItem)
    const imageItems = document.querySelectorAll(wrapperItem + ' > *')
    const imageLength = imageItems.length
    let totalScroll = 0

    function isHovered(className) {
        return $("." + className + ":hover").length > 0;
    }

    imageWrapper.style.setProperty('--per-view', itemsPerView)
    for (let i = 0; i < itemsPerView; i++) {
        imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML)
    }

    let autoScroll = setInterval(scrolling, delay)

    $(hoverItem).hover(function () {
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
        const widthEl = document.querySelector(wrapperItem + ' > :first-child').offsetWidth + 24
        imageWrapper.style.left = `-${totalScroll * widthEl}px`
        imageWrapper.style.transition = '.5s'
    }
}