$().ready(function(){

	hideNav();

	$(window).resize(function(){
		hideNav();

	});
		
	function hideNav(){
		$(".nav-link").click(function(){
			if($(window).width() <= 992){
				
				$(".navbar-toggler").addClass("collapsed").attr("aria-expanded","false");
				$(".navbar-collapse").removeClass("show");
			}
		});	
	}
});