package edu.eci.arsw.BiblioECI.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {
	
	@Column(name = "names")
	private String name;
	
	@Column(name = "ages")
	private int age;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "celphone")
	private String celphone;
	
	@Column(name = "phone")
	private String phone;
	
	@Column(name = "adress")
	private String adress;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "username")
	private String username;
	
	@Column(name = "passwords")
	private String passwords;
	
	public User() {
		super();
	}

	public User(String name, int age, String celphone, String phone, String adress, String email, String username, String passwords) {
		super();
		this.name = name;
		this.age = age;
		this.celphone = celphone;
		this.phone = phone;
		this.adress = adress;
		this.email = email;
		this.username = username;
		this.passwords = passwords;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public long getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCelphone() {
		return celphone;
	}
	public void setCelphone(String celphone) {
		this.celphone = celphone;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAdress() {
		return adress;
	}
	public void setAdress(String adress) {
		this.adress = adress;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return passwords;
	}

	public void setPassword(String passwords) {
		this.passwords = passwords;
	}
}
