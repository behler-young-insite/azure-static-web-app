console.log("hello world!");

//var helloWorldText = document.getElementsByClassName("hello-world")[0];
var body = document.getElementsByTagName("body")[0];

document.addEventListener("click", function (event) {
	console.log(event);
    if (!event.target.matches(".hello-world")) return;
    event.preventDefault();
	body.style.backgroundColor = getRandomColor();
	body.style.color = getRandomColor();
  },
);

document.addEventListener("click", function (event) {
  console.log(event);
  if (!event.target.matches(".power-button")) return;
  event.preventDefault();
  powerOff();
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function powerOff(){
	window.close();
}