var slideIndex = 0;
showSlides();


function showSlides() {
	
	var i;
	var slides = document.getElementsByClassName("mySlides");
		
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	
	slideIndex++;
			  
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}    
			  
	slides[slideIndex-1].style.display = "block";  
	setTimeout(showSlides, 10000); // Change image every 2 seconds
			
}


function arrowDarkIcon(){
	document.getElementsByClassName("arrow-icon")[0].src="icons/arrow-down-dark.svg";
}

function arrowWhiteIcon(){
	document.getElementsByClassName("arrow-icon")[0].src="icons/arrow-down-white.svg";
}

function barDarkIcon(){
	document.getElementsByClassName("bar-icon")[0].src="icons/menu-bar-dark.svg";
}

function barWhiteIcon(){
	document.getElementsByClassName("bar-icon")[0].src="icons/menu-bar-white.svg";
}