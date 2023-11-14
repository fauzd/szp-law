document.addEventListener("DOMContentLoaded", function () {

  document.querySelector(".header__burger").addEventListener("click", function () {
    this.classList.toggle("open");
    document.querySelector(".header__nav-list").classList.toggle("open");
  });

  const casesSwiper = new Swiper(".index-services__cases-swiper", {
    // Опции слайдера
    // loop: true, // Бесконечная прокрутка
    // autoplay: {
    //   delay: 3000, // Время автопрокрутки в миллисекундах
    // },
    // centeredSlides: true,
    speed: 1,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination", // Элемент для отображения пагинации
      // bulletActiveClass: ".services__cases-bullet--active",
      // bulletClass: ".services__cases-bullet",
      clickable: "true",
    },
  });

  const newsSwiper = new Swiper(".news__swiper", {
    // Опции слайдера
    loop: true, // Бесконечная прокрутка
    // autoplay: {
    //   delay: 3000, // Время автопрокрутки в миллисекундах
    // },
    // centeredSlides: true,
    slidesPerView: 1,
    // spaceBetween: 20,
    navigation: {
      nextEl: ".news__swiper-button-next",
      prevEl: ".news__swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 60,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      760: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });

  var reviewsSwiper = new Swiper(".reviews-swiper", {
    // Опции слайдера
    loop: true, // Бесконечная прокрутка
    // autoplay: {
    //   delay: 3000, // Время автопрокрутки в миллисекундах
    // },
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".reviews-swiper__button-next",
      prevEl: ".reviews-swiper__button-prev",
    },
    pagination: {
      el: ".reviews-slide__swiper-pagination", // Элемент для отображения пагинации
      // bulletActiveClass: ".services__cases-bullet--active",
      // bulletClass: ".services__cases-bullet",
      clickable: "true",
    },
  });

  const screenWidth = window.innerWidth;
  const breakpoint = 1000;

  if (screenWidth < breakpoint) {
    const recommendationsSwiper = new Swiper(".recommendations__swiper", {
      spaceBetween: 100,
      slideClass: "recommendations-slide",
      loop: true,
      slidesPerView: 3,
      centeredSlides: false,
      initialSlide: 5,
      autoplay: {
        delay: 1500,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 60,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        760: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        980: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  }

  const lawyersMain = new Swiper(".lawyers__swiper", {
    loop: true, // Бесконечная прокрутка
    // autoplay: {
    //   delay: 3000, // Время автопрокрутки в миллисекундах
    // },
    // centeredSlides: true,
    // spaceBetween: 20,
    navigation: {
      nextEl: ".lawyers__button-next",
      prevEl: ".lawyers__button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 60,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
  });
  
  const lawyerPublications = new Swiper(".lawyer-publications__swiper", {
    // Опции слайдера
    loop: true, // Бесконечная прокрутка
    // autoplay: {
    //   delay: 3000, // Время автопрокрутки в миллисекундах
    // },
    // centeredSlides: true,
    slidesPerView: 1,
    // spaceBetween: 20,
    navigation: {
      nextEl: ".lawyer-publications__swiper-button-next",
      prevEl: ".lawyer-publications__swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 60,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      760: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });

  const blogRecommendations = new Swiper(".blog-recommendations__swiper", {
    // Опции слайдера
    loop: true, // Бесконечная прокрутка
    // autoplay: {
    //   delay: 3000, // Время автопрокрутки в миллисекундах
    // },
    // centeredSlides: true,
    slidesPerView: 1,
    // spaceBetween: 20,
    navigation: {
      nextEl: ".blog-recommendations__swiper-button-next",
      prevEl: ".blog-recommendations__swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 60,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      760: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

});