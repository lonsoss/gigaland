
  
  $(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
  var owl = $('.owl-carousel-1');
    owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
  });

  var owl = $('.owl-carousel-2');
    owl.owlCarousel({
    items:5,
    loop:true,
    margin:30,
    autoplay:false,
    autoplayTimeout:2500,
    autoplayHoverPause:true
  });

  var owl = $('.owl-carousel');
  owl.owlCarousel();

  $('.next').click(function() {
    owl.trigger('next.owl.carousel');
  })

  $('.previous').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
  });


  $(".go-top").click(function(){
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


  $(function(){
    loopcounter('countdown1');
    loopcounter('countdown2');
    loopcounter('countdown3');
    loopcounter('countdown4');
  });
  
