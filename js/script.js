document.addEventListener(`DOMContentLoaded`, function () {
  AOS.init();

  // -------------------------------------------------
  // sub_menu
  const menuItems = document.querySelectorAll(`.main_menu li`);
  
  for (const item of menuItems){
    item.addEventListener(`mouseenter`, function () {
      const subMenu = this.querySelector(`.sub_menu_box`);

      subMenu.style.maxHeight = `${subMenu.scrollHeight}px`;
    });

    item.addEventListener(`mouseleave`, function () {
      const subMenu = this.querySelector(`.sub_menu_box`);
      subMenu.style.maxHeight = ``;
      
    });
  };

  
  var swiper = new Swiper(".bannerSwiper", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    //   pagination: {
    //     el: ".swiper-pagination",
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });
  
  var swiper = new Swiper(".shopSwiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
          },
  });

  // -------------------------------------------------
  
  function toggleAOS() {
      const screenWidth = window.innerWidth;

      if (screenWidth < 960) {
        // 960px 미만에서는 AOS 비활성화
        AOS.init({ disable: true });
      } else {
        // 960px 이상에서는 AOS 활성화
        AOS.init();
      }
    }

    // 초기 실행
    toggleAOS();

    // 화면 크기 변경 시 실행
    window.addEventListener('resize', toggleAOS);


  // -------------------------------------------------
  // side_menu
  const sideBox = document.querySelector(`.side_menu`);
  const hamburgerBtn = document.querySelector(`.m_btn`);

  hamburgerBtn.addEventListener(`click`, function () { 
    sideBox.classList.toggle(`active`);
    this.classList.toggle(`active`);
  });

  

}); // end