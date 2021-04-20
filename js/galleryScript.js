function myFunction(imgs) {
	var expandImg = document.getElementById("expandedImg");
	var NavID = imgs.id;

	expandImg.src = imgs.src;
	expandImg.parentElement.style.display = "block";
}


function galleri(img){
	var imgID = img.id;

	document.getElementById("galleri-nav").innerHTML = "";

	var galleryImg = ['frivillig1.gif', 'frivillig2.jpg', 'frivillig3.gif', 'frivillig4.jpg'];

	for (var i = galleryImg.length - 1; i >= 0; i--) {
		var image = document.createElement("img");
		
		image.setAttribute("id", "fri" + i);
		image.setAttribute("src", "img/" + galleryImg[i]);
		image.setAttribute("onclick", "myFunction(this); galleri(this);");
		image.setAttribute("class", "small");

		var imgIDCheck = image.getAttribute("id");
		
		if (imgIDCheck == imgID) {
			image.setAttribute("style", "display:none;");
		}

		document.getElementById("galleri-nav").appendChild(image);
	}
}