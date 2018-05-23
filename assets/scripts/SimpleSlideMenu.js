document.addEventListener('DOMContentLoaded', function(event){
    var simpleSlideMenu = new SimpleSlideMenu();
    simpleSlideMenu.init();
});

SimpleSlideMenu = function(){};

SimpleSlideMenu.prototype.init = function() {
    this.showMenu = false;
    this.trigger = document.querySelector('.js_slide_menu__trigger');
    this.openIcon = document.querySelector('.js_slide_menu__open-icon');
    this.closeIcon = document.querySelector('.js_slide_menu__close-icon');
    this.menu = document.querySelector('.js_slide_menu__nav');
    this.menuOpenClass = 'js_slide_menu__open';
    this.menuCloseTempClass = 'js_slide_menu__close';
    this.bodyClass = 'js_slide_menu__body_on_open';
    this.bodyTempClass = 'js_slide_menu__body_on_close';

    this.createBodyOverlay();
    this.trigger.addEventListener('click', this.onClick.bind(this));
};

SimpleSlideMenu.prototype.createBodyOverlay = function(){
    var overlay = document.createElement('div');
    overlay.classList.add('js_slide_menu__body_overlay');
    document.body.appendChild(overlay);
};

SimpleSlideMenu.prototype.onClick = function(event){
    var element = event.target;

    if (!element.classList.contains('js_slide_menu__trigger')) {
        element = document.querySelector('.js_slide_menu__trigger');
    }

    var targetCloseIcon = element.querySelector('.js_slide_menu__close-icon');

    if(targetCloseIcon.style.display === 'none') {
        this.showMenu = true;
    }

    this.toggleMenu();
    this.showMenu = false;
};

SimpleSlideMenu.prototype.toggleMenu = function() {
    this.toggleMenuClass();
    this.toggleBodyClass();
    this.toggleIcon();
    this.addCloseTransitionEffect();
};

SimpleSlideMenu.prototype.addCloseTransitionEffect = function(){
    if(this.showMenu) {
        return;
    }

    this.menu.classList.add(this.menuCloseTempClass);
    document.body.classList.add(this.bodyTempClass);
    setTimeout(this.removeTempClasses.bind(this), 500);
};

SimpleSlideMenu.prototype.removeTempClasses = function(){
    this.menu.classList.remove(this.menuCloseTempClass);
    document.body.classList.remove(this.bodyTempClass);
};

SimpleSlideMenu.prototype.toggleMenuClass = function(){
    if(this.showMenu) {
        this.menu.classList.add(this.menuOpenClass);
        return;
    }

    this.menu.classList.remove(this.menuOpenClass);
};

SimpleSlideMenu.prototype.toggleBodyClass = function(){
    if(this.showMenu) {
        document.body.classList.add(this.bodyClass);
        return;
    }

    document.body.classList.remove(this.bodyClass);
};

SimpleSlideMenu.prototype.toggleIcon = function(){
    if(this.showMenu) {
        this.openIcon.style.display = 'none';
        this.closeIcon.style.display = 'inline-block';
        return;
    }

    this.openIcon.style.display = 'inline-block';
    this.closeIcon.style.display = 'none';
};