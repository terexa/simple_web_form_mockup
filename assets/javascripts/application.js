$(document).ready(function() {

	$('#full-license').hide();
	$('#driver1').hide();
	$('#driver2').hide();
	$('#driver3').hide();

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

	$("#add-driver").live("click", function() {
		 
		var n = $('#driver1').children().size() == 0 ? 1 : $('#driver2').children().size() == 0 ? 2 : $('#driver3').children().size() == 0 ? 3 : 4;
		
		if (n<4) {
			if (n==3){
				$('#add-driver').fadeOut('slow');
			}
			
		$('#driver'+n).append("<div id='detail-top-"+n+"' class='detail-top'>Driver "+n+"</div>");
		$('#driver'+n).append("<FORM id='form-drive"+n+"' action='#' method='post'><FORM/>");
		$('#form-drive'+n).append("<div class='row'><a id='"+n+"' class='delete-driver' href='#'>Delete this driver</a><LABEL for='dateofbirth'>Date of Birth: </LABEL><INPUT type='text' id='dateofbirth'> Example: 18/05/1970</div>");
		$('#form-drive'+n).append("<div class='row'><LABEL>Gender: </LABEL><INPUT type='radio' name='sex' value='Male'>Male<BR><INPUT type='radio' name='sex' value='Female'>Female<BR></div>");
		$('#form-drive'+n).append("<div class='row'><LABEL>License Type: </LABEL><select><option value='default'>Please select</option><option value='provisional'>Provisional</option><option value='eu'>Full EU</option><option value='irish'>Full Irish</option></select></div>");
		$('#driver'+n).show();
		
		updateLabels();
		}
	});
	
	$(".delete-driver").live("click", function() {
		var n = $(this).attr("id");
		$('#driver'+n).empty();
		$('#driver'+n).hide();
		$('#add-driver').fadeIn('slow');
		
		updateLabels();
	});
	
	function updateLabels(){
		var n = 1;
		
		if ($('#driver1').children().size() != 0) {
			$('#detail-top-1').empty();
			$('#detail-top-1').append("Driver "+n);
			n=n+1;
		}
		if ($('#driver2').children().size() != 0) {
			$('#detail-top-2').empty();
			$('#detail-top-2').append("Driver "+n);
			n=n+1;
		}
		if ($('#driver3').children().size() != 0) {
			$('#detail-top-3').empty();
			$('#detail-top-3').append("Driver "+n);
		}
	};
	
});


				