function faseDos()
{
/*Sabent que l’any 1948 es un any de traspàs:
 * Creeu una constant amb el valor de l’any (1948).
 * Creeu una variable que guardi cada quan hi ha un any de traspàs.
 * Calculeu quants anys de traspàs hi ha entre 1948 i el vostre any de naixement i emmagatzemeu el valor resultant en una variable.
 * Mostreu per pantalla el resultat del càlcul.*/

	const any = 1948;
	var traspas = 4;
	var naiximent = 1981;
	var resultado = Math.floor((naiximent - any) / traspas);

	document.getElementById("parrafo").innerHTML = "Exiten " + resultado + " años bisiestos entre 1948 y mi año de nacimiento " + naiximent;

}