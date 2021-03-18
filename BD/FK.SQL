----------------------
----------FK----------
----------------------
ALTER TABLE productos 
ADD CONSTRAINT fk_productos_cartas 
FOREIGN KEY (codigoCarta) 
REFERENCES cartas(codigo);