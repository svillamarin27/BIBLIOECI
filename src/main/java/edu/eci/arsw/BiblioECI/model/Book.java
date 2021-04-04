package edu.eci.arsw.BiblioECI.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "book")
public class Book {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "names")
	private String names;
	
	@Column(name = "author")
	private String author;
	
	@Column(name = "publications")
	private String publication;
	
	@Column(name = "resume")
	private String resume;
	
	@Column(name = "available")
	private boolean available;
	
	@Column(name = "category")
	private String category;
	
	@Column(name = "editorial")
	private String editorial;
	
	@Column(name = "languages")
	private String languages;
	
	public Book() {
		super();
	}
	
	public Book(String names, String author, String publication, String resume, boolean available, String category, String editorial,
			String languages) {
		super();
		this.names = names;
		this.author = author;
		this.publication = publication;
		this.resume = resume;
		this.available = available;
		this.category = category;
		this.editorial = editorial;
		this.languages = languages;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNames() {
		return names;
	}

	public void setNames(String names) {
		this.names = names;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}
	
	public String getPublication() {
		return publication;
	}

	public void setPublication(String publication) {
		this.publication = publication;
	}

	public String getResume() {
		return resume;
	}

	public void setResume(String resume) {
		this.resume = resume;
	}

	public boolean isAvailable() {
		return available;
	}

	public void setAvailable(boolean available) {
		this.available = available;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getEditorial() {
		return editorial;
	}

	public void setEditorial(String editorial) {
		this.editorial = editorial;
	}

	public String getLanguages() {
		return languages;
	}

	public void setLanguages(String languages) {
		this.languages = languages;
	}
}