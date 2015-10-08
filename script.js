$(document).ready(function(){
	$('#experience').hide();
	$('#technical-skills').hide();
	$('#education').hide();
	$('#certifications').hide();

	$('#showExperience').on('click', function(){
		$('#experience').fadeToggle();
	});

	$('#showSkills').on('click', function(){
		$('#technical-skills').fadeToggle();
	});

	$('#showCertifications').on('click', function(){
		$('#certifications').fadeToggle();
	});

	$('#showEducation').on('click', function(){
		$('#education').fadeToggle();
	});

});
