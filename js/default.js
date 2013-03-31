(function() {
 	var content_wrapper = document.querySelector("#content-wrapper");
	var nav_wrapper = document.querySelector("#nav-wrapper");
	nav_wrapper.addEventListener("mouseover", showNav, false);
	nav_wrapper.addEventListener("mouseout", hideNav, false);

	var nav_cover = nav_wrapper.querySelector("#nav-cover");
	var nav_items = nav_wrapper.querySelector("#nav-items");

	var NAV_WRAPPER_WIDTH = nav_wrapper.clientWidth;
	var EXTRA_MARGIN = 14;
	var CONTENT_WIDTH = document.body.clientWidth - NAV_WRAPPER_WIDTH - EXTRA_MARGIN;
	content_wrapper.setAttribute("style", "width: " + CONTENT_WIDTH + "px;");

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
