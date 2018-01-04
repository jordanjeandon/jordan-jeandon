$(document).ready(function() {


	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1.2
	        },
	        600:{
	            items:2.2
	        },
	        1000:{
	            items:2.7
	        }
	    }
	})

	
	$(window).scroll(function() {	    
	    var scroll = $(window).scrollTop();
		if (scroll >= 100) {
		    $('#header').removeClass("navbar-transparent");
		    $('#header').addClass("navbar-non-transparent");
		} else {
		    $('#header').addClass("navbar-transparent");
	    	$('#header').removeClass("navbar-non-transparent");
	   	}
	  	$('#mobile-button').on('click' , function () {
	    	$('#header').removeClass("navbar-transparent");
	    	$('#header').addClass("navbar-non-transparent");
	  	});
	});



	$(document).mouseleave(function () {
	    $('#myModal').modal('show');
	});
	$(document).mouseenter(function () {
		$('#myModal').modal('hide');
	});

	

    
});




	

