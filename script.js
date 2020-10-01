$(function() {
	var selectedClass = '';
	$('.filter').click(function() {
		selectedClass = $(this).attr('data-rel');
		$('#gallery').fadeTo(100, 0.1);
		$('#gallery div').not('.' + selectedClass).fadeOut().removeClass('animation');
		setTimeout(function() {
			$('.' + selectedClass).fadeIn().addClass('animation');
			$('#gallery').fadeTo(300, 1);
		}, 300);
	});
});

$('.navbar-nav>li>a').on('click', function() {
	$('.navbar-collapse').collapse('hide');
});

$(document).ready(function() {
	var scroll_pos = 0;
	$(document).scroll(function() {
		scroll_pos = $(this).scrollTop();
		if (scroll_pos > 300) {
			$('.navbar').css('background-color', '#F85030');
		} else {
			$('.navbar').css('background-color', '');
		}
	});
});
