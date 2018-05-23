#Simple Slide Menu

##Getting started

Clone this repository, and add the minified CSS and JS inside **dist/** directory to your project.

```
<link rel="stylesheet" type="text/css" href="simple-slide-menu/simpleSlideMenu.min.css" />
<script type="text/javascript" src="simple-slide-menu/dist/simpleSlideMenu.min.js"></script>
```

* Add the HTML below on the top of your body or header tag. That will be the trigger to open the menu when clicked. You can customize the trigger style as you wish, including more CSS classes and even add a image or icon inside 'js_slide_menu__open-icon' and 'js_slide_menu__close-icon'.

```
<div class="js_slide_menu__trigger">
    <span class="js_slide_menu__open-icon">Menu</span>
    <span class="js_slide_menu__close-icon" style="display: none;">Close</span>
</div>
```

* On your navigation container (div or nav tag), include the class 'js_slide_menu__nav'.

```
<nav class="my_nav_class js_slide_menu__nav">
    ...
</nav>
```