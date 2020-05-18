function faseCuatro()
{ 
	/*Creeu una variable on juntareu el nom i els cognoms (tot en una variable) i un altre on 
		 * juntareu la data de naixement separada per “/” (tot en una variable).
		 *  Mostreu per consola les variables del nom complet, la data de naixement i si l’any 
		 *  de naixement es de traspàs o no. 
		 *  Exemple de sortida per consola: 
		 *  El meu nom és Juan Perez Gonzalez
		 *  Vaig néixer el 01/01/1979
		 *  El meu any de naixement és de traspàs.*/

	var nombre = "Yohanna";
	var apellido1 = "Mideros";
	var apellido2 = "Giraldo";
	var nCompleto = nombre + " " + apellido1 + " " + apellido2;
	var dia = 12;
	var mes = 9;
	var any = 1981;
	var fecha = dia + "/" + mes + "/" + any;
	var b = false;

	if ((any % 4 == 0) && ((any % 100 != 0) || (any % 400 == 0))) {
		b = true;
	} else {
		b = false;
	}

	console.log("El meu nom és " + nCompleto);
	console.log("Vaig néixer el " + fecha);

	if (b == true) {
		console.log("El meu any de naixement és de traspàs.");
	} else {
		console.log("El meu any de naixement no és de traspàs.");
	}
}