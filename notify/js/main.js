$(document).ready(function(){
	$('#nav').slicknav();
	$("#responsive-video").fitVids();
	$(".logo_list").owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true
		
	});
	
	
    $('.project_list').mixItUp();
	
	
	$(".cawousel_list").owlCarousel({
		items:4,
		loop:true,
		margin:10,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true
	});

});
