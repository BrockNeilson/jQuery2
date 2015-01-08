$(document).ready(function() {

var listo = [];

$('#newTaskForm').hide();

var task = function(task) {
	this.task = task;
	this.id = new;
}

var addTask = function(task) {
	if(task) {
		task = new Task(task);
		listo.push(task);

		$('#newItemInput').val('');
		$('#newList').appent('<a href="#finish" class="" id="item"><li class="list-group-item">' + task.task + '<span class="arrow pull-right"><i class="glyphicon glyphicon-arrow-right"></span></li></a>');
	}
	$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
};


//Calls addTask function on saveNewItem click
$('#saveNewItem').on('click', function (e) {
	e.preventDefault();
	var task = $('#newItemInput').val().trim();
	addTask(task);
});

//OPENS FORM
$('#newListItem').on('click', function () {
	$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
});

//CLOSES FORM
$('#cancel').on('click', function(e) {
	e.preventDefault();
	$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
})




});