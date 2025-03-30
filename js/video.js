var video;

// load changes
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay=false;
	console.log('autoplay is set to' + video.autoplay);
	video.loop = false;
	console.log('video looping is set to' + video.loop);
});

// play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
});

// pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// slow down
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	video.playbackRate *=0.9;
	console.log("New speed:" + video.playbackRate);
});

// speed up
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /=0.9;
	console.log("New speed:" + video.playbackRate);
});

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead Video");
	if (video.currentTime<=video.duration- 10){
		video.currentTime+=10;
		console.log(video.currentTime);
	}else{
		video.currentTime = 0;
		console.log(video.currentTime);
	}
});


// mute
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	video.volume=0;
	console.log("New speed:" + video.playbackRate);
	document.querySelector("#volume").innerHTML = video.volume + '%';
});

// volume slider
document.querySelector("#slider").addEventListener("input", function() {
	console.log("Change Volume");
	video.volume=this.value/100;
	document.querySelector("#volume").innerHTML= (video.volume*100) + '%';
});

// Styled
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldSchool");
});

// Original
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool");
});