---
layout:       post
title:        "Wacom Tablet with the GIMP and Inkscape on OSX"
description: 
categories:     
- design
- illustration
---

When I started devoting more time to improving my design and illustration skills I decided that it would be a good idea to invest in a Wacom tablet. After browsing the range, I settled on the relatively cheap consumer Bamboo Pen and Touch. I was initially a bit worried about the smallish size, but as I tend to draw more from the wrist and elbow than the shoulder it's actually ended up being quite comfortable.

I'm not generating any income from my illustration or design at the moment and I can't justify the expense of Photoshop or Illustrator so I've been working with the [GIMP][1] and [Inkscape][2]. Unfortunately, these applications don't run natively on OSX and I soon encountered problems with the tablet pressure sensitivity and key mappings. After a bit of tweaking I managed to get everyone to play nice and I thought I'd share what I learned in case it can be of help to anyone else.

### Update X11

The drivers bundled with the tablet will get it working with OSX, but the GIMP and Inkscape were originally written for linux operating systems and as such use the X11 Window System. OSX includes a very basic X11 port that supports the tablet to a limited extent, but if you want extended functionality you should install an alternative X11 port like [XQartz][3]. Make sure you reboot after installation to avoid conflicts with the old X11 install. 

### Key Mappings

The next problem I came across was that the `ALT` key was not working properly in X11. This is due to the default way that keyboard mappings are handled by the bundled X11. I actually encountered this before installing XQuartz and found a solution on the [Inkscape wiki][4] which describes how to rectify this by creating and modifying an `xmodmap` to explicitly define the key mappings. 

If you've already installed XQuartz however you can avoid all that messy mucking about with text files and just edit the X11 preferences to select `Option keys send Alt\_L and Alt\_R` and unselect `Emulate three button mouse`.

<img alt="screenshot" src="{{ site.url }}/img/posts/x11-preferences.jpg" width="340" height="240" />

### Pressure Sensitivity

To enable pressure sensitivity and in Inkscape and the GIMP you will need to tweak the input device settings in each program.

In Inkscape, launch the `Input Devices` dialog from the `File` menu. This dialog will have the tablet listed as an input device. Change any components marked as `Disabled` to `Screen`, select `Use pressure sensitive tablet` and restart Inkscape.

<img alt="screenshot" src="{{ site.url }}/img/posts/inkscape-inputdevices-tablet.jpg" width="215" height="240" />

In the GIMP, launch the `Preferences` dialog from the `Edit` menu. in this dialog select `Input Devices`, `Configure Extended Input Devices`. In the dialog this launches, select the `Pen` device (you can also configure the eraser and such) and set the mode to `Screen`.

<img alt="screenshot" src="{{ site.url }}/img/posts/gimp-configure-input-devices.jpg" width="450" height="300" />

And that should be it. Good luck!

[1]:http://gimp.org/
[2]:http://inkscape.org/
[3]:http://xquartz.macosforge.org/trac/wiki/
[4]:http://wiki.inkscape.org/wiki/index.php/FAQ#How_to_make_the_Alt_key_work_.3F
