// Muestra y oculta el panel de navegación (modo móvil)
function toggleNav() {
	let header = document.getElementsByTagName('header')[0];
	let button = document.getElementById('nav-button');
	let icon = button.firstChild;
	let nav = document.getElementsByTagName('nav')[0];
	let padding = 5; // padding de nav

	button.classList.toggle('active');
	
	if (button.classList.contains('active')) {
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

// Nos lleva a la página de detalle de imagen
function goToImgDetail(element) {
	sessionStorage.imgSrc = element.getElementsByTagName('img')[0].attributes.src.value;
	sessionStorage.imgAlt = element.getElementsByTagName('img')[0].attributes.alt.value;
	window.location.href = 'image-detail.html';
}

// Carga la imagen que queremos ver en la página detalle
function loadImgDetail(){
	let title = document.getElementById('image-title');
	let img = document.getElementById('main-image-wrapper').firstChild;
	console.log('Image details');
	title.innerHTML = sessionStorage.imgAlt;
	img.attributes.src.value = sessionStorage.imgSrc;
	img.attributes.alt.value = sessionStorage.imgAlt;
}