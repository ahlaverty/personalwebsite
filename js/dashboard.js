$().ready(function(){

	$("#task6, #task7").addClass("d-none");

	addBottomBorder();

	//show all tasks when open clicked
	$("#openCard").click(function(){
		$("td.percentComplete:contains(100%)").parent().addClass("d-none").removeClass("d-table-row");;
		$("#task1, #task2, #task3, #task4, #task5").addClass("d-table-row").removeClass("d-none");;
		$(this).removeClass("openCard-off");
		$("#lateCard").addClass("lateCard-off");
		$("#thisWeekCard").addClass("thisWkCard-off");
		$("#nextWeekCard").addClass("nextWkCard-off");
		$("#closedCard").addClass("closedCard-off");

		addBottomBorder();
	});

	//hide for late card
	$("#lateCard").click(function(){
		$("#task2, #task3, #task4, #task5, #task6, #task7").addClass("d-none").removeClass("d-table-row");;
		$("#task1").addClass("d-table-row").removeClass("d-none");;
		$(this).removeClass("lateCard-off");
		$("#openCard").addClass("openCard-off");
		$("#thisWeekCard").addClass("thisWkCard-off");
		$("#nextWeekCard").addClass("nextWkCard-off");
		$("#closedCard").addClass("closedCard-off");

		addBottomBorder();
	});

	//hide for due this week card
	$("#thisWeekCard").click(function(){
		$("#task1, #task4, #task5, #task6, #task7").addClass("d-none").removeClass("d-table-row");;
		$("#task2, #task3").addClass("d-table-row").removeClass("d-none");;
		$(this).removeClass("thisWkCard-off");
		$("#openCard").addClass("openCard-off");
		$("#lateCard").addClass("lateCard-off");
		$("#nextWeekCard").addClass("nextWkCard-off");
		$("#closedCard").addClass("closedCard-off");

		addBottomBorder();
	});

	//hide for due next week card
	$("#nextWeekCard").click(function(){
		$("#task1, #task2, #task3, #task6, #task7").addClass("d-none").removeClass("d-table-row");;
		$("#task4, #task5").addClass("d-table-row").removeClass("d-none");;
		$(this).removeClass("nextWkCard-off");
		$("#openCard").addClass("openCard-off");
		$("#lateCard").addClass("lateCard-off");
		$("#thisWeekCard").addClass("thisWkCard-off");
		$("#closedCard").addClass("closedCard-off");

		addBottomBorder();
	});

	$("#closedCard").click(function(){
		$("#task6, #task7").addClass("d-table-row").removeClass("d-none");;
		$("#task1, #task2, #task3, #task4, #task5").addClass("d-none").removeClass("d-table-row");;
		$(this).removeClass("closedCard-off");
		$("#openCard").addClass("openCard-off");
		$("#lateCard").addClass("lateCard-off");
		$("#thisWeekCard").addClass("thisWkCard-off");
		$("#nextWeekCard").addClass("nextWkCard-off");

		addBottomBorder();
	});

	function addBottomBorder(){
		var lastTrNum = $("tr").not(".d-none").length - 1;

		var lastTR = $("tr").not(".d-none")[lastTrNum];

		$(lastTR).children("th, td").css("border-bottom", "1px solid #dee2e6");
	}
});
