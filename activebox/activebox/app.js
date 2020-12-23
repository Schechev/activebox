$(function() {


    /* Fixed Header */
    let header = $("#header"); /*Подключаем элемент*/
    let intro = $("#intro");
    let introH = intro.innerHeight(); /*Высота блока*/
    let scrollPos = $(window).scrollTop(); /*Позиция scroll"a документа*/
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH); /*Вызываем функцию при загрузке страницы*/

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight(); /*Перезаписывать значение переменной*/
        scrollPos = $(this).scrollTop();  /*Сравниваем позицию с высотой элемента intro*/

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if( scrollPos > introH ) {
            header.addClass("fixed"); /*Добавляем класс*/
        } else {
            header.removeClass("fixed"); /*Убираем класс*/
        }
    }



    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault(); /*Отменяет стандартное поведение ссылки при клике*/

        let elementId = $(this).data('scroll'); /*Доступ к элементу при клике*/
        let elementOffset = $(elementId).offset().top; /*Получаем отступ от верха*/

        nav.removeClass("show"); /*Скрытие меню*/

        $("html, body").animate({  /*Плавный скролл при помощи анимации*/
            scrollTop: elementOffset - 70
        }, 700);  /*700 - миллисекунды для анимации*/
    });



    /* Nav Toggle */
    navToggle.on("click", function(event) { /*Кнопка меню*/
        event.preventDefault(); /*Отмена стандартного поведения элемента*/

        nav.toggleClass("show"); 
    });



    /* Reviews: https://kenwheeler.github.io/slick/ */  /*Библиотека для слайдера*/
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true, /*бесконечный*/
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true, /*Затемнение*/
        arrows: false, /*Стрелки прокрутки*/
        dots: true
    });



});
