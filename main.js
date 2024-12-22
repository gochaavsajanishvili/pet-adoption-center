// To prevent page from jumping to top when refreshing
window.onbeforeunload = function () {
  localStorage.setItem('scrollPosition', window.scrollY);
}

window.onload = function () {
  if (localStorage.getItem('scrollPosition') !== null) {
    window.scrollTo(0, localStorage.getItem('scrollPosition'));
  }
}

// await keyword can only be used inside an async function, because it is part of the async/await feature in JavaScript and can't be used in the global scope.
async function start() {

  // Await means that the function will wait for the promise to resolve before continuing
  // fetch() function returns a promise that resolves to the Response to that request, whether it is successful or not.
  // The promise in javascript means that it hasn't happened yet, but it's promising that it will happen at some point in the future. That's why we have to await for it to actually trully finish.
  const weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast");

  const weatherData = await weatherPromise.json();
}
