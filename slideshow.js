var i = 0;
var images = [];
var time = 9000;

images[0] = 'images/images2.png';
images[1] = 'images/images3.png';
images[2] = 'images/images4.png';
images[3] = 'images/images5.png';
images[4] = 'images/blackstar.png'

function changeImg() {
	document.slide.src = images[i];

	if(i < images.length - 1){
		i++;
	} else {
		i = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload = changeImg;