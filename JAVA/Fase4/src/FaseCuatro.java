
public class FaseCuatro {

	public static void main(String[] args) {
		/*Creeu una variable on juntareu el nom i els cognoms (tot en una variable) i un altre on 
		 * juntareu la data de naixement separada per “/” (tot en una variable).
		 *  Mostreu per consola les variables del nom complet, la data de naixement i si l’any 
		 *  de naixement es de traspàs o no. 
		 *  Exemple de sortida per consola: 
		 *  El meu nom és Juan Perez Gonzalez
		 *  Vaig néixer el 01/01/1979
		 *  El meu any de naixement és de traspàs.*/
		
		String nombre="Yohanna";
		String apellido1="Mideros";
		String apellido2="Giraldo";
		String nCompleto=nombre+" "+ apellido1+" "+apellido2;
		 int dia=12;
		 int mes=9;
		 int any=1981;
		 String fecha= dia+"/"+ mes+"/"+any;
		 boolean b=false;
		
		if ((any % 4 == 0) && ((any % 100 != 0) || (any % 400 == 0))) 
		{
			b=true;
		}else {
			b=false;
		}
		
		System.out.println("El meu nom és " + nCompleto);
		System.out.println("Vaig néixer el " + fecha);
		
		if (b==true){
			System.out.println("El meu any de naixement és de traspàs.");
		}else{
			System.out.println("El meu any de naixement no és de traspàs.");
		}
	}
}
