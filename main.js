let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let nouvil = document.querySelector('.nouvil');

window.onscroll = function () {
  let val = scrollY;

  stars.style.left = val + 'px';
  moon.style.top = val * 4 + 'px';
  mountains3.style.top = val * 2 + 'px';
  mountains4.style.top = val * 1.5 + 'px';
  river.style.top = val + 'px';
  boat.style.top = val + 'px';
  boat.style.left = val * 3 + 'px';
  nouvil.style.fontSize = val + 'px';
  if (val >= 67) {
    nouvil.style.fontSize = 67 + 'px';
    nouvil.style.position = 'fixed';

    if (val >= 478) {
      nouvil.style.display = 'none';
    } else {
      nouvil.style.display = 'block';
    }

    if (val >= 127) {
      document.querySelector('main').style.background = 'linear-gradient(#376281, #10001f)';
    } else {
      document.querySelector('main').style.background = 'linear-gradient(#200016, #10001f)';
    }
  }
}