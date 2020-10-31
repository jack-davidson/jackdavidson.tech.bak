/* Add a link location to an element in a DRY fashion.  */
function addHref(id, href)
{
	document.getElementById(id).onclick = function()
	{
		window.location.href = href;
	};
}

/* unhide|hide element(content_id) when element(id) is clicked.  */
function addPopOut(id, content_id)
{
	document.getElementById(id).onclick = function()
	{
		var content = document.getElementById(content_id);

		if (content.style.display === "none") {
			content.style.display = "block";
		} else {
			content.style.display = "none";
		}
	};
}

/* Once DOM is fully loaded, do:  */
window.onload = function()
{
	/* Pop out menu by toggling hide/unhide of element.  */
	addPopOut("about", "about_content");
	addPopOut("contact", "contact_content");

	/* Add link location to an element.  */
	addHref("portfolio", "portfolio.html");
	addHref("git", "https://gitlab.com/J0ND03");
	addHref("resume", "resume.html");
}
