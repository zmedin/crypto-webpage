/* Show the currently selected language and hide all of the other
 * languages.
 */
function selectLanguage (language) {
  $('[lang]').each(function () {
    if ($(this).attr('lang') === language) {
      $(this).show()
    } else {
      $(this).hide()
    }
  })
}

function processForm () { // eslint-disable-line no-unused-vars
  alert('processing form (' + $('#inputtext')[0].value + ')')
}

/* Initialize language setting on page load
 *
 * The `$(...` is a jQuery shorthand to do something once the page is
 * fully loaded and ready.
 *
 * https://learn.jquery.com/using-jquery-core/document-ready/
 */
$(function () {
  selectLanguage('en')
})
