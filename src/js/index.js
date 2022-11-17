import '../scss/style.scss';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';

var modalMenu = document.getElementById("modal_menu");
var openMenu = document.getElementById("modal_menu__open");
var closeMenu = document.getElementsByClassName("modal_menu__close")[0];
openMenu.onclick = function() {
  modalMenu.style.display = "block";
}
closeMenu.onclick = function() {
  modalMenu.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalMenu) {
    modalMenu.style.display = "none";
  }
}

var modalCall = document.getElementById("modal_call");
var openCall = document.getElementById("modal_call__open");
var closeCall = document.getElementsByClassName("modal_call__close")[0];
openCall.onclick = function() {
  modalCall.style.display = "block";
}
closeCall.onclick = function() {
  modalCall.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalCall) {
    modalCall.style.display = "none";
  }
}

  var init = false;
  function swiperCard() {
    if (window.innerWidth <= 768) {
      if (!init) {
        init = true;
        swiper = new Swiper('.swiper', {
          modules: [Navigation, Pagination],
          loop: false,
          spaceBetween: 16,
          slideClass: 'swiper-slide',
          pagination: {
            el: '.swiper-pagination',
            tupe: 'bullets',
            clickable: true
          },
          slidesPerView: 'auto'
          });
      }
    } else if (init) {
      swiper.destroy();
      init = false;
    }
  }
  swiperCard();
  window.addEventListener("resize", swiperCard);



