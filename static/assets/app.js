(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document.links).filter(function() {
  this.href = (this.getAttribute('href') || '').replace(/([^:])\/{2,}/g, '$1/');
  return this.hostname !== window.location.hostname;
}).attr('target', '_blank');

$('pre > code').each(function() {
  return Prism.highlightElement(this);
});

$('#TableOfContents > ul ul').addClass('nav');

$('#toc').affix({
  offset: {
    top: function() {
      return this.top = $('#toc').offset().top - 20;
    }
  }
});

$('body').scrollspy({
  target: '#TableOfContents',
  offset: 20
});

console.log('Give me a Huggle.');

},{}]},{},[1])


//# sourceMappingURL=app.js.map
