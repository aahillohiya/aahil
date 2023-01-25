canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var B_image;

img_x = 100;
img_y = 100;

function add() {
	b_imgTag = new Image(); //defining a variable with a new image
	b_imgTag.onload = uploadimg; // setting a function, onloading this variable
	b_imgTag.src = B_image;   // load image
}

function uploadimg() {

	ctx.drawImage(b_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		alphabetkey();
		document.getElementById("d1").innerHTML="You pressed Alphabet Key"; 
		console.log("alphabet key");
			
		else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function alphabetkey()
{
	B_image="Alpkey.png";
	add();
}

function numberkey()
{
	B_image="numkey.png";
	add();
}
function arrowkey()
{
	B_image="Arrkey.png";
	add();
}
function specialkey()
{
	B_image="spkey.png";
	add();
}
function otherkey()
{
	B_image="otherkey.png";
	add();
}
	
