// Muestra y oculta el panel de navegación (modo móvil)
function toggleNav() {
	let header = document.getElementsByTagName('header')[0];
	let button = document.getElementById('nav-button');
	let icon = button.firstChild;
	let nav = document.getElementsByTagName('nav')[0];
	let padding = 10;

	button.classList.toggle('activo');
	
	if (button.classList.contains('activo')) {
		header.style.boxShadow = null;
		nav.style.boxShadow = "var(--shadow-bottom)"
		icon.innerHTML = 'close';
		nav.style.maxHeight = nav.scrollHeight + padding * 2 + 'px';
		nav.style.padding = padding + 'px';
	} else {
		header.style.boxShadow = "var(--shadow-bottom)";
		nav.style.boxShadow = null;
		icon.innerHTML = 'menu';
		nav.style.padding = null;
		nav.style.maxHeight = null;
	}
}