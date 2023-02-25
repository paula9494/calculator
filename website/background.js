/*Later I want to create two dynamic sets of backgrounds and colors, chosen randomly when page is loaded, now they are separated functions*/

/*changing background after refreshing page*/

document.addEventListener("DOMContentLoaded", function (event) {
  function setBackground () {
    const backgrounds = [
      'url(https://img.freepik.com/free-vector/linear-flat-abstract-lines-pattern_23-2148941500.jpg?w=2000)',
      'url(https://c0.wallpaperflare.com/preview/408/615/781/candy-lollipop-repetition-repetitive.jpg)',
      'url(https://us.123rf.com/450wm/tkuzminka/tkuzminka1808/tkuzminka180800046/111655194-cute-seamless-pattern-polka-dot-abstract-ornament-decorated-pink-black-hand-drawn-circles-round.jpg?ver=6)'
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
