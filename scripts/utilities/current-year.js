(function() {
  var className = 'current-year';
  var elements = document.getElementsByClassName(className);
  var year = new Date().getFullYear();
  for (element of elements) {
    element.innerHTML = '' + year;
  }
}());
