const widget = document.querySelector('.video-widget');
const widgetVideo = widget.querySelector('.video-widget video');
const closeButton = widget.querySelector('.video-widget .buttons .close');
const muteButton = widget.querySelector('.video-widget .buttons .mute');

widget.style.display = "none";
widgetVideo.addEventListener("canplay", () => widget.style.display = "block");

let widgetPause = false;
let firstClick = true;

widgetVideo.load();
widgetVideo.muted = true;

widgetVideo.addEventListener('click', () => {
	if (firstClick) {
		widgetVideo.currentTime = 0;
		playVideo();
		widgetVideo.muted = false;
		muteButton.classList.remove("muted");
		firstClick = false;
	} else {
		playVideo();
	}
})

closeButton.addEventListener('click', () => {
	if (widget.classList.contains("active")) {
		widget.classList.remove("active");
		widgetVideo.muted = true;
		muteButton.classList.add("muted");
		widgetPause = false;
		firstClick = true;
	} else {
		widget.classList.add("remove");
	}
})

muteButton.addEventListener('click', () => {
	if (muteButton.classList.contains("muted")) {
		widgetVideo.muted = false;
		muteButton.classList.remove("muted");
	} else {
		widgetVideo.muted = true;
		muteButton.classList.add("muted");
	}
})

function playVideo() {
	if (widgetPause === false) {
		widget.classList.add('active');
		widgetVideo.play();
		widgetPause = true;
	} else {
		widgetVideo.pause();
		widgetPause = false;
	}
};