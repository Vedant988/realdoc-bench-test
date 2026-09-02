The structure of the search results can be examined with your browser tools, as shown here:

![Screenshot of a web browser showing Google search results for 'test'. The page is open to the developer tools, specifically the 'Elements' tab, showing the HTML structure of the search results. The results are listed under a <div> element with the class 'r', and each result is a <div> element with the class 'r'.](128fcdc2075a9cf9fb2c85e9757059a3_3_img.webp)

Here, we see that the search results are structured as links whose parent element is a `<h3>` tag with class `"r"`.

To scrape the search results, we will use a CSS selector, which was introduced in Chapter 2, *Scraping the Data*:

```
>>> from lxml.html import fromstring
>>> import requests
>>> html = requests.get('https://www.google.com/search?q=test')
>>> tree = fromstring(html.content)
>>> results = tree.cssselect('h3.r a')
>>> results
[<Element a at 0x7f3d9affea8>,
 <Element a at 0x7f3d9affe890>,
 <Element a at 0x7f3d9affe8e8>,
 <Element a at 0x7f3d9affeaa0>,
 <Element a at 0x7f3d9b1a9e68>,
 <Element a at 0x7f3d9b1a9c58>,
 <Element a at 0x7f3d9b1a9ec0>,
 <Element a at 0x7f3d9b1a9f18>,
 <Element a at 0x7f3d9b1a9f70>,
 <Element a at 0x7f3d9b1a9fc8>]
```