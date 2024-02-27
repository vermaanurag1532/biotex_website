//setTimeout(slide,2000);
function slide() {
	document.getElementsByClassName("curtainContainer")[0].style.transform =
		"translatex(-150vw) ";
	document.getElementsByClassName("curtainContainer")[1].style.transform =
		"translatex(150vw)";
}

document.addEventListener("DOMContentLoaded", function() {
    // Create an audio element
    var audio = document.getElementById("bgAudio");

    // Set attribute for loop
    audio.loop = true;

    // Autoplay the audio (check browser policies)
    audio.play().catch(error => {
        // Autoplay was prevented
        console.warn("Autoplay was prevented. Please interact with the page to start audio.");
    });
});

function playAudio() {
    // Play the audio when the button is clicked
    var audio = document.getElementById("bgAudio");
    audio.play();
}

