!function (e) {
    "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function (e) { for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;)++n; return Boolean(o[n]) }), "function" != typeof e.closest && (e.closest = function (e) { for (var t = this; t && 1 === t.nodeType;) { if (t.matches(e)) return t; t = t.parentNode } return null })
}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function () {
    let modalButton = document.getElementById('sizes_table'),
        overlay = document.querySelector('.js-overlay-modal'),
        modalWindow = document.querySelector('.modal_window'),
        closeButton = document.querySelector('.js-modal-close');


    modalButton.addEventListener('click', function (e) {
        e.preventDefault();
        modalWindow.classList.add('active');
        overlay.classList.add('active');
    });


    closeButton.addEventListener('click', function (e) {
        modalWindow.classList.remove('active');
        overlay.classList.remove('active');
    });


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;
        if (key == 27) {
            document.querySelector('.modal_window.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function () {
        document.querySelector('.modal_window.active').classList.remove('active');
        this.classList.remove('active');
    });
}); 