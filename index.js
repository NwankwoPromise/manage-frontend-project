
// const swiper = new Swiper(".mySwiper", {
//     direction: 'vertical',
//     loop: true,
// })

// const testimonialSwiper = document.querySelector('.mySwiper')
// const slide = function() {
//     swiper.slidePrev()
// }
document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper(".content", {
    //   direction: 'vertical',
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 4,
                // grabCursor: false,
            },
        }
    });
    // Additional code for interacting with the swiper instance
  });
  
const iconText=document.querySelector('.icon-text')
const scrollDown = document.querySelector('.scroll-down')
const slider = document.querySelector('.slider-wrapper')
const indicators = [...document.querySelectorAll('.indicators')]
let currentTestimonial = 0

setTimeout(function(){
    iconText.classList.remove('hidden-text')
}, 800)

setTimeout(function(){
    scrollDown.style.visibility = "visible"
    
}, 3500)

indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        currentTestimonial = i
        indicators[currentTestimonial].classList.remove('active')
        slider.style.marginLeft = `-${100 * i}%`
    })
})



