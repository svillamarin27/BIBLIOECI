Create table users (
	names varchar(30) not null,
	ages int not null, 
	id serial primary key, 
	celphone varchar(10) not null,
	phone varchar(7) not null,
	adress varchar(20) not null, 
	email varchar(30) not null,
	username varchar(10) UNIQUE not null,
	passwords varchar(10) not null,
	admins boolean not null,
	bookrent boolean not null
);

create table book(
	id serial primary key,
	names varchar(30) not null,
	author varchar(30) not null,
	publications varchar(4) not null,
	resume varchar(500) not null,
	available boolean not null,
	category varchar(30) not null,
	editorial varchar(30) not null,
	languages varchar(30) not null
);