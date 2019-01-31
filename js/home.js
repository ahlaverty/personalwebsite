$().ready(function(){

	//check for nav
	hideNav();

	$(window).resize(function(){
		hideNav();

	});


	$(".navbar-toggler").click(function(){
		if($(this).attr("aria-expanded") === "false"){
			$(".navbar-toggler-icon").removeClass("fa-ellipsis-v").addClass("fa-times");
		}
		else{
			$(".navbar-toggler-icon").addClass("fa-ellipsis-v").removeClass("fa-times");
		}
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