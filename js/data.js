const landscapes_xml = `
	<landscapes>
		<landscape id='landscape_1'>			
			<name>Pava real</name>
			<desc>Aquí tenemos a la hembra de posiblemente la mascota del pueblo. Bueno, no es que haya tantos, pero claro, vivo al lado de una concentración importante de ellos.</desc>
			<image>img/landscapes/000001.jpg</image>
		</landscape>
		<landscape id='landscape_2'>
			<name>Verde que te quiero</name>
			<desc>En realidad, para ser de campo, el color verde no me gusta... pero tenemos muchísimo por La Campaneta, eso no se niega.</desc>
			<image>img/landscapes/000002.jpg</image>
		</landscape>
		<landscape id='landscape_3'>
			<name>Pavo real</name>
			<desc>Es precioso, las cosas como son. Sabe combinar colores. Transmite tranquilidad así tan relajado. A la gente le impresiona su canto característico. Pero os reto a pasar el verano viviendo al lado de unos 10 de estos. Suerte a la hora de dormir.</desc>
			<image>img/landscapes/000003.jpg</image>
		</landscape>
		<landscape id='landscape_4'>
			<name>Pavoneandose</name>
			<desc>Prometo que es la última imagen de pavos reales. Pero no poner uno de los rituales más famosos de esta criatura me parecía un crimen. Aquí tenéis un ejemplo de como ligar correctamente. No veréis a este animal montando broncas en una discoteca.</desc>
			<image>img/landscapes/000004.jpg</image>
		</landscape>
		<landscape id='landscape_5'>
			<name>Avioncitos</name>
			<desc>Se dice que La Campaneta es un pueblo tan bonito que cuando los aviones pasan, los pilotos se quedan distraídos y pierden su rumbo.</desc>
			<image>img/landscapes/000005.jpg</image>
		</landscape>
		<landscape id='landscape_6'>
			<name>Puesta de Sol</name>
			<desc>La cámara de un móvil antiguo no da para captar el momento en toda su gloria, pero sí, tenemos puestas de Sol de esas de película, con el Sol escondiéndose entre las montañas.</desc>
			<image>img/landscapes/000006.jpg</image>
		</landscape>
		<landscape id='landscape_7'>
			<name>Senda Millanares</name>
			<desc>Muy buen lugar para ir a pasear.</desc>
			<image>img/landscapes/000007.jpg</image>
		</landscape>
		<landscape id='landscape_8'>
			<name>Mota del río</name>
			<desc>Tenemos el río Segura como frontera natural con Molins. Esta foto está tomada en uno de sus mejores momentos, después de haber contado con lluvias generosas, por fin pudimos verlo casi lleno.</desc>
			<image>img/landscapes/000008.jpg</image>
		</landscape>
		<landscape id='landscape_9'>
			<name>Pueblos siendo pueblos</name>
			<desc>Un tractor labrando, concretamente el bancal de mi casa. Y las garzas siempre cerca, a ver si comen algo.</desc>
			<image>img/landscapes/000009.jpg</image>
		</landscape>
		<landscape id='landscape_10'>
			<name>Mi punto de vista</name>
			<desc>Esta es una foto tomada literalmente desde mi ventana.</desc>
			<image>img/landscapes/000010.jpg</image>
		</landscape>
	</landscapes>
`

const dishes_xml = `
	<dishes>
		<dish id="dish_1">
			<name>Arroz con costra</name>
			<desc>Un plato delicioso, típico de la zona. Algunos lo llaman arroz tapado, otros tortilla de arroz... yo lo llamo delicia.</desc>
			<rating>5</rating>
			<recipe>
				<ingredients>
					<ingredient>Arroz con conejo</ingredient>
					<ingredient>Longaniza</ingredient>
					<ingredient>Blanco</ingredient>
					<ingredient>Huevos</ingredient>
					<ingredient>Paciencia</ingredient>
				</ingredients>
				<instructions>
					<p>Primero, debemos empezar a cocinar arroz con conejo, preferiblemente en un recipiente considerablemente hondo.</p>
					<p>Preparar mientras (o antes) algunos trozos de longaniza y blanco. Al momento de echar la carne, también echaremos el embutido.</p>
					<p>En un momento dado, tendremos un plato de arroz con conejo con extras. Es el momento de batir los huevos, echarlos encima y meter al horno.</p>
					<p>Unos minutos y tendremos nuestra tortilla de arroz en todo su esplendor.</p>
				</instructions>
			</recipe>
			<image>img/dishes/000001.jpg</image>
		</dish>
		<dish id="dish_2">
			<name>Buñuelos de calabaza</name>
			<desc>Todos dicen que van a comer sólo uno o dos. Al final, no bajan de diez...</desc>
			<rating>4</rating>
			<recipe>
				<ingredients>
					<ingredient>250 gramos de calabaza</ingredient>
					<ingredient>160 gramos de harina de trigo</ingredient>
					<ingredient>40 gramos de azúcar moreno o azúcar blanca</ingredient>
					<ingredient>1 huevo</ingredient>
					<ingredient>15 g de levadura química (1 sobre)</ingredient>
					<ingredient>Aceite de girasol para freír</ingredient>
					<ingredient>Azúcar y canela para rebozar los buñuelos</ingredient>
					<ingredient>1 pizca de sal</ingredient>
				</ingredients>
				<instructions>
					<p>Comenzaremos con la cocción de la calabaza. Pelamos la calabaza y quitamos las pepitas. La cocemos en agua durante unos 25 minutos hasta que esté muy blanda y podamos hacer un puré de calabaza.</p>
					<p>Una vez cocida la calabaza, trituramos junto con las ralladuras de naranja y de limón y dejamos enfriar un poco.</p>
					<p>El siguiente paso es agregar el azúcar. Seguimos triturando. Si deseamos hacer esto a mano no hay problema, yo la verdad que siempre que lo he hecho he usado la batidora.</p>
					<p>Ahora es momento de agregar la harina y la levadura tamizadas. Lo de tamizar la harina es por si lo hacemos a mano, si usamos la batidora de mano no creo que haya problemas en encontrarnos grumos.</p>
					<p>Continuamos con la canela y el huevo. Seguimos batiendo hasta obtener una masa espesa. Dejamos reposar unos minutos.</p>
					<p>Calentamos abundante aceite de girasol en una sartén. Para los postres es mejor usar aceite de girasol en vez de aceite de oliva ya que este mantiene mejor las altas temperaturas y además no le aporta nada de sabor.</p>
					<p>Con el aceite caliente, nos disponemos a freír los buñuelos. Dejamos caer una pequeña cantidad de masa en el aceite. No os preocupéis porque ellos solos forman los buñuelos y en la mayoría de ocasiones se giran solos.</p>
					<p>Una vez dorados, pasamos a un papel absorbente y seguidamente rebozamos en azúcar y canela.</p>
				</instructions>
			</recipe>
			<image>img/dishes/000002.jpg</image>
		</dish>
	</dishes>
`;