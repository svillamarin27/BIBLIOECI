
Create table prestamo (
	idPrestamo int not null,
	idUsuario int not null,
	cantidadDias int not null
);

Create table usuario (
	nombre varchar(30) not null,
	edad int not null, 
	cedula int not null, 
	celular int not null,
	telefono int not null,
	direccion varchar(20) not null, 
	correo varchar(30) not null
);

Create table chat (
	idUsuario int not null,
	persona boolean not null,
	idChat int not null, 
	mensaje varchar(99999) not null
);

Create table cliente (
	cantPrestamo int not null,
	cantMulta int not null,
	idUsuario int not null
);

Create table administrador (
	idUsuario int not null,
	cantRegistro int not null
);

Create table libro (
	idPrestamo int not null,
	idLibro int not null,
	autor varchar(30) not null, 
	disponible boolean not null, 
	categoria varchar(30) not null,
	editorial varchar(30) not null,
	idioma varchar(15) not null
);

Create table cientifico(
	idLibro int not null,
	volumen int not null
);

Create table linguistico(
	idLibro int not null,
	parte int not null
);

Create table literatura(
	idLibro int not null,
	parte int not null
);

Create table bibliografico(
	idLibro int not null,
	volumen int not null
);


alter table "prestamo" add constraint PK_PRESTAMO primary key(idPrestamo);
alter table "usuario" add constraint PK_USUARIO primary key(cedula);
alter table "chat" add constraint PK_CHAT primary key(idChat);
alter table "cliente" add constraint PK_CLIENTE primary key(idUsuario);
alter table "administrador" add constraint PK_ADMINISTRADOR primary key(idUsuario);
alter table "libro" add constraint PK_LIBRO primary key(idLibro);
alter table "cientifico" add constraint PK_CIENTIFICO primary key(idLibro);
alter table "linguistico" add constraint PK_LINGUISTICO primary key(idLibro);
alter table "literatura" add constraint PK_LITERATURA primary key(idLibro);
alter table "bibliografico" add constraint PK_BIBLIOGRAFICO primary key(idLibro);














