$().ready(function () {
	
	//Set classnames for 3 views: collapsed, iconmenu and fullmenu	
	var setWindowWidthClassnames = function() {
		var showFullMenu = function() {
			$('.ex-base-level')
				.addClass('ex-full-menu')
				.removeClass('ex-icon-menu');
			$('.ex-navigation-left').removeClass('ex-collapsed-menu');
		}
		var showIconMenu = function() {
			$('.ex-base-level')
				.addClass('ex-icon-menu')
				.removeClass('ex-full-menu');
			$('.ex-navigation-left').removeClass('ex-collapsed-menu');
		}
		var showCollapsedMenu = function() {
			$('.ex-navigation-left').addClass('ex-collapsed-menu');
			$('.ex-base-level').removeClass('ex-icon-menu ex-full-menu');
		}
		
		var windowWidth = $(window).width();
		if (windowWidth > 1616) {
			showFullMenu();
		} else if (windowWidth > 753) {
			showIconMenu();
		} else {
			showCollapsedMenu();
		}
	}
	setWindowWidthClassnames();

	//set active classnames on currently hovered item and it's parents
	$('.ex-navigation a').hover(function () {
		$('.ex-navigation li').removeClass('active');
		$(this).parents('li').addClass('active');
		$(this).click(function () {
			$('.ex-navigation li').removeClass('active');
			$(this).parents('li').addClass('active');
		});
	});

	var openCollapsedMenuOnHovering = function() {
		$('.ex-collapsed-menu').hover(function () {
			$(this).toggleClass('active');
			$(this).click(function () {
				$(this).addClass('active');
			});
		});
	}
	openCollapsedMenuOnHovering();	

	$('.container, .navbar').hover(function () {
		$('.ex-navigation li.ex-item').removeClass('active');
		$(this).click(function () {
			$('.ex-navigation li.ex-item').removeClass('active');
		});
	});
	
	//scroll behaviour
	$('.ex-navigation-left').hover(function () {
		var windowHeight = $(window).height();
		var footerMenu = $('ul.ex-bottom-menu').height();
		var navMenu = windowHeight - (footerMenu + 96);
		
		$('.ex-navigation ul.ex-menu:first-child').scroll(function () {
			if ($('.ex-navigation ul.ex-menu .ex-item:first-child').offset().top <= 96) {
				$('.ex-scroll-top').css('display', 'block');
				$('.ex-navigation ul.ex-menu:first-child').css('height', navMenu - 32);
			}
			if ($('.ex-navigation ul.ex-menu .ex-item:first-child').offset().top > 96) {
				$('.ex-scroll-top').css('display', 'none');
				$('.ex-navigation ul.ex-menu:first-child').css('height', navMenu);
			}
		});
	});
	
	var offsetTopNav = $('.ex-navigation ul.ex-menu li.ex-item:last-child').offset().top + 64;
	var offsetTopFixed = $('.ex-menu.ex-bottom-menu').offset().top;
	if (offsetTopNav <= offsetTopFixed) {
		$('.ex-bottom-menu .arrow').hide();
	}

	//top arrow on click function to scroll to top
	$('.ex-icon-arrow').click(function () {
		$('.ex-navigation ul.ex-menu:first-child').scrollTop(0);
	});

	//bottom arrow on click function to scroll to bottom
	$('.ex-bottom-menu .arrow').click(function () {
		$('.ex-navigation ul.ex-menu:first-child').scrollTop($('.ex-navigation ul.ex-menu:first-child').height());
	});
	
	var calculatePositionBottomMenu = function(){
		var heightNavigationLeft  = $('.ex-navigation-left').outerHeight(true);
		var heightBottomMenu = $('.ex-bottom-menu').outerHeight(true);
		var heightBottomScroll = $('.ex-icon-arrow-up').outerHeight(true);
		var newHeightTopMenu  = heightNavigationLeft - heightBottomMenu - heightBottomScroll;
		$('.ex-top-menu').css('height', newHeightTopMenu);
		$('.ex-collapsed-menu .ex-top-menu').css('height', '');	
	}
	calculatePositionBottomMenu();

	$("#BackToTop").click(function () {
		$("html, body").animate({scrollTop: 0}, 1000);
	});

	$(window).resize(function () {
		setWindowWidthClassnames();
		calculatePositionBottomMenu();
		openCollapsedMenuOnHovering();
	});
	
});