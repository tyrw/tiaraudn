/* E */
(function(letter, head) {
  letter = letter.toUpperCase()  
  // Update title tag
  var title = head.getElementsByTagName('title')[0]
  title.innerHTML = title.innerHTML + ' ' + letter
  // Update meta tags
  var metaTagsToIgnore = ['viewport', 'twitter:card', 'twitter:site', 'twitter:creator', 'og:type', 'og:url', 'article:published_time', 'article:modified_time']
  ,   metaTags = head.getElementsByTagName('meta')
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

})('E', document.head)

/* F */


/* G */