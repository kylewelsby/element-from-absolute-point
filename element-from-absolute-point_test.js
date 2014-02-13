(function(){
  'use strict';
  describe('document.elementFromAbsolutePoint', function () {
    var elm, pointX, pointY;
    beforeEach(function() {
      pointX = 1000;
      pointY = pointX * 2;
      document.body.style.margin = '0';
      elm = document.createElement('div');
      elm.id = 'item';
      elm.innerHTML = 'hello world';
      elm.style.marginTop = pointY + 'px';
      elm.style.marginLeft = pointX +'px';

      document.getElementById('jasmine_content').appendChild(elm);
    });

    afterEach(function (){
      window.scrollTo(0,0);
      document.getElementById('jasmine_content').innerHTML = '';
    });

    it('gets element by point which is out of bounds from viewpoint', function(){
      var actual
      actual = document.elementFromAbsolutePoint(pointX, pointY)
      expect(actual).not.toBe(null);
      expect(actual.toString()).toBe('[object HTMLDivElement]');
    });

    it('gets element by point event if screen is scrolled', function () {
      var actual;
      window.scrollTo(100,100);
      actual = document.elementFromAbsolutePoint(pointX, pointY)
      expect(actual).not.toBe(null);
      expect(actual.toString()).toBe('[object HTMLDivElement]');
    });

    it('gets an absolute positioned element', function () {
      var actual, rec;
      elm.style.position = 'absolute';
      rec = elm.getBoundingClientRect();
      actual = document.elementFromAbsolutePoint(rec.left, rec.top)
      expect(actual).not.toBe(null);
      expect(actual.toString()).toBe('[object HTMLDivElement]');
    });

    it('gets an element that is not outside the viewport', function () {
      var actual, rec;
      elm.style.marginLeft = '10px';
      elm.style.marginTop = '10px';
      rec = elm.getBoundingClientRect();
      actual = document.elementFromAbsolutePoint(rec.left, rec.top)
      expect(actual).not.toBe(null);
      expect(actual.toString()).toBe('[object HTMLDivElement]');
    });
  });
}).call(this);
