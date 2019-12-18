var $ = function(id) {
	return document.getElementById(id);
};

function fortoDoList_click() {
    window.location.assign("toDoList.html");
}

function forgroceryList_click() {
    window.location.assign("groceryList.html");
}

function forstickyNoteList_click() {
    window.location.assign("stickyNoteList.html");
}

window.onload = function () {
	$("fortoDoList").onclick = fortoDoList_click;
	$("forgroceryList").onclick = forgroceryList_click;
	$("forstickyNoteList").onclick = forstickyNoteList_click;
};