//setTimeout(slide,2000);
function slide() {
	document.getElementsByClassName("curtainContainer")[0].style.transform =
		"translatex(-150vw) ";
	document.getElementsByClassName("curtainContainer")[1].style.transform =
		"translatex(150vw)";
}

document.addEventListener("DOMContentLoaded", function() {
    // Create an audio element
    var audio = new Audio("../assets/biotex.mp3");
    
    // Set attributes for autoplay and loop
    audio.autoplay = true;
    audio.loop = true;

    // Append the audio element to the body
    document.body.appendChild(audio);
});
