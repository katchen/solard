var menu = document.getElementById('menu');
var docked;
var init = menu.offsetTop;

window.onscroll = function () {
  if (!docked && (menu.offsetTop - scrollTop() < 0)) {
    menu.style.top = 0;
    menu.style.position = 'fixed';
    docked = true;
  } else if (docked && scrollTop() <= init) {
    menu.style.position = 'absolute';
    menu.style.top = init + 'px';
    docked = false;
  }
};

function scrollTop() {
  return document.body.scrollTop || document.documentElement.scrollTop;
}