$(document).ready(
	
	function(){

		$("div.navbar-mobile > ul > li:nth-child(6)").on("click", function(){
			$("li").each(function(){
				if ($(this).hasClass("hide")) {
					$(this).removeClass("hide");
					$(this).addClass("show");
				} else if ($(this).hasClass("show")){
					$(this).removeClass("show");
					$(this).addClass("hide");					
				}
			});
		});



		setInterval(function(){

		$(".carousel-item").each(
			function(index){
				if($(this).hasClass("show")){
					$(this).removeClass("show");
					$(this).addClass("hide");
						if (index < 2) {
							showItem(index + 1);
						} else {
							showItem(0)
						}
					return false;
				}
			}
		);			
		
		function showItem(carouselItem){
			$(".carousel-item").each(
				function(index){
					if (carouselItem === index) {
						$(this).removeClass("hide");
						$(this).addClass("show");
						return false;
					}
				}
			);				
		}

		},3000);
	}
);