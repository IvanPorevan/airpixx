document.addEventListener('DOMContentLoaded', function() {
    // Инициализация Materialize компонентов
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
    M.Modal.init(document.querySelectorAll('.modal'));
    M.Slider.init(document.querySelectorAll('.slider'), {
        indicators: true,
        height: 500,
        transition: 500,
        interval: 6000,
    });
    M.Carousel.init(document.querySelectorAll('.carousel'), {
        fullWidth: true,
        indicators: true
    });
    M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), { constrainWidth: false });
    M.Collapsible.init(document.querySelectorAll('.collapsible'));
    
    // Инициализация Datepicker и Timepicker
    var elemsDate = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elemsDate, {
        format: 'dd.mm.yyyy', // Формат даты
        showClearBtn: true, // Кнопка очистки
    });

    var elemsTime = document.querySelectorAll('.timepicker');
    M.Timepicker.init(elemsTime, {
        twelveHour: false, // Использование 24-часового формата
        showClearBtn: true, // Кнопка очистки
    });
});

$(document).ready(function() {
    // Инициализация слайдера через jQuery
    $('.slider').slider({
        indicators: true,
        height: 600,
        transition: 500,
        interval: 12000
    });

    // Инициализация карусели через jQuery
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });

    // Инициализация аккордеона (collapsible)
    $('.collapsible').collapsible();

    // Переключение между секциями аккордеона
    $(".collapsible-header").click(function() {
        $(".collapsible-content").not($(this).next()).slideUp();
        $(this).next().slideToggle();
    });

    // Изначально свернем все секции аккордеона
    $(".collapsible-content").hide();
});