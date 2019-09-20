DROP TABLE IF EXISTS products;

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name TEXT,
    product_price TEXT,
    image_url TEXT
);


INSERT INTO products (product_name, product_price, image_url) 
VALUES ('Artemus', '$7.43', 'http://dummyimage.com/105x220.png/cc0000/ffffff'),
('Colette', '$4.39', 'http://dummyimage.com/184x162.png/ff4444/ffffff'),
('Regine', '$8.28', 'http://dummyimage.com/179x206.jpg/5fa2dd/ffffff'),
('Tana', '$6.01', 'http://dummyimage.com/223x190.png/5fa2dd/ffffff'),
('Teena', '$4.00', 'http://dummyimage.com/230x103.jpg/cc0000/ffffff');