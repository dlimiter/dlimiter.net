---
layout:       post
title:        "A Quick Introduction to CSS3 Gradients"
description: 
categories:     
- developer
---

Before CSS3, gradients on websites generally required the use of images - a somewhat inflexible solution with an impact on load times. CSS3 brings support for gradients, but unfortunately Mozilla and Webkit can't seem to agree on the syntax for these attributes yet (and IE does it differently again), so it is still necessary to use a combination of vendor specific properties to achieve the desired effect.

### Webkit

    -webkit-gradient(<type>, <point> [, <radius>]?, <point> [, <radius>]? [, <stop>]*)  
    
Where: 

* `type` is either `linear` or `radial`
* `point` is a pair of space-separated values designating the X and Y start and end points of the gradient.
* `stop` is a color-stop which is like a split point on the gradient (where the first parameter is the percentage of the distance from the start point to end points of the gradient and the second parameter is the color at that location). If there are no stops, then there is a 100% smooth gradient from the start to finish. 
* `from` and `to` are special stops that describe the start and end colors

For example, the following:  

      background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#2C4161), to(#71A7FA))

Would produce something like:

![gradient example][11]


### Mozilla

      -moz-linear-gradient( [<point> || <angle>,]? <stop>, <stop> [, <stop>]* )  
      -moz-radial-gradient( [<position> || <angle>,]? [<shape> || <size>,]? <stop>, <stop>[, <stop>]* )
  
This is similar to the webkit syntax, with a few subtle differences. Here instead of specifying start and end points for the gradient, the `point` describes the starting point of the gradient and `angle` the angle of the gradient's direction. For the radial gradient, `shape` allows specification of a circular or elliptical as well as `size` and `position` of the origin (in this it is more flexible than the webkit syntax which only allows circular radial gradients).

For example, the following would produce the same gradient as the previous example:

      background: -moz-linear-gradient(top, #2C4161 0%, #71A7FA 100%); 

### IE

      filter:progid:DXImageTransform.Microsoft.Gradient(properties)
      
Where `properties` are taken from the following set of key value pairs:

* `enabled` - whether the filter is enabled.
* `startColorStr`	- initial color for the gradient.
* `endColorStr`	- final color for the gradient
* `gradientType` - the orientation of the gradient.

The IE gradient filter doesn’t support color-stop, gradient angle, and radial gradient, so you can only set horizontal or vertical linear 2 color gradients.

For example, the following would produce the same gradient as the previous examples:

      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2C4161', endColorstr='#71A7FA',GradientType=0 );
      
### Helpers

The syntax can be a bit tricky, especially if you're trying to reproduce a complex effect cross browser. 
<div style="float:right;margin:0 0 10px 10px" markdown="1">
[![westciv screenshot][10]][3]
</div>
If this is all a bit much to juggle, you can find a lot of nice tools and helpers for gradients online. [Westciv][1] offer a nice [set of tools for web developers][2] including a nifty [gradient tool][3] that helps you specify both linear and radial gradients with multiple stops, and generates the corresponding code for both webkit and mozilla browsers. 

The firefox extension [Colorzilla][4] also offers a nice gradient generator on its website. Though it doesn't do radial gradients, it does provides code for IE in addition to mozilla and webkit.

### Further Reading

If you're interested in more complex effects, have a look at the detailed specifications for [webkit][5], [mozilla][6] and [IE][7].


[1]:http://westciv.com/
[2]:http://westciv.com/tools/
[3]:http://westciv.com/tools/gradients/
[4]:http://www.colorzilla.com/gradient-editor/
[5]:http://webkit.org/blog/175/introducing-css-gradients/
[6]:https://developer.mozilla.org/en/CSS/-moz-linear-gradient
[7]:http://msdn.microsoft.com/en-us/library/ms532997(VS.85).aspx

[10]:{{ site.url }}/img/posts/westciv_screenshot.jpg
[11]:{{ site.url }}/img/posts/example_gradient.jpg
