
# Make external link open in new window
$(document.links).filter ->
  this.href = this.href.replace(/([^:])\/{2,}/g, '$1/')
  @hostname != window.location.hostname
.attr('target', '_blank')

$('pre > code').each ->
  this.className = 'language-' + this.className
  Prism.highlightElement(this)

console.log 'Give me a Huggle.'

