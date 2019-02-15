$().ready(function(){

	$("#ringsLink").click(function(){
		showCarousel(".rings");

		if($(".carousel-item.rings").length === 1){
			$("a[^='.carousel-control-']").hide();
		}
		else{
			$("a[^='.carousel-control-']").show();
		}
	});

	$("#earringsLink").click(function(){
		showCarousel(".earrings");
		if($(".carousel-item.earrings").length === 1){
			$("a[^='.carousel-control-']").hide();
		}
		else{
			$("a[^='.carousel-control-']").show();
		}
	});

	$("#pendantsLink").click(function(){
		showCarousel(".pendants");

		if($(".carousel-item.pendants").length === 1){
			$("a[^='.carousel-control-']").hide();
		}
		else{
			$("a[^='.carousel-control-']").show();
		}
	});


	function showCarousel(classname){
		//remove active from others
		$(".carousel-item").removeClass("active");

		$(classname).first().addClass("active");

		$(classname).addClass("d-block").removeClass("d-none");
		
		return false;
	}

});