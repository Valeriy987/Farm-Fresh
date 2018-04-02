document.getElementById("slider-left").onclick = sliderLeft;
document.getElementById("slider-right").onclick = sliderRight;

var left = 0;

function sliderLeft(){

	var polosa = document.getElementById('polosa');

	left = left - 714;
	if (left < -1428) {
		left = 0;
	}
	polosa.style.left = left + 'px';
}

function sliderRight(){

	var polosa = document.getElementById('polosa');

	left = left + 714;
	if (left > 0) {
		left = -1428;
	}
	polosa.style.left = left + 'px';
}

function menu() {
    var ul = document.getElementById("cat");
	if(ul.style == "display:block"){
        ul.style = "display:none";
	}else if(ul.style == "display:none"){
        ul.style = "display:block";
	}
}

var link = document.getElementById("link");
link.addEventListener('click', function (event) {
    event.preventDefault();
});