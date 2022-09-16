if (window.innerWidth < 768)
{
	[].slice.call(document.querySelectorAll('[data-bss-disabled-mobile]')).forEach(function (elem)
	{
		elem.removeAttribute('data-bss-hover-animate');
		elem.classList.remove('animated');
		elem.removeAttribute('data-aos');
	});
}

document.addEventListener('DOMContentLoaded', function() { AOS.init(); }, false);