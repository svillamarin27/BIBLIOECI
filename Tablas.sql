
Create table prestamo (
	idPrestamo number(10) not null,
	idUsuario number(10) not null,
	cantidadDias number(3) not null
);

Create table usuario (
	nombre varchar(30) not null,
	edad number(2) not null, 
	cedula number(10) not null, 
	celular number(10) not null,
	telefono number(7),
	direccion varchar(20) not null, 
	correo varchar(30) not null
);

Create table chat (
	idUsuario number(10) not null,
	persona boolean not null,
	idChat number(10) not null, 
	mensaje varchar(99999) not null
);

Create table cliente (
	cantPrestamo number(5),
	cantMulta number(6),
	idUsuario number(10) not null
);

Create table administrador (
	idUsuario number(10) not null,
	cantRegistro number(10)
);

Create table libro (
	idPrestamo number(10) not null,
	idLibro number(10) not null,
	autor varchar(30) not null, 
	disponible boolean not null, 
	categoria varchar(30) not null,
	editorial varchar(30) not null,
	idioma varchar(15) not null
);

Create table cientifico(
	idLibro number(10) not null,
	volumen number(3)
);

Create table linguistico(
	idLibro number(10) not null,
	parte number(3)
);

Create table literatura(
	idLibro number(10) not null,
	parte number(3)
);

Create table bibliografico(
	idLibro number(10) not null,
	volumen number(3)
);

















