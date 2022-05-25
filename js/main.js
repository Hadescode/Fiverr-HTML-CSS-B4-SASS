/*==================== CHANGE IMAGE CAROUSEL ====================*/
var carouselIndex = 0;
      var layOverItem = document.querySelectorAll(".carousel__layOver--item");
      layOverItem[carouselIndex].style.opacity = 1;
      var autoChangeImg = function () {
        layOverItem[carouselIndex].style.opacity = 1;
        carouselIndex++;
        if (carouselIndex >= layOverItem.length) {
          carouselIndex = 0;
        }
        setTimeout(function () {
          if (carouselIndex == 0) {
            layOverItem[5].style.opacity = 0;
          } else {
            layOverItem[carouselIndex - 1].style.opacity = 0;
          }
        }, 3800);
      };
      setInterval(autoChangeImg, 4000);

/*==================== ACCORDION ABOUT ====================*/
const skillsContent = document.getElementsByClassName('about__content__menu'),
      skillsHeader = document.querySelectorAll('.about__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i= 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'about__content__menu about__close'
    }

    if(itemClass === 'about__content__menu about__close'){
        this.parentNode.className = 'about__content__menu about__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})