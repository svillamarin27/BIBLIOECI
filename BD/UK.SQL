----------------------
----------UK----------
----------------------
ALTER TABLE usuario
ADD CONSTRAINT Uk_Usuario_correo
UNIQUE (correo);

ALTER TABLE usuario
ADD CONSTRAINT Uk_Usuario_celular
UNIQUE (celular);