
# Make external link open in new window
$(document.links).filter ->
  this.href = (this.getAttribute('href') || '').replace(/([^:])\/{2,}/g, '$1/')
  @hostname != window.location.hostname
.attr('target', '_blank')

# Do code highlight
$('pre > code').each ->
  Prism.highlightElement(this)

# normalize TOC
$('#TableOfContents > ul ul').addClass('nav')
$('#toc').affix
  offset:
    top: ->
      this.top = $('#toc').offset().top - 20

$('body').scrollspy
  target: '#TableOfContents'
  offset: 20

console.log 'Give me a Huggle.'

