
let subOpen = false;

function openMenu() {
  document.getElementById('menu').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  document.getElementById('menu').classList.remove('active');
  document.body.style.overflow = '';
}

function toggleSubnav() {
  const sub = document.getElementById('subnav');
  const icon = document.getElementById('subIcon');

  if (!subOpen) {
    sub.style.maxHeight = sub.scrollHeight + 'px';
    icon.innerText = '−';
  } else {
    sub.style.maxHeight = '0';
    icon.innerText = '+';
  }
  subOpen = !subOpen;
}