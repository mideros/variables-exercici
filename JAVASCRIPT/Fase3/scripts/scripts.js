function faseTres()
{
/* Partint de l’any 1948 heu de fer un bucle for i mostrar els anys de traspàs fins arriba al vostre any de naixement.
	ATENCIO! Haureu de canviar el tipus de variable de l’any 1948 per poder modificar-la.
	Creeu una variable bool que sera certa si l’any de naixement és de traspàs o falsa si no ho és.(0,75 punts)
	En cas de que la variable bool sigui certa, heu de mostrar per consola una frase on ho digui, en cas de ser falsa mostrareu la frase pertinent.
	Creeu dues variables string per guardar les frases. (1,5 punts)*/
	
	var any = 1948;
	var naixement = 1981;
	var traspas = 4;
	var b = false;
	var frase1 = "El año de nacimiento si es de traspaso";
	var frase2 = "El año de nacimiento no es de traspaso";
	var res="";

	for (var i = any; i <= naixement; i += traspas)
	{
		res=res +"<p>"+"El año "+ i +" fue bisiesto"+"</p>"; 
		document.getElementById("lista").innerHTML=res;
		console.log(i);
	}

	if ((naixement % 4 == 0) && ((naixement % 100 != 0) || (naixement % 400 == 0))) {
		b = true;
	} else {
		b = false;
	}

	if (b == true) {
		document.getElementById("parrafo2").innerHTML =frase1;
	} else {
		document.getElementById("parrafo2").innerHTML =frase2;
	}
}