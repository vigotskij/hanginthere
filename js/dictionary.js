'use strict';
let Dictionary = [] ;


 Dictionary.push ( "agua" ,	"hojas" ,	"persona" ,"botella","hombre","petroleo","cafetera",
   "lapicera","piso","caramelos","lentejas","plato",
   "cartas","letra","playa","castillo","libros","pradera",
   "chocolate","lima","radio","computadora","lima","remate",
   "crema","luz","remera","crema","mapa","rey","debate","mono",
   "rucula","desodorante","montes","servilleta","diarios",
   "parlante","teatro","diputado","parlante","tecla",
   "estadista","perfume","templo","gobierno","perro","zapato","percha" ) ;

function randomWord()
{
       const word = Dictionary[ Math.floor( Math.random() * ( Dictionary.length - 1 ) ) ] ;

       return word ;
}

Array.prototype.randomWord = function () {
  randomWord() ;
};
