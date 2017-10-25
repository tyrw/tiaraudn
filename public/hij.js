(function() {

  /* Letter placement function */
  function addLetterToPage (letter) {
    letter = letter.toUpperCase()  
    // Update title tag
    var title = document.head.getElementsByTagName('title')[0]
    title.innerHTML = title.innerHTML + ' ' + letter
    // Update meta tags
    var metaTagsToIgnore = ['viewport', 'twitter:card', 'twitter:site', 'twitter:creator', 'og:type', 'og:url', 'article:published_time', 'article:modified_time']
    ,   metaTags = document.head.getElementsByTagName('meta')
    for (var i = 0; i < metaTags.length; i++) {
      var metaTag   = metaTags[i]
      ,   name      = metaTag.getAttribute('name')
      ,   itemprop  = metaTag.getAttribute('itemprop')
      ,   property  = metaTag.getAttribute('property')
      if (metaTag.getAttribute('http-equiv')) continue
      if (metaTagsToIgnore.indexOf(name) > -1) continue
      if (metaTagsToIgnore.indexOf(property) > -1) continue
      if ((name && name.indexOf('image') > -1) || (itemprop && itemprop.indexOf('image') > -1) || (property && property.indexOf('image') > -1)) {
        metaTag.setAttribute('content', metaTag.getAttribute('content') + '+' + letter)
      } else {
        metaTag.setAttribute('content', metaTag.getAttribute('content') + ' ' + letter)
      }
    }
    // Update table and image
    document.getElementById('table-' + letter).innerHTML = 'Yes'
    var img = document.getElementById('image')
    img.setAttribute('src', img.getAttribute('src') + '+' + letter)
  }

  /* AJAX request function */
  function fetchAndPlaceLetter (url) {
    var xmlhttp = new XMLHttpRequest()

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
        if (xmlhttp.status == 200) {
          var res = JSON.parse(xmlhttp.responseText)
          if (res && res.letter) return addLetterToPage(res.letter)
          return console.warn('No letter returned with 200 response', res)
        }
        if (xmlhttp.status == 400) return console.warn('Problem with request to ' + url)
        console.warn('Non-200 response for ' + url)
      }
    }

    xmlhttp.open('GET', url, true)
    xmlhttp.send()
  }

  /* H */
  addLetterToPage('H')

  /* I */
  fetchAndPlaceLetter('/data/I')

  /* J */
  fetchAndPlaceLetter('https://api.component.io/v0/letter/J')

})();