// To prevent page from jumping to top when refreshing
window.onbeforeunload = function () {
  localStorage.setItem('scrollPosition', window.scrollY);
}

window.onload = function () {
  if (localStorage.getItem('scrollPosition') !== null) {
    window.scrollTo(0, localStorage.getItem('scrollPosition'));
  }
}