$(document).ready( function() {
let position = $( document ).scrollTop();

if ( position >1) {
	
$('.navbar').removeClass('bg-light');
$('#navbar-brand').removeClass('navbar-brand');
$('#nav-icon').removeClass('nav-icon');
$('#navbar-brand img').attr('src', ' img/logo.png');
$('#nav-search').attr('src', ' img/search.png');
$('#nav-buy').attr('src', ' img/buy.png');
$('#nav-menu').attr('src', ' img/menu.png')
$('.navbar').addClass('navbarScroll');
$('#nav-icon').addClass('nav-iconScroll');
$('#navbar-brand').addClass('navbar-brandScroll');
$('.navbar-light .navbar-nav .nav-link').css('color', '#000000');	
}

}
);



$(document).scroll( function() {
let position = $( document ).scrollTop();

if ( position >1) {
	
$('.navbar').removeClass('bg-light');
$('#navbar-brand').removeClass('navbar-brand');
$('#nav-icon').removeClass('nav-icon');
$('#navbar-brand img').attr('src', ' img/logo1.png');
$('#nav-search').attr('src', ' img/search.png');
$('#nav-buy').attr('src', ' img/buy.png');
$('#nav-menu').attr('src', ' img/menu.png');
$('#navbar-brand').addClass('navbar-brandScroll');
$('#nav-icon').addClass('nav-iconScroll');
$('.navbar').addClass('navbarScroll');
$('.navbar-light .navbar-nav .nav-link').css('color', '#000000');	
}

else {
	$('.navbar').removeClass('navbarScroll');
	$('#navbar-brand').removeClass('navbar-brandScroll');
	$('#nav-icon').removeClass('nav-iconScroll');
	$('#nav-icon').addClass('nav-icon');
	$('#navbar-brand').addClass('navbar-brand');
	$('#nav-search').attr('src', ' img/search-wh.png');
	$('#nav-buy').attr('src', ' img/buy-wh.png');
$('#nav-menu').attr('src', ' img/menu-wh.png');
$('#navbar-brand img').attr('src', ' img/logo1.png');
	$('.navbar').addClass('bg-light' );

$('.navbar-light .navbar-nav .nav-link').css('color', '#ffffff');
}
}
);






$(document).ready( function() {
let position = $( document ).scrollTop();
if ( position >400) {
	$('.scroll-top').css('display', 'block');
}

	
});

$(document).scroll( function() {
let position = $( document ).scrollTop();
if ( position >400) {
	$('.scroll-top').css('display', 'block');
}
else {
	$('.scroll-top').css('display', 'none');
}
	
});






