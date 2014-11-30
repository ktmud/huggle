(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qeWFuZzIvcHJvamVjdHMvaHVnZ2xlL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9qeWFuZzIvcHJvamVjdHMvaHVnZ2xlL3NyYy9zY3JpcHRzL2FwcC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNFQSxDQUFBLENBQUUsUUFBUSxDQUFDLEtBQVgsQ0FBaUIsQ0FBQyxNQUFsQixDQUF5QixTQUFBLEdBQUE7QUFDdkIsRUFBQSxJQUFJLENBQUMsSUFBTCxHQUFZLENBQUMsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBQSxJQUE2QixFQUE5QixDQUFpQyxDQUFDLE9BQWxDLENBQTBDLGVBQTFDLEVBQTJELEtBQTNELENBQVosQ0FBQTtTQUNBLElBQUMsQ0FBQSxRQUFELEtBQWEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUZOO0FBQUEsQ0FBekIsQ0FHQSxDQUFDLElBSEQsQ0FHTSxRQUhOLEVBR2dCLFFBSGhCLENBQUEsQ0FBQTs7QUFBQSxDQU1BLENBQUUsWUFBRixDQUFlLENBQUMsSUFBaEIsQ0FBcUIsU0FBQSxHQUFBO1NBQ25CLEtBQUssQ0FBQyxnQkFBTixDQUF1QixJQUF2QixFQURtQjtBQUFBLENBQXJCLENBTkEsQ0FBQTs7QUFBQSxDQVVBLENBQUUsMEJBQUYsQ0FBNkIsQ0FBQyxRQUE5QixDQUF1QyxLQUF2QyxDQVZBLENBQUE7O0FBQUEsQ0FXQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLEtBQVYsQ0FDRTtBQUFBLEVBQUEsTUFBQSxFQUNFO0FBQUEsSUFBQSxHQUFBLEVBQUssU0FBQSxHQUFBO2FBQ0gsSUFBSSxDQUFDLEdBQUwsR0FBVyxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsTUFBVixDQUFBLENBQWtCLENBQUMsR0FBbkIsR0FBeUIsR0FEakM7SUFBQSxDQUFMO0dBREY7Q0FERixDQVhBLENBQUE7O0FBQUEsQ0FnQkEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxTQUFWLENBQ0U7QUFBQSxFQUFBLE1BQUEsRUFBUSxrQkFBUjtBQUFBLEVBQ0EsTUFBQSxFQUFRLEVBRFI7Q0FERixDQWhCQSxDQUFBOztBQUFBLE9Bb0JPLENBQUMsR0FBUixDQUFZLG1CQUFaLENBcEJBLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG4jIE1ha2UgZXh0ZXJuYWwgbGluayBvcGVuIGluIG5ldyB3aW5kb3dcbiQoZG9jdW1lbnQubGlua3MpLmZpbHRlciAtPlxuICB0aGlzLmhyZWYgPSAodGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCAnJykucmVwbGFjZSgvKFteOl0pXFwvezIsfS9nLCAnJDEvJylcbiAgQGhvc3RuYW1lICE9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZVxuLmF0dHIoJ3RhcmdldCcsICdfYmxhbmsnKVxuXG4jIERvIGNvZGUgaGlnaGxpZ2h0XG4kKCdwcmUgPiBjb2RlJykuZWFjaCAtPlxuICBQcmlzbS5oaWdobGlnaHRFbGVtZW50KHRoaXMpXG5cbiMgbm9ybWFsaXplIFRPQ1xuJCgnI1RhYmxlT2ZDb250ZW50cyA+IHVsIHVsJykuYWRkQ2xhc3MoJ25hdicpXG4kKCcjdG9jJykuYWZmaXhcbiAgb2Zmc2V0OlxuICAgIHRvcDogLT5cbiAgICAgIHRoaXMudG9wID0gJCgnI3RvYycpLm9mZnNldCgpLnRvcCAtIDIwXG5cbiQoJ2JvZHknKS5zY3JvbGxzcHlcbiAgdGFyZ2V0OiAnI1RhYmxlT2ZDb250ZW50cydcbiAgb2Zmc2V0OiAyMFxuXG5jb25zb2xlLmxvZyAnR2l2ZSBtZSBhIEh1Z2dsZS4nXG5cbiJdfQ==
