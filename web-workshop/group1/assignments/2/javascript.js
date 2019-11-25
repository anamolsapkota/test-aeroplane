var title = document.title;

document.getElementById('content_title').innerHTML = "This is <b>" + title + "</b> page.";

$(document).ready(function () {
	$("input").keypress(function (evt) {

		var keycode = evt.charCode || evt.keyCode;
  if (keycode  == 13) { //Enter key's keycode
  	console.log("Enter pressed");    
  return false;
}
if (keycode  == 123) { //Enter key's keycode
	console.log("F12 pressed.");
return false;
}
});
});