
var app = app || {};
let scrollTop, scrollLeft = 0;

app.init = function () {
	app.tab();
	app.anchorLink();
};

app.tab = function () {
	$(document).on("click", ".tab a", function (e) {
		e.preventDefault();
		let target = $(this).attr("href").split('#')[1];

		$(this).parent().addClass("active").siblings().removeClass("active");
		$('[data-id="' + target + '"]').fadeIn(0).siblings().fadeOut(0);
		history.pushState({}, '', '#' + target);
	});

	if (location.hash && $(".tab li a[href='" + location.hash + "']").length) {
		$(".tab li a[href='" + location.hash + "']").trigger("click");

		$('.pagination a.page-numbers').each(function (i, a) {
			$(a).attr('href', $(a).attr('href') + '#' + $(a).parents('.tab-box').attr('data-id'));
		});
	} else {
		$(".tab li:first-child a").trigger("click");
		history.replaceState(null, null, ' ');
	}
}

app.anchorLink = function () {
	$('.anchor-link').click(function () {

		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			let box = document.querySelector('.p-header');
			let snum = document.querySelector('.h_number');

		}
	});


}


$(function () {
	// whenever we hover over a menu item that has a submenu
	$('.parent').on('mouseover', function () {
		var $menuItem = $(this),
			$submenuWrapper = $('> .wrapper', $menuItem);
		// grab the menu item's position relative to its positioned parent
		var menuItemPos = $menuItem.position();
		// place the submenu in the correct position relevant to the menu item
		$submenuWrapper.css({
			top: menuItemPos.top,
			left: menuItemPos.left + Math.round($menuItem.outerWidth() * 1)
		});
	});
});

$(document).ready(function () {

	if ($(".wow").length > 0) {
		var wow = new WOW({
			animateClass: 'animate_animated'
		});
		wow.init();
	}
	$(".ic-down").click(function () {
		$('.level_3').slideToggle();
		$(this).toggleClass('active');
	});
	$(".ic-sidebar").click(function () {
		$(".menu-sidebar").addClass('show');
		$(".bg-black").addClass('show');
	});
	$(".bg-black").click(function () {
		$(".menu-sidebar").removeClass('show');
		$(this).removeClass('show');
	});

	$(".anchor-ttl").click(function () {
		$(".anchor-lst").slideToggle();
		$(this).toggleClass('active')
	});
	$(".btn-more").click(function () {
		$(".anchor-lst").addClass('show');
	});

	$(".bg-close-menu").click(function () {
		$(".p-header__menu").removeClass('show');
		$(".cart-content").removeClass('show');
		$(this).removeClass('show');
	});
	$('.btn-top').click(function () {
		$('html, body').animate({ scrollTop: 0 });
		return false;
	});

	$(".ic_search").click(function () {
		$(".p-header__search").slideToggle();
	});
	$('.ic_lv').on('click', function () {
		$(this).toggleClass('is-active');
		var findElm = $(this).next(".level_3");
		$(findElm).stop().slideToggle();
	});
	app.init();
});
