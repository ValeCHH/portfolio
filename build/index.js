// Smooth Scrolling for internal links
$('a[href^="#"]').on("click", function(e) {
	e.preventDefault();

	var target = this.hash;
	var $target = $(target);

	$("html, body").stop().animate({
		"scrollTop": $target.offset().top
	}, 900, 'swing', function () {
		window.location.hash = target;
	});
});


var toogleNavScroll = function() {
	var scroll = $(window).scrollTop();
	var isScroll = (scroll > window.innerHeight - 55);
	if (isScroll)  $("#nav").removeClass("bg-transparent");
     else $("#nav").addClass("bg-transparent");
}

// Change background of nav bar on scroll
$(window).scroll(function() { 
	toogleNavScroll();
});

// Correct bug when nav is loading in the middle of page
$(window).ready(function() {  
	toogleNavScroll();
});

// Open the portfolio pop up 
$( "#folio i:nth-child(2)" ).click(function() { // Second icon
	var id = "#" + $(this).attr("page") ;
	$("#folio_pop_content").html($(id +" span:nth-child(1)").html()); // First folio span
	$("#folio_pop_link").attr("href", $(id +" span:nth-child(2)").html() ); // Second folio span
	$("#folio_pop").css("display", "flex").hide().fadeIn();
});

// Close the portfolio pop up
$( "#folio_pop_close" ).click(function() {
	$("#folio_pop").fadeOut();
});