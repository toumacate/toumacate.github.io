$(document).ready(function(){
	//carousel
	$('.carousel').carousel({
      interval: 3000,
      pause: 'hover'
    });

    //lightbox
    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
      event.preventDefault();
      $(this).ekkoLightbox();
    });

});