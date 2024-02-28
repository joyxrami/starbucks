const searchEL = document.querySelector('.search');
const searchInputEl = searchEL.querySelector('input');

searchEL.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEL.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
    searchEL.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


const badgeEL = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
    console.log('scrollY');
    if(window.scrollY > 500){
        gsap.to(요소, 지속시간, 옵션);
    } else{

    }
}, 300));