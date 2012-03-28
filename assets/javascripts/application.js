$(document).ready(function() {

	$('#full-license').hide();

	$('#license-type').change(function() {
		selected = $('#license-type').val();

		if(selected == 'default') {
			$('#full-license').fadeOut("slow");
		} else if(selected == 'provisional') {
			$('#full-license').fadeOut("slow");
		} else {
			$('#full-license').fadeIn("slow");
		}
	});
});
