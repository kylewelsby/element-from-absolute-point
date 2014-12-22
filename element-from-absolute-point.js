(function() {
  'use strict';
  var api;
  api = function(x, y) {
    var elm, scrollX, scrollY, newX, newY;
    scrollX = window.pageXOffset;
    scrollY = window.pageYOffset;
    window.scrollTo(x, y);
    newX = x - window.pageXOffset;
    newY = y - window.pageYOffset;
    elm = this.elementFromPoint(newX, newY);
    if (window.getComputedStyle(elm).position === 'fixed') {
      var newElm, display;
      display = elm.style.display;
      elm.style.display = 'none';
      newElm = this.elementFromPoint(newX, newY);
      elm.style.display = display;
      elm = newElm;
    }
    window.scrollTo(scrollX, scrollY);
    return elm;
  };
  this.document.elementFromAbsolutePoint = api;
}).call(this);
