$().ready(function(){

	$("#task6, #task7").hide();

	//show all tasks when open clicked
	$("#openCard").click(function(){
		$("td.percentComplete:contains(100%)").parent().hide();
		$("#task1, #task2, #task3, #task4, #task5").show();
		$(this).removeClass("openCard-off");
		$("#lateCard").addClass("lateCard-off");
		$("#thisWeekCard").addClass("thisWkCard-off");
		$("#nextWeekCard").addClass("nextWkCard-off");
		$("#closedCard").addClass("closedCard-off");
	});

	//hide for late card
	$("#lateCard").click(function(){
		$("#task2, #task3, #task4, #task5, #task6, #task7").hide();
		$("#task1").show();
		$(this).removeClass("lateCard-off");
		$("#openCard").addClass("openCard-off");
		$("#thisWeekCard").addClass("thisWkCard-off");
		$("#nextWeekCard").addClass("nextWkCard-off");
		$("#closedCard").addClass("closedCard-off");
	});

	//hide for due this week card
	$("#thisWeekCard").click(function(){
		$("#task1, #task4, #task5, #task6, #task7").hide();
		$("#task2, #task3").show();
		$(this).removeClass("thisWkCard-off");
		$("#openCard").addClass("openCard-off");
		$("#lateCard").addClass("lateCard-off");
		$("#nextWeekCard").addClass("nextWkCard-off");
		$("#closedCard").addClass("closedCard-off");
	});

	//hide for due next week card
	$("#nextWeekCard").click(function(){
		$("#task1, #task2, #task3, #task6, #task7").hide();
		$("#task4, #task5").show();
		$(this).removeClass("nextWkCard-off");
		$("#openCard").addClass("openCard-off");
		$("#lateCard").addClass("lateCard-off");
		$("#thisWeekCard").addClass("thisWkCard-off");
		$("#closedCard").addClass("closedCard-off");
	});

	$("#closedCard").click(function(){
		$("#task6, #task7").show();
		$("#task1, #task2, #task3, #task4, #task5").hide();
		$(this).removeClass("closedCard-off");
		$("#openCard").addClass("openCard-off");
		$("#lateCard").addClass("lateCard-off");
		$("#thisWeekCard").addClass("thisWkCard-off");
		$("#nextWeekCard").addClass("nextWkCard-off");
	});


});
