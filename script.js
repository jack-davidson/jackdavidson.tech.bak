function toggleContent(id)
{
	var id_content = document.getElementById(id);
	if (id_content.style.display === "none") {
		id_content.style.display = "block";
	} else {
		id_content.style.display = "none";
	}
}

function unhideContent(id)
{
	document.getElementById(id).style.display = "block";
}

function hideContent(id)
{
	document.getElementById(id).style.display = "none";
}

function goTo(id)
{
	document.getElementById(id).scrollIntoView();
}
