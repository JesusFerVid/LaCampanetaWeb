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

// Carga las miniaturas de los paisajes
function loadLandscapes() {
	let container = document.getElementById('landscapes-container');
	let id, src, name, content;
	let xml = new DOMParser().parseFromString(landscapes_xml, 'text/xml');
	let landscapes = xml.getElementsByTagName('landscape');

	for (let landscape of landscapes) {
		id = landscape.getAttribute('id');
		src = landscape.getElementsByTagName('image')[0].innerHTML;
		name = landscape.getElementsByTagName('name')[0].innerHTML;
		content = `
			<article id="${id}" onclick="goToImgDetail(this)">
				<div class="image-wrapper"><img src="${src}" alt="${name}"></div>
				<div class="article-info"><h3 class="article-title">${name}</h3></div>
			</article>
		`;
		container.innerHTML += content;
	}
}

// Nos lleva a la página de detalle de imagen
function goToImgDetail(element) {
	sessionStorage.setItem('id', element.getAttribute('id'));
	window.location.href = 'image-detail.html';
}

// Carga la información de la imagen que queremos ver en la página detalle
function loadImgDetail(){
	let id = sessionStorage.getItem('id');
	let xml = new DOMParser().parseFromString(landscapes_xml, 'text/xml');
	let landscape = xml.getElementById(id);
	
	let name =  landscape.getElementsByTagName('name')[0].innerHTML;
	let src = landscape.getElementsByTagName('image')[0].innerHTML;
	let desc = landscape.getElementsByTagName('desc')[0].innerHTML;

	document.getElementById('name').innerHTML = name;
	document.getElementById('main-image-wrapper').firstChild.setAttribute('src', src);
	document.getElementById('main-image-wrapper').firstChild.setAttribute('alt', name);
	document.getElementById('desc').innerHTML = desc;
}

// Carga las miniaturas de los platos
function loadDishes() {
	let container = document.getElementById('dishes-container');
	let id, name, desc, rating, stars, src, content;
	let xml = new DOMParser().parseFromString(dishes_xml, 'text/xml');
	let dishes = xml.getElementsByTagName('dish');

	for (let dish of dishes) {
		id = dish.getAttribute('id');
		name = dish.getElementsByTagName('name')[0].innerHTML
		desc = dish.getElementsByTagName('desc')[0].innerHTML
		rating = dish.getElementsByTagName('rating')[0].innerHTML
		stars = generateDishStars(rating);
		console.log(stars);
		src = dish.getElementsByTagName('image')[0].innerHTML
		content = `
			<article id="${id}" onclick="goToDishDetail(this)">
				<div class="image-wrapper"><img src="${src}" alt="${name}"></div>
				<div class="article-info">
					<h3 class="article-title">${name}</h3>
					<span class="article-desc">${desc}</span>
					<span class="article-rating with-icon">Valoración: ${stars}</span>
				</div>
			</article>
		`;
		container.innerHTML += content;
	}
}

// Nos lleva a la página de detalle de plato
function goToDishDetail(element) {
	sessionStorage.setItem('id', element.getAttribute('id'));
	window.location.href = 'dish-detail.html';
}

// Carga la información del plato que queremos ver en la página detalle
function loadDishDetail() {
	let id = sessionStorage.getItem('id');
	let xml = new DOMParser().parseFromString(dishes_xml, 'text/xml');
	let dish = xml.getElementById(id);
	
	let src = dish.getElementsByTagName('image')[0].innerHTML;
	let name = dish.getElementsByTagName('name')[0].innerHTML;
	let desc = dish.getElementsByTagName('desc')[0].innerHTML;
	let rating = generateDishStars(dish.getElementsByTagName('rating')[0].innerHTML);
	let ingredients = generateDishIngredients(dish.getElementsByTagName('ingredient'));
	let instructions = generateDishInstructions(dish.getElementsByTagName('p'));
	
	document.getElementById('main-image-wrapper').firstChild.setAttribute('src', src);
	document.getElementById('main-image-wrapper').firstChild.setAttribute('alt', name);
	document.getElementById('name').innerHTML = name;
	document.getElementById('desc').innerHTML = desc;
	document.getElementById('rating').innerHTML = rating;
	document.getElementById('ingredients').innerHTML = ingredients;
	document.getElementById('instructions').innerHTML = instructions;
}

// Devuelve el HTML con el número indicado de estrellas
function generateDishStars(rating) {
	let i, output = "";
	for (i = 0; i < rating; i++ ) {
		output += `<span class="material-icons">star</span>`;
	}
	for (; i < 5; i++ ) {
		output += `<span class="material-icons">star_border</span>`;
	}
	return output;
}

// Devuelve el HTML de los ingredientes
function generateDishIngredients(ingredients) {
	return "TODO";
}

// Devuelve el HTML de las instrucciones
function generateDishInstructions(instructions) {
	return "TODO";
}