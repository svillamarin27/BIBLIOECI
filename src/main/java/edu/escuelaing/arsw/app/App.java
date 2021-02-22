package edu.escuelaing.arsw.app;
import javax.faces.bean.*;



@ManagedBean(name = "index")
@ApplicationScoped
public class App 
{	
	
    public static void main( String[] args )
    {
        System.out.println( "Bienvenido a BiblioEci" );
    }
}
