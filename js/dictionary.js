'use strict';
let Dictionary = [] ;


 Dictionary.push (
   "agua" ,	"hoja" ,	"persona" ,"botella","hombre","petroleo","cafetera",
   "lapicera","piso","caramelo","lentejas","plato",
   "carta","letra","playa","castillo","libro","pradera",
   "chocolate","lima","radio","computadora","lima","remate",
   "crema","luz","remera","crema","mapa","rey","debate","mono",
   "rucula","desodorante","monte","servilleta","diario",
   "parlante","teatro","diputado","parlante","tecla",
   "estadista","perfume","templo","gobierno","perro","zapato","percha",
   "abeja","alberca","alegría","altruismo","amistad","amor",
   "anillo","animales","arbol","arco","atomo","autoestima","automovil",
   "avaricia","belleza","bicicleta","boleto","bolsa","cable","calidez",
   "camisa","carne","casa","cerdo","cerveza","cinco","codicia","computadora",
   "cooperar","cuaderno","diez","disco","edificio","Empatia","escritorio",
   "estrella","flecha","gato","gorra","guitarra","honestidad","honorable",
   "honrado","humildad","Idea","iglesia","individualismo","inteligencia",
   "jirafa","juguete","lengua","lentes","letra","libreta","libro",
   "luna","maldad","mesa","moneda","nobleza","oreja","pajaro",
   "palabra","pelota","pensamiento","piano","piedra","pincel",
   "pollo","prepotencia","reflejo","responsabilidad","revista",
   "sencillez","silla","sinceridad","talento","tijeras","torpe",
   "tortuga","ventana","vinoteca","violencia"
 ) ;

Array.prototype.randomValue = function () {
  const value = this[ ( Math.floor ( Math.random() * this.length - 1 ) ) ] ;
  return value ;
};
