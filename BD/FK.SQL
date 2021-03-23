----------------------
----------FK----------
----------------------
ALTER TABLE usuario 
ADD CONSTRAINT fk_usuario_chat 
FOREIGN KEY (id) 
REFERENCES chat(idUsuario);

ALTER TABLE usuario 
ADD CONSTRAINT fk_usuario_cliente
FOREIGN KEY (id) 
REFERENCES cliente(idUsuario);

ALTER TABLE usuario 
ADD CONSTRAINT fk_usuario_administrador
FOREIGN KEY (id) 
REFERENCES administrador(idUsuario);


ALTER TABLE usuario 
ADD CONSTRAINT fk_usuario_prestamo
FOREIGN KEY (id) 
REFERENCES prestamo(idUsuario);

ALTER TABLE prestamo
ADD CONSTRAINT fk_prestamo_libro
FOREIGN KEY (idPrestamo) 
REFERENCES libro(idPrestamo);


