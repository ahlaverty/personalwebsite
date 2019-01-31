$().ready(function(){

	$(window).resize(function(){
		if ($(window).width() <= 992){	
			$(".nav-link").click(function(){
				
				$(".navbar-toggler").addClass("collapsed");
			});
		}	
	});
		
});