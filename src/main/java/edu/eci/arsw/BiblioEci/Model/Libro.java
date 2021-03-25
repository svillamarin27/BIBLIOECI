package edu.eci.arsw.BiblioEci.Model;


import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Entity
@Table(name = "libro")
public class Libro {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
	
	@Column(name = "idLibro")
	private int idLibro;
	
	@Column(name = "nombreLibro")
	private String nombreLibro;
	
	@Column(name = "autor")
	private String autor;
	
	@Column(name = "disponible")
	private Boolean disponible;
	
	@Column(name = "categoria")
	private String categoria;
	
	@Column(name = "editorial")
	private String editorial;
	
	@Column(name = "idioma")
	private String idioma;
	
	@Column(name = "tipo")
	private String tipo;
	
	public Libro(int idLibro,String nombreLibro, String autor,Boolean disponible,String categoria,String editorial,String idioma,String tipo) {
		
		this.idLibro=idLibro;
		this.nombreLibro=nombreLibro;
		this.autor=autor;
		this.disponible=disponible;
		this.categoria=categoria;
		this.editorial=editorial;
		this.idioma=idioma;
		this.tipo=tipo;
			
	}
	public Libro() {}
	public int getIdLibro() {
		return idLibro;
	}
	public void setIdLibro(int idLibro) {
		this.idLibro = idLibro;
	}
	public String getNombreLibro() {
		return nombreLibro;
	}
	public void setNombreLibro(String nombreLibro) {
		this.nombreLibro = nombreLibro;
	}
	public String getAutor() {
		return autor;
	}
	public void setAutor(String autor) {
		this.autor = autor;
	}
	public Boolean getDisponible() {
		return disponible;
	}
	public void setDisponible(Boolean disponible) {
		this.disponible = disponible;
	}
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	public String getEditorial() {
		return editorial;
	}
	public void setEditorial(String editorial) {
		this.editorial = editorial;
	}
	public String getIdioma() {
		return idioma;
	}
	public void setIdioma(String idioma) {
		this.idioma = idioma;
	}
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	
}
