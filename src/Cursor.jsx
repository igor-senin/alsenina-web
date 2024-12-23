import './Cursor.css';

const Cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  Cursor.style.left = e.pageX + 'px';
  Cursor.style.top = e.pageY + 'px';
});
document.addEventListener('click', e => {
  e.preventDefault();

  /* dirty hacks lol
   * https://css-tricks.com/restart-css-animation */
  Cursor.classList.remove('cursor');
  void Cursor.offsetWidth;
  Cursor.classList.add('cursor');

}, false);

export default Cursor;
