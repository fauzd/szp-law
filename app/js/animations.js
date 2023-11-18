gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {

  //Анимация ховеров в хэдере
  

  // Анимации SVG в секциях декора
  if (document.getElementById("index-hero-lg")) {
    new Vivus("index-hero-lg", { start: "inViewport", duration: 200 });
  }

  if (document.getElementById("index-hero-sm")) {
    new Vivus("index-hero-sm", { start: "inViewport", duration: 200 });
  }

  if (document.getElementById("about-decor-bg")) {
    new Vivus("about-decor-bg", { start: "inViewport", duration: 200 });
  }

  if (document.getElementById("lawyer-cases__decor-svg")) {
    new Vivus("lawyer-cases__decor-svg", {
      start: "inViewport",
      duration: 200,
    });
  }

  //Анимация скролла секции инфо на странице адвоката
  if (document.querySelector(".lawyer__info-wrapper")) {
    const screenWidth = window.innerWidth;
    const breakpoint = 641;

    if (screenWidth >= breakpoint) {
      console.log("screenWidth", ">=", "breakpoint");
      ScrollTrigger.create({
        trigger: ".lawyer__info-scroller",
        start: "top 10%",
        end: "bottom 90%",
        pin: ".lawyer__img-wrapper",
      });
    }
  }

  //Анимация картинки и слогана на главной
  let heroTl = gsap.timeline();

  heroTl
    .from(".hero__bg-img", {
      duration: 10,
      xPercent: -10,
      yPercent: 10,
      scale: 1.3,
    })
    .from(
      ".hero__title-1row",
      {
        opacity: 0,
        duration: 2,
        scale: 1.5,
        transformOrigin: "right bottom",
      },
      "<"
    )
    .from(
      ".hero__title-2row",
      {
        opacity: 0,
        duration: 2,
        scale: 1.5,
        transformOrigin: "center bottom",
      },
      "<"
    )
    .from(
      ".hero__title-3row",
      {
        opacity: 0,
        duration: 2,
        scale: 1.5,
        transformOrigin: "left bottom",
      },
      "<"
    );

    //Анимация списков
  function animateList(list) {
    gsap.fromTo(
      list.querySelectorAll(".practice-list__item"), // Анимируем каждый элемент списка,
      {
        opacity: 0,
        // yPercent: 100,
      },
      {
        duration: 1,
        opacity: 1,
        // yPercent: 0,
        stagger: 0.5,
      }
    );
  }

  document.querySelectorAll(".about-content__bottom-list").forEach((list) => {
    if (list.getBoundingClientRect().top < window.innerHeight) {
      // Если заголовок уже видим при загрузке
      animateList(list);
    } else {
      // Если заголовок появляется при скролле
      ScrollTrigger.create({
        trigger: list,
        start: "top 70%",
        onEnter: () => animateList(list),
        once: true, // Триггер сработает только один раз
      });
    }
  });

  function animateList(list) {
    gsap.fromTo(
      list.querySelectorAll(".about-content__bottom-item"), // Анимируем каждый элемент списка,
      {
        opacity: 0,
        // yPercent: 100,
      },
      {
        duration: 1,
        opacity: 1,
        // yPercent: 0,
        stagger: 0.5,
      }
    );
  }

  document.querySelectorAll(".practice-list").forEach((list) => {
    if (list.getBoundingClientRect().top < window.innerHeight) {
      // Если заголовок уже видим при загрузке
      animateList(list);
    } else {
      // Если заголовок появляется при скролле
      ScrollTrigger.create({
        trigger: list,
        start: "top 70%",
        onEnter: () => animateList(list),
        once: true, // Триггер сработает только один раз
      });
    }
  });

  //Анимация параграфов
  function animateText(container) {
    const paragraphs =
      container.tagName === "P" ? [container] : container.querySelectorAll("p");
    gsap.fromTo(
      paragraphs,
      { opacity: 0},
      { opacity: 1, stagger: 0.5, duration: 1 }
    );
  }

  document
    .querySelectorAll(".animate-text")
    .forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        // Если элемент уже видим при загрузке
        animateText(element);
      } else {
        // Если элемент появляется при скролле
        ScrollTrigger.create({
          trigger: element,
          start: "top 60%",
          onEnter: () => animateText(element),
          once: true, // Триггер сработает только один раз
        });
      }
    });

  //Общий случай анимации любого блока
  function animateOpacity(container) {
    
    gsap.fromTo(
      container,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1 }
    );
  }
  document.querySelectorAll(".animate-opacity").forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      // Если элемент уже видим при загрузке
      animateOpacity(element);
    } else {
      // Если элемент появляется при скролле
      ScrollTrigger.create({
        trigger: element,
        start: "top 60%",
        onEnter: () => animateOpacity(element),
        once: true, // Триггер сработает только один раз
      });
    }
  });

});
