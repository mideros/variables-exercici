
public class FaseDos {

	

	public static void main(String[] args) {
	/*Sabent que l�any 1948 es un any de trasp�s:
	 * Creeu una constant amb el valor de l�any (1948).
	 * Creeu una variable que guardi cada quan hi ha un any de trasp�s.
	 * Calculeu quants anys de trasp�s hi ha entre 1948 i el vostre any de naixement i emmagatzemeu el valor resultant en una variable.
	 * Mostreu per pantalla el resultat del c�lcul.*/
		
		final int any=1948;
		int traspas= 4;
		int naiximent=1981;
		int resultado= (naiximent-any)/traspas; 

		System.out.println("Exiten "+ resultado + " a�os bisiestos entre 1948 y mi a�o de nacimiento " + naiximent );
	}

}
