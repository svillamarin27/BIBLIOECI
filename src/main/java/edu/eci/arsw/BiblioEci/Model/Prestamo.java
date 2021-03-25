package edu.eci.arsw.BiblioEci.Model;


import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Entity
@Table(name = "prestamo")
public class Prestamo {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
	
	@Column(name = "disponible")
	private Boolean disponible;
	
	@Column(name = "cantidadDias")
	private int cantidadDias;
	
	@Column(name = "nombreUsuario")
	private String nombreUsuario;

	@Column(name = "idPrestamo")
	private int idPrestamo;
	
	public Prestamo(Boolean disponible,int cantidadDias, String nombreUsuario,int idPrestamo) {
		
		this.disponible=disponible;
		this.cantidadDias=cantidadDias;
		this.nombreUsuario=nombreUsuario;
		this.idPrestamo=idPrestamo;
		
		
	}
	
	
	
	public Prestamo() {}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public Boolean getDisponible() {
		return disponible;
	}



	public void setDisponible(Boolean disponible) {
		this.disponible = disponible;
	}



	public int getCantidadDias() {
		return cantidadDias;
	}



	public void setCantidadDias(int cantidadDias) {
		this.cantidadDias = cantidadDias;
	}



	public String getNombreUsuario() {
		return nombreUsuario;
	}



	public void setNombreUsuario(String nombreUsuario) {
		this.nombreUsuario = nombreUsuario;
	}



	public int getIdPrestamo() {
		return idPrestamo;
	}



	public void setIdPrestamo(int idPrestamo) {
		this.idPrestamo = idPrestamo;
	}

}
