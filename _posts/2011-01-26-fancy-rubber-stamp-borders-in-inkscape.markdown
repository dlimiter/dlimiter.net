---
layout:       post
title:        "Quick Tip: Create a Fancy Rubber Stamp Border in Inkscape"
description:  
categories:     
- design
- illustration
- tutorial
---

I've been playing about with drawing flat and embossed stamps in [Inkscape][1] and came across a fairly neat way of producing a fancy rubber stamp border shape, so I thought I'd share it as a quick tip.

### Create the border tile

First off we create a simple shape that will be used as a repeated tile around the stamp border. You can use any particular shape that takes your fancy, but for this example we're going to create a wavy border, so we want our tile to be a repeatable slice of the wave, kind of like a cosine curve.

Use the ellipse tool to create a small circle. Convert the circle to a path. Duplicate it twice and align the three shapes in a horizontal line.

<img class="bordered" alt="screenshot" src="{{ site.url}}/img/tutorial-stamp-border/01.jpg" width="240" height="120" />

Join the intersecting nodes and break the path at the sections that are no longer wanted. 

<img class="bordered" alt="screenshot" src="{{ site.url}}/img/tutorial-stamp-border/02.jpg" width="165" height="120" />

Use the bezier tool to close off the shape and join the nodes to close the path. 

<img class="bordered" alt="screenshot" src="{{ site.url}}/img/tutorial-stamp-border/03.jpg" width="440" height="280" />

The curves are still a bit clunky, so remove some of the mid slope nodes smooth the others to get a cleaner shape.

<img class="bordered" alt="screenshot" src="{{ site.url}}/img/tutorial-stamp-border/04.jpg" width="440" height="280" />

Fill the resulting shape and your tile is complete. Don't worry that the base of the tile is flat, we'll fix that later.

<img class="bordered" alt="screenshot" src="{{ site.url}}/img/tutorial-stamp-border/05.jpg" width="440" height="280" />

### Build the border

Create a circle at the size you want the stamp border and covert it to a path.

Resize the tile you created in the last step to your desired scale.

<img class="bordered" alt="screenshot" src="{{ site.url}}/img/tutorial-stamp-border/06.jpg" width="370" height="330" />

Raise the level of the tile path so that it is above the border circle. Select both and then from the _Extensions_ menu select _Generate from Path_ then _Pattern along Path_.

<img class="bordered" alt="screenshot" src="{{ site.url}}/img/tutorial-stamp-border/07.jpg" width="620" height="300" />

In the settings dialog, toggle the _Live Preview_ option so you can see the effects of your changes. Then set the _Copies of the Pattern_ to `Repeated, Stretched` (so that the tile is repeated and it stretches enough to fill the entire path) and the _Deformation Type_ to `Snake`. Jiggle the space and offset properties until you get a border you are happy with, then click _Apply_ to set the changes and then _close_ to close the dialog.

<img class="bordered" alt="screenshot" src="{{ site.url}}/img/tutorial-stamp-border/08.jpg" width="640" height="380" />

### Cleanup

So now you have the basic outline, but there are still a couple of areas that need to be cleaned up. First, even with the stretching option, the join between the start and end of the repeated tiles along the path is a bit clunky. Zoom in and smooth it out.

<img class="bordered" alt="screenshot" src="{{ site.url}}/img/tutorial-stamp-border/09.jpg" width="400" height="260" />

Finally, the undersides of the tiles are flat rather than matching the curve of the circle. 

<img class="bordered" alt="screenshot" src="{{ site.url}}/img/tutorial-stamp-border/10.jpg" width="550" height="200" />

To fix this we will fill the entire middle of the stamp and then cut out the centre. Select the original circle we used as a template for the stamp and fill it. Depending on the offsets you used earlier, you may need to adjust the size so that it fills the entire shape. Duplicate it and scale the duplicate to a smaller size. 

<img class="bordered" alt="screenshot" src="{{ site.url}}/img/tutorial-stamp-border/11.jpg" width="400" height="390" />

Merge the large circle and the border to create a filled shape, and then use the smaller circe to cut a path out of the centre.

<img class="bordered" alt="screenshot" src="{{ site.url}}/img/tutorial-stamp-border/12.jpg" width="400" height="390" />

And your voila! You have a fancy border ready to be incorporated into your stamp design.

<img class="bordered" alt="screenshot" src="{{ site.url}}/img/tutorial-stamp-border/tutorial-example.jpg" width="400" height="300" />

I hope you've found this useful. If you have any questions or suggestions please leave them in the comments.


[1]:http://inkscape.org/

