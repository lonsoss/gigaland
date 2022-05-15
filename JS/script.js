

$(function(){
    $(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
  var owl = $('.owl-carousel');
    owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:false,
    autoplayTimeout:2500,
    autoplayHoverPause:true
  });

  var owl = $('.owl-carousel');
  owl.owlCarousel();
    // Go to the next item
  $('.next').click(function() {
    owl.trigger('next.owl.carousel');
  })
    // Go to the previous item
  $('.previous').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
  });


  $(".go-top").click(function(){
    // $("body,html").animate({"scrollTop": 0}, 1500)
    window.scrollTo({top: 0, behavior: 'smooth'});
  });

  let navbar = $('nav');

	$(window).scroll(function(){
		if($(window).scrollTop() <= 1){
			navbar.removeClass('navbar-scroll');
		} else {
			navbar.addClass('navbar-scroll');
		}
	});                               

  $('.main-section .left-section h1').animate({"-webkit-transform" : "translate(50px,100px)"});


})

  
