import React from "react";

import PageSwitcher from "./PageSwitcher";

import "./App.css";


const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});
document.addEventListener('click', e => {
  e.preventDefault();

  /* dirty hacks lol
   * https://css-tricks.com/restart-css-animation */
  cursor.classList.remove('cursor');
  void cursor.offsetWidth;
  cursor.classList.add('cursor');

}, false);

const App = () => {
  return (
    <div
      className="App"
    >
      <PageSwitcher />
    </div>
  );
}

export default App;
