# JavaScript `document.elementFromAbsolutePoint()`

[![CI Build Status](https://api.travis-ci.org/kylewelsby/element-from-absolute-point.png)][travis]
[![Bower version](https://badge.fury.io/bo/element-from-absolute-point.png)][bower]
[![Dependency Status](https://gemnasium.com/kylewelsby/element-from-absolute-point.png)][gemnasium]


This little library adds support for finding elements using absolute `X`/`Y` coordinates of the page, especially when elements are not currently visible on the page. 

The native `document.elementFromPoint()` only will return elements relative to the current visible viewport and return `null` if the element is outside of the current visible viewport.

### Further reading

* [MDN - document.elementFromPoint](https://developer.mozilla.org/en-US/docs/Web/API/document.elementFromPoint)
* [w3.org Spec](http://dev.w3.org/csswg/cssom-view/#dom-document-elementfrompoint)

## Installation

    bower install --save element-from-absolute-point
    
## Usage

Use as you would with `document.elementFromPoint`.

```javascript
var element = document.elementFromAbsolutePoint(1000000, 1000000);
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License

This library is distributed under the MIT license.  Please see the [LICENSE](https://github.com/kylewelsby/element-from-absolute-point/blob/master/LICENSE) file.

[travis]:http://travis-ci.org/kylewelsby/element-from-absolute-point
[bower]:http://badge.fury.io/bo/element-from-absolute-point
[gemnasium]:https://gemnasium.com/kylewelsby/element-from-absolute-point