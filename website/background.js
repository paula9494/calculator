/*changing background after refreshing page*/

document.addEventListener("DOMContentLoaded", function (event) {
  function setBackground () {
    const backgrounds = [
      'url(first-url.jpg)',
      'url(second-url.jpg)'
    ];
    const backgroundElement = document.body;

    //selecting a random background from the array
    const drawBackground = Math.floor(Math.random() * backgrounds.length);
    const randomBackground = backgrounds[drawBackground];

    backgroundElement.style.backgroundImage = randomBackground;
  }

  setBackground();
});


/*dynamic background*/

/*document.addEventListener("DOMContentLoaded", function (event) {
  function setBackground () {
    const backgrounds = [
      'url(first-url.jpg)',
      'url(second-url.jpg)'];
    let firstBackground = 0;
    const backgroundElement = document.body;

    function nextBackground () {
      backgroundElement.style.backgroundImage = backgrounds[firstBackground = ++firstBackground % backgrounds.length];
      setTimeout(nextBackground, 10000);
    }

    setTimeout(nextBackground, 10000);
    backgroundElement.style.backgroundImage = backgrounds[0];
  }

  setBackground();
});*/
