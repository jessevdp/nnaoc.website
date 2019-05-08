(function () {
    var togglerSelector = '.navbar-toggler';
    var visibleClassName = 'show';
    var hiddenClassName = 'hide';

    $togglers = document.querySelectorAll(togglerSelector);
    for (var i = 0; i < $togglers.length; i++) addListeners($togglers[i]);

    /**
     * Add all required event listeners to the given toggler
     *
     * @param {HTMLElement} $toggler
     */
    function addListeners($toggler) {
        $toggler.addEventListener('click', function () {
            var $targets = document.querySelectorAll($toggler.dataset.target);
            for (var i = 0; i < $targets.length; i++) toggleVisibility($targets[i]);
        });
    }

    /**
     * Toggle the visibility of the given element
     *
     * @param {HTMLElement} $element
     */
    function toggleVisibility($element) {
        if (isVisible($element)) setHidden($element);
        else setVisible($element);
    }

    /**
     * Check if the classList of the given element contains
     * the visibleClass
     *
     * @param {HTMLElement} $element
     */
    function isVisible($element) {
        return $element.classList.contains(visibleClassName)
    }

    /**
     * Make sure the classList of the given element contains
     * the hiddenClass, not the visibleClass
     *
     * @param {HTMLElement} $element
     */
    function setHidden($element) {
        $element.classList.remove(visibleClassName);
        $element.classList.add(hiddenClassName);
    }

    /**
     * Make sure the classList of the given element contains
     * the visibleClass, not the hiddenClass
     *
     * @param {HTMLElement} $element
     */
    function setVisible($element) {
        $element.classList.remove(hiddenClassName);
        $element.classList.add(visibleClassName);
    }
})();
