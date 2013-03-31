function() {
	var nav_wrapper = document.querySelector("#nav-wrapper");
	nav_wrapper.addEventListener("mouseover", showNav, false);
	nav_wrapper.addEventListener("mouseout", hideNav, false);

	var nav_cover = nav_wrapper.querySelector("#nav-cover");
	var nav_items = nav_wrapper.querySelector("#nav-items");

	function showNav() {
		var style = "display: none;";
		nav_cover.setAttribute("style", style);
		style = "display: inline-block;";
		nav_items.setAttribute("style", style);
	}

	function hideNav() {
		var cover_style = "display: inline-block;";
		nav_cover.setAttribute("style", cover_style);
		style = "display: none;";
		nav_items.setAttribute("style", style);
	}
})();
