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

