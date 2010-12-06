---
layout:       post
title:        "Quick Tip: How Preloaders work"
description: 
categories:     
- developer
---

A preloader is simple little animation that shows while a sub component of a web page is loading (such as a gallery image or some remotely queried information). These are relatively simple to implement with basic html, only requiring Javascript when you want to display the loaded content.

### Step 1 - Get a preloader image 

The preloader animation is itself just a simple animated gif like the one below. 

![example preloader image][10] 

If you're feeling eager, or are are after a specific look and feel you can create these yourself, but for the general case there are a variety of free online resources that allow you to generate and download images for a variety of indicators, background colors and sizes such as [ajaxload.info][1] and [preloaders.net][2].

### Step 2 - Place the preloader image 
Once you have generated an image, it is simply placed in your page html as an `img` element.
      
      <div id="loaded-content">
        <p>
          Loading image...<img src="loader.gif" />
        </p>
      </div>

### Step 3 - Replace the preloader image with the loaded content
So now you have the page element displaying the loader, the final step is to use Javascript to replace the image section with the loaded content once it is available. 

Easy! 

[1]:http://ajaxload.info/
[2]:http://www.preloaders.net/

[10]:{{ site.url }}/img/posts/example-loader.gif
