
function generateNav(){

	var nav = document.createElement("nav");

	nav.innerHTML = '<a href="only-html5-video.html">OnlyHTML5Video</a> \
	<a href="html5-games.html">HTML5 Games</a> \
	';

	var bodyEl = document.querySelector("body");
	bodyEl.insertBefore(nav, bodyEl.firstChild);
};


document.addEventListener('DOMContentLoaded', generateNav, false);