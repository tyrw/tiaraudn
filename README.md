## Introduction

The purpose of this project is to see what effect various JavaScript actions may have on search engine results.

### There are ten main ways to get content onto a page

- Content rendered by server and already on the page at load
  - A. "Static" content
- Content added by JavaScript already on the page at load 
  - B. Content from the JavaScript itself
  - C. Content from an AJAX request to same domain
  - D. Content from an AJAX request to external domain
- Content added by JavaScript from an external file hosted at the same domain
  - E. Content from the JavaScript file itself
  - F. Content from an AJAX request to same domain
  - G. Content from an AJAX request to external domain
- Content added by JavaScript from an external file hosted at a different domain
  - H. Content from the JavaScript file itself
  - I. Content from an AJAX request to same domain
  - J. Content from an AJAX request to external domain

### This project contains all ten ways to add content (A-J)

As each option runs, its letter is added to the table and image below, as well as to the relevant &lt;title&gt; and &lt;meta&gt; tags in this document's &lt;head&gt;.

If a letter shows in a given search engine or service's results, it means that method was recorded by that search engine or service.

If a letter shows before another letter, it means that letter's method was executed first by the browser or crawler viewing the page.

### Running locally

```
npm install
npm start
```
Visit `http://localhost:5000` in the browser.

### License

[MIT](https://opensource.org/licenses/MIT)