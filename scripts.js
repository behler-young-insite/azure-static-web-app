console.log("hello world!");

//var helloWorldText = document.getElementsByClassName("hello-world")[0];
var body = document.getElementsByTagName("body")[0];

document.addEventListener("click", function (event) {
	if (!event.target.matches(".hello-world")) return;
	event.preventDefault();
	body.style.backgroundColor = getRandomColor();
	body.style.color = getRandomColor();
});

document.addEventListener("click", function (event) {
	if (!event.target.matches(".power-button")) return;
	event.preventDefault();
	powerOff();
});

function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function powerOff() {
	window.close();
}

var yourUrl =
	"https://static-web-app-test.azurewebsites.net/api/HttpTrigger1?code=nmx176E/v3sTTXMEwaB1QiGVq6fCfkkn/LCNDAbzUde22ankmZBCNg==";

var xhr = new XMLHttpRequest();
xhr.open("POST", yourUrl, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(
	JSON.stringify({
		//name: "Derek & Rob",
		name: "Derek",
	})
);

xhr.onreadystatechange = function () {
	if (this.readyState != 4) return;

	if (this.status == 200) {
		console.log(this.responseText);
	}
};
