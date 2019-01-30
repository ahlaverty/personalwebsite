$().ready(function(){
	$("#expandBtn").click(function(){
        $("#regionAccordion .card-body").each(function(){
            $(this).parent().addClass("show");
            $(this).parent().prev().children(".regionBtn").removeClass("collapsed");

            var test = $(this).parent().prev().children(".regionBtn");
            console.log(test);
        });
    });
});