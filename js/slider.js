$(document).ready(function() {
    $('#slider .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items: 1,
		autoplay:true,
    })
});
$(document).ready(function() {
    $('#slider1 .owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        items: 3,
		autoplay:false,
		responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },            
        991:{
            items:3
        }
       
    }
})
});
$('#recipeCarousel').carousel({
  interval: 10000
})

$('.carousel .carousel-item').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});
$('#recipeCarousel1').carousel({
  interval: 10000
})

$('.carousel .carousel-item').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});
$(window).scroll(function(){
		if($(window).scrollTop()>100)
		{
			$('#nav').css('position','fixed');
			$('#nav').css('z-index','2000000')
		}
		else
		{
			$('#nav').css('position','initial')
		}
	});
$('#plus').click(function(){
				var soluong=$('#sl').val();
				soluong=parseInt(soluong,10);
				soluong++;
				$('#sl').val(soluong);
				})
$('#minus').click(function(){
				 var soluong=$('#sl').val();
				soluong=parseInt(soluong,10);
				soluong--;
				$('#sl').val(soluong);
	if(soluong<0)
		$('#sl').val(0);
	else
		$('#sl').val(soluong);
				 })