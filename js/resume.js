(function(){
	// draw the percentage bar of  skills
	var bars = document.querySelectorAll(".category.skill dd");

	for(var idx=0; idx < bars.length; idx+=1){
		var bar = bars[idx];
		var percentage = bar.innerHTML || "0%" // get percentage value

		var cur = document.createElement("span");
		cur.className = "current";
		cur.style.width = "" + percentage; // set the occupancy of the bar by percentage


		bar.innerHTML = "";
		bar.appendChild(cur); // append the bar 

		bar.setAttribute("title", percentage); //  add title desc

	}
	
})();