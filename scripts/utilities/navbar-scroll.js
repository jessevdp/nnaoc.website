 (function () {
    var boundry = 20;
    var selector = '.navbar-top.navbar-bg-transparent';
    $elements = document.querySelectorAll(selector);

    for (var i = 0; i < $elements.length; i++) {
        const $el = $elements[i];
        addScrollListenerFor($el);
    }

    function addScrollListenerFor($el) {
        document.addEventListener('scroll', function (e) {
            if (window.scrollY > boundry) setScrolled($el);
            else removeScrolled($el);
        })
    }

    function setScrolled($el) {
        $el.dataset.scrolled = true;
    }

    function removeScrolled($el) {
        $el.dataset.scrolled = false;
    }
})();
