$(document).ready(function() {
	
	$('div').click(
		function() {
		$('div').addClass("pressed");
		},
		function() {
		$('div').removeClass("pressed")
	});
});