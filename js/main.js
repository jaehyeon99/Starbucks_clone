const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
    if (window.scrollY > 500) {
        gsap.to(badgeEl, 0.6, {
            opacity: 0,
            display: "none"
        });
    } else {
        gsap.to(badgeEl, 0.6, {
            opacity: 1,
            display: "block"
        });
    }
}, 300));

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * 0.5,
        opacity: 1
    });
});

new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});
new Swiper('.promotion .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 
        clickable: true //페이지 번호 클릭 제어 기능
    },
    navigation: {
        prevEl: ".promotion .swiper-prev",
        nextEl: ".promotion .swiper-next"
    }
});
new Swiper('.awards .swiper-container', {
    direction: 'horizontal',
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awrads .swiper-next'
    }
});


const promotionEl = document.querySelector('.promotion')
// 슬라이드 영역를 토글하는 버튼 검색!
const promotionToggleBtn = document.querySelector('.toggle-promotion')
// 슬라이드 영역 숨김 여부 기본값!
let isHidePromotion = false
// 토글 버튼을 클릭하면,
promotionToggleBtn.addEventListener('click', function () {
    // 슬라이드 영역 숨김 여부를 반댓값으로 할당!
    isHidePromotion = !isHidePromotion
    // 요소를 숨겨야 하면,
    if (isHidePromotion) {
        promotionEl.classList.add('hide')
        // 요소가 보여야 하면,
    } else {
        promotionEl.classList.remove('hide')
    }
})

function floatingObject(selector) {
    gsap.to(selector, 1, {
        y: 20,
        repeat: -1,
        yoyo: true
    });
}
floatingObject('.floating');

// 스크롤 내릴 때 애니메이션 LIKE APPLE SITE
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic.Scene({
        triggerElement: spyEl,
        triggerHook: 0.8
    }).setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});