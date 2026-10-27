export const waLink =
  'https://wa.me/5491147460000?text=' +
  encodeURIComponent('Hola, quiero consultar disponibilidad en Salón Alba para esta fecha: ');

export const nav = [
  { href: '#salon', label: 'El salón' },
  { href: '#galeria', label: 'Galería' },
  { href: '#contacto', label: 'Contacto' },
];

export const eventos = [
  { n: '01', nombre: 'Cumpleaños infantiles', linea: 'Rincón de juegos aparte: los chicos corren, los grandes charlan.', img: '/img/ev-infantiles.jpg', alt: 'Cielo abierto con nubes sobre un cerro', bg: '#d3e8d6' },
  { n: '02', nombre: '15 años', linea: 'Pista chica, cabina de DJ y camarín para el cambio de vestido.', img: '/img/ev-15.jpg', alt: 'Zapatos blancos de taco sobre fondo rojo', bg: '#f4c9d6' },
  { n: '03', nombre: 'Casamientos', linea: 'Ceremonia en el patio y cena en el salón, para hasta 50 invitados.', img: '/img/ev-casamientos.jpg', alt: 'Mujer con flores en un campo al atardecer', bg: '#ebd9cc' },
  { n: '04', nombre: 'Bautismos y comuniones', linea: 'Almuerzos de mediodía con menú para todas las edades.', img: '/img/ev-bautismos.jpg', alt: 'Mesa larga de madera con café en un salón luminoso', bg: '#fbebb8' },
  { n: '05', nombre: 'Corporativos', linea: 'Proyector y sonido de día, barra abierta para el brindis de noche.', img: '/img/ev-corporativos.jpg', alt: 'Tenedores sobre fondo oscuro', bg: '#e6ddd6' },
];

export const numeros = [
  { valor: '50', label: 'Invitados sentados', nota: '70 en formato cóctel', bg: '#c2d076', fg: '#001514' },
  { valor: '110', label: 'Metros cuadrados', nota: 'Salón, patio y cocina', bg: '#fbebb8', fg: '#241B16' },
  { valor: '3', label: 'Ambientes', nota: 'Salón, patio y cocina', bg: '#d6ebdc', fg: '#241B16' },
  { valor: '4', label: 'Cuadras de la estación', nota: 'Tren Mitre, ramal Tigre', bg: '#e9efc0', fg: '#241B16' },
];

export const incluye = [
  { titulo: 'Catering', texto: 'Cocina propia: recepción, principal, postre y mesa dulce. Menú celíaco y vegetariano sin costo extra.', dot: '#f4b8cb' },
  { titulo: 'Ambientación', texto: 'Mantelería, vajilla, centros de mesa y armado. Tres estilos para elegir, o lo definimos juntos.', dot: '#fbebb8' },
  { titulo: 'DJ e iluminación', texto: 'DJ toda la fiesta, luces de pista y luz cálida regulable para la cena.', dot: '#d6ebdc' },
  { titulo: 'Animación infantil', texto: 'Un animador cada 15 chicos, con actividades según la edad.', dot: '#f4c9d6' },
  { titulo: 'Coordinación', texto: 'Una coordinadora arma el cronograma con vos y está en el salón de principio a fin.', dot: '#c2d076' },
];

export const pasos = [
  { n: '1', titulo: 'Consultá la fecha', texto: 'Por formulario o WhatsApp. Te respondemos en el día con disponibilidad y presupuesto base.', bg: '#e9efc0' },
  { n: '2', titulo: 'Visitá el salón', texto: 'De lunes a sábado. Recorrés los espacios y, si querés, probás el menú.', bg: '#fbebb8' },
  { n: '3', titulo: 'Reservá con seña', texto: 'Con el 30% la fecha es tuya. El resto, en cuotas hasta 15 días antes.', bg: '#d6ebdc' },
  { n: '4', titulo: 'Disfrutá tu evento', texto: 'Cerramos el cronograma una semana antes. Ese día, vos solo llegás.', bg: '#c2d076' },
];

// Sample quotes for the pitch landing; replace with real reviews before going live.
export const testimonios = [
  { cita: 'Llegamos a las nueve y estaba todo armado. Lo único que hicimos fue bailar.', autor: 'Nombre Apellido', evento: 'Casamiento, marzo', bg: '#e9efc0' },
  { cita: 'Los chicos estuvieron tres horas en los juegos y nosotros pudimos comer tranquilos.', autor: 'Nombre Apellido', evento: 'Cumpleaños de 6, junio', bg: '#d6ebdc' },
  { cita: 'La coordinadora se acordaba de cada detalle que habíamos hablado en la visita.', autor: 'Nombre Apellido', evento: '15 años, septiembre', bg: '#fbebb8' },
];

export const faqs = [
  ['¿En qué horarios se hacen los eventos?', 'De noche, de 21 a 5 h. De día, de 12 a 18 h. Podés sumar una hora extra si la pedís con la reserva.'],
  ['¿Cuántas personas entran?', 'Hasta 50 sentadas con pista de baile, o 70 en formato cóctel. Para infantiles recomendamos hasta 25 chicos.'],
  ['¿Puedo llevar la torta o la bebida?', 'La torta, sí: la recibimos el mismo día y la guardamos en frío. La bebida está incluida en el menú; si querés traer vinos o espumantes propios, se cobra descorche por botella.'],
  ['¿Cuánto es la seña y qué pasa si cancelo?', 'Reservás con el 30% del total. Si cancelás con más de 90 días de anticipación, la seña queda como crédito por 12 meses para otra fecha.'],
  ['¿El salón es accesible?', 'Todo está en planta baja: acceso sin escalones desde la vereda y baño adaptado.'],
  ['¿Hay estacionamiento?', 'No tenemos cochera propia, pero hay una playa de estacionamiento a una cuadra y lugar sobre la calle. Si venís en tren, la estación queda a 4 cuadras.'],
] as const;

// Stock photos (Lorem Picsum / Unsplash); swap for the venue's own pictures when available.
const g = (n: number, alt: string, ratio: string) => ({ src: `/img/g${String(n).padStart(2, '0')}.jpg`, alt, ratio });

export const galeriaRows = [
  [g(1, 'Atardecer entre montañas', '4/3'), g(2, 'Mujer de perfil a contraluz', '3/4'), g(3, 'Persona mirando el horizonte', '1/1'), g(4, 'Casas blancas sobre el mar', '4/3'), g(5, 'Taza con sellos rojos', '1/1'), g(6, 'Musgo dorado al sol', '4/3')],
  [g(7, 'Gotas de agua sobre una superficie', '1/1'), g(8, 'Flor espinosa con luz cálida', '4/3'), g(9, 'Brote verde sobre madera', '3/4'), g(10, 'Ramas con flores contra el cielo', '4/3'), g(11, 'Cascada entre árboles', '1/1'), g(12, 'Nube sobre un cielo oscuro', '4/3')],
  [g(13, 'Camino entre pinos y pasto', '4/3'), g(14, 'Tocadiscos en primer plano', '1/1'), g(15, 'Taza de café sobre fondo rojo', '3/4'), g(16, 'Playa con rocas', '4/3'), g(17, 'Desierto con dunas', '1/1'), g(18, 'Costa con pinos', '4/3')],
];
