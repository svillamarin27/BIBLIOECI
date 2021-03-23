--------------------------
----------TABLAS----------
--------------------------
Create table prestamo (
	disponible boolean not null,
	idPrestamo int not null,
	idUsuario int not null,
	cantidadDias int not null
);

Create table usuario (
	nombre varchar(30) not null,
	edad int not null, 
	id int not null, 
	celular int not null,
	telefono int not null,
	direccion varchar(20) not null, 
	correo varchar(30) not null
);

Create table chat (
	bot boolean not null,
	persona boolean not null,
	idChat int not null,
	idUsuario int not null
);

Create table cliente (
	cantPrestamo int not null,
	cantMulta int not null,
	idUsuario int not null
);

Create table administrador (
	idUsuario int not null,
	cantRegistro int,
);

Create table libro (
	idPrestamo int not null,
	udLibro int not null,
	nombreLibro varchar(30) not null,
	autor varchar(30) not null, 
	disponible boolean not null, 
	categoria varchar(30) not null,
	editorial varchar(30) not null,
	idioma varchar(15) not null,
	tipo varchar(30) not null,
	ano int not null,
	descripcion varchar(5000) not null
);
















