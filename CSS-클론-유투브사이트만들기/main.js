const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click',() => {
  // toggle : 스위치라고 생각하기 on/off
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});