$(document).ready(function(){
	var maxWidth = $(window).width();

	//-- aside-nav --//
	var btnNav = $('.btn-nav');
	var asideNav = $('.aside-nav');

	btnNav.on('click', function(){
		asideNav.toggleClass('open');

		if(asideNav.hasClass('open')) {
			asideNav.stop(true).animate({
				top: 60
			},300);
		} else {
			asideNav.stop(true).animate({
				top: '-258px'
			},300);
		}
	});

	$(window).resize(function(){
		maxWidth = $(window).width();

		if(maxWidth >= 768){
			asideNav.hide();
		} else{
			asideNav.show();
		}
	});

	//-- slideshow --//
	var slideUl = $('.slideshow').find('ul');
	var slideLi = slideUl.find('li');

	slideLi.css({display:'block', opacity:'0', zIndex:'99'});

	slideUl.find('li:first').css({opacity:'1', zIndex:'100'});

	setInterval(function(){
		slideUl.find('li:first').animate({opacity:'0'},1000).
		next('li').css({zIndex:'100'}).animate({opacity:'1'},1000).
		end().appendTo(slideUl).css({zIndex:'99'});
	},3000);

	//-- ad --//
	var menuUl = $('.picture-ad').find('ul');
	var menuLi = $('.picture-ad').find('li');
	var menuLiFirst = $('.picture-ad').find('li:first');

	menuLiFirst.css({'backgroundColor': '#fff'});

	menuLi.hover(function(){
		var childPicture = $(this).find('.picture');
		var sibPictures = $(this).siblings().find('.picture');

		childPicture.css({display: 'block', zIndex: '2'});

		sibPictures.each(function(){
			sibPictures.css({display: 'none', zIndex: '1'});
		});
		
		$(this).css({backgroundColor: '#fff'}).
		siblings().css({backgroundColor: '#ccc'});
	});

	//-- ticker --//
	var ticker = $('.news-ticker');
	var content = ticker.find('p');
	var contentFirst = ticker.find('p:first');

	contentFirst.css({top: '57px', display: 'block', opacity: '0'}).
	stop().animate({top: '7px', opacity: '1'}, 500).
	addClass('showlist');

	setInterval(function(){
		var showP = $('.showlist');

		showP.animate({top: '-43px', opacity: '0'},500).
		next().css({top: '57px', display: 'block', opacity: '0'}).animate({top: '7px', opacity: '1'}, 500).addClass('showlist').
		end().appendTo(ticker).removeClass('showlist');
	},3000);

	//-- filter --//
	// var img = $('img-list').find('ul').find('li').find('img');
	var img = $('.img-list').find('img');
	var mask = $('.mask');
	var win = $('.window');
	var close = $('.close');
	var popUp = $('.pop-up');
	var imgPopUp = popUp.find('img');

	if(maxWidth >= 768){
		
	}	

	img.click(function(){
		if(maxWidth >= 768){
			var link = $(this).attr('src');

			mask.css({display: 'block', opacity: '0'}).stop().animate({opacity: '1'});
			win.css({display: 'block', opacity: '0'}).stop().animate({opacity: '1'});
			close.css({display: 'block', opacity: '0'}).stop().animate({opacity: '1'});
			popUp.css({display: 'block', opacity: '0'}).stop().animate({opacity: '1'});

			imgPopUp.attr('src', link);
		}	
	});

	$('.mask, .close').click(function(){
		mask.stop().animate({opacity: '0'},500, function(){$(this).css({display: 'none'})});
		win.stop().animate({opacity: '0'},500, function(){$(this).css({display: 'none'})});
		close.stop().animate({opacity: '0'},500, function(){$(this).css({display: 'none'})});
		popUp.stop().animate({opacity: '0'},500, function(){$(this).css({display: 'none'})});
	});
});