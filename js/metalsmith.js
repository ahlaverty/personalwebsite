$().ready(function(){

	$("#ringsLink").click(function(){
		showCarousel(".rings");
	});

	$("#earringsLink").click(function(){
		showCarousel(".earrings");
	});

	$("#pendantsLink").click(function(){
		showCarousel(".pendants");
	});


	function showCarousel(classname){
		//remove active from others
		$(".carousel-item").removeClass("active");

		$(classname).first().addClass("active");

		$(classname).addClass("d-block").removeClass("d-none");
		
		return false;
	}

});