//tipyng efect
var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
  loop: true
});

typewriter.typeString('Looking for a FrontEnd developer?')
  .pauseFor(2500)
  .deleteAll()
  .typeString('Here are some of my Projects. ')
  .pauseFor(2500)
  .deleteChars(10)
  .typeString('Make yourself comfortable.')
  .start();

//togle Modal
function toggleP() {
  let p = document.getElementById("Modal");
  if (p.style.display === "block") {
    p.style.display = "none";
  } else {
    p.style.display = "block";
  }
}

