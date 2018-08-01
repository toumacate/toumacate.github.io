$('document').ready(function(){
	
	//-- scrollTop --//
	var body = $('html, body');
	var mainNavLi = $('.main-nav li');
	var asideNavLi = $('.aside-nav li');
	var asideNav = $('.aside-nav');

	mainNavLi.eq(2).on('click', function(){
		toSectionNews();
	});

	asideNavLi.eq(0).on('click', function(){
		toSectionNews();
	});

	mainNavLi.eq(1).on('click', function(){
		toSectionPlaces();
	});

	asideNavLi.eq(1).on('click', function(){
		toSectionPlaces();
	});

	mainNavLi.eq(0).on('click', function(){
		toSectionForm();
	});

	asideNavLi.eq(2).on('click', function(){
		toSectionForm();
	});

	$('.back-to-top').on('click',function(){
		body.animate({
			scrollTop: 0
		},1000);
	});

	//-- animation --//
	$('h1').fadeIn(2000);

	$(window).on('scroll',function(){
		var news = $('.section-news').offset().top-100;

		if ($(window).scrollTop() >= news ){
			$('.box-news').addClass('animated fadeInLeft');
		}
	});

	//-- slideshow --//
	var slideUl = $('.slideshow').find('ul');
	var	slideLi = slideUl.find('li');
	var	slideLiFirst = slideUl.find('li:first');


	slideLi.css({display:'block', opacity:'0', zIndex:'99'});
	slideUl.find('li:first').css({opacity:'1', zIndex:'100'});

	setInterval(function(){
		slideUl.find('li:first').animate({opacity:'0'},1000).
		next('li').css({zIndex:'100'}).animate({opacity:'1'},1000).
		end().appendTo(slideUl).css({zIndex:'99'});
	},3000);

	$(window).on('resize',function(){
		areaHeight();
	});

	areaHeight();

	//-- form --//
	$('#submit').on('click',function(){
		var name = $('#name').val();
		var email = $('#email').val();

		if(name.length != 0 && email.length != 0 && $('#sex :selected').val() == 'male'){
			alert(name+" 先生您好,優惠通知會不定期寄給您~");
		} 
		if(name.length != 0 && email.length != 0 && $('#sex :selected').val() == 'female'){
			alert(name+" 小姐您好,優惠通知會不定期寄給您~");
		}
	});

	//-- aside-nav --//
	$('.btn-nav').on('click', function(){
		
		asideNav.toggleClass('open');

		if(asideNav.hasClass('open')) {
			asideNav.stop(true).animate({
				right: 0
			},300);
		} else {
			asideNav.stop(true).animate({
				right: '-100px'
			},300);
		}
	});

	$(window).resize(function(){
		var maxWidth = $(window).width();

		if(maxWidth >= 768) {
			asideNav.hide();
		} else {
			asideNav.show();
		}
	});

	//-- function --//
	function toSectionNews() {
		body.animate({
			scrollTop: $('.section-news').offset().top
		},600);
	} 

	function toSectionPlaces() {
		body.animate({
			scrollTop: $('.section-places').offset().top
		},1000);
	}

	function toSectionForm() {
		body.animate({
			scrollTop: $('.section-form').offset().top
		},1000);
	}
	
	function areaHeight() {
		var imgHeight = slideLi.find('img').height();

		slideLi.css({height:imgHeight});

		$('.section-places').css({paddingBottom:(imgHeight+65)});
	}
});
