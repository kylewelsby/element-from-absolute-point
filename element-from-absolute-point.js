(function() {
  'use strict';
  var api;
  api = function(x,y) {
    var elm, scrollX, scrollY, newX, newY;
    scrollX = window.pageXOffset;
    scrollY = window.pageYOffset;
    window.scrollTo(x,y);
    newX = x - window.pageXOffset;
    newY = y - window.pageYOffset;
    elm = this.elementFromPoint(newX,newY);
    window.scrollTo(scrollX,scrollY);
    return elm;
  };
  this.document.elementFromAbsolutePoint = api;
}).call(this);
