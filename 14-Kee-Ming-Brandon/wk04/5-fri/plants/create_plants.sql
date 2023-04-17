CREATE TABLE plants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    family TEXT,
    light TEXT,
    humidity TEXT,
    image TEXT
);

-- sample seed data
INSERT INTO plants (name, family, light, humidity, image) VALUES ('Alocasia Jacklyn', 'Arums', 'Medium to bright indirect sunlight', '60%', '/images/jacklyn.jpeg');

INSERT INTO plants (name, family, light, humidity, image) VALUES ('Philodendron Verrucosum', 'Arums', 'Moderate indirect sunlight', '70%-80%', '/images/verrucosum.jpeg');

INSERT INTO plants (name, family, light, humidity, image) VALUES ('Alocasia Sinuata', 'Arums', 'Bright indirect sunlight', '60%-80%', '/images/sinuata.jpeg');

INSERT INTO plants (name, family, light, humidity, image) VALUES ('Monstera Deliciosa', 'Arums', 'Bright indirect sunlight', '60%-80%', '/images/deliciosa.jpeg');

INSERT INTO plants (name, family, light, humidity, image) VALUES ('Peperomia Piccolo Banda', 'Piperaceae', 'Medium to bright indirect sunlight', '40%-50%', '/images/piccolo_banda.jpeg');

INSERT INTO plants (name, family, light, humidity, image) VALUES ('Dracaena Trifasciata', 'Asparagus', 'Medium to bright indirect sunlight', '50%', '/images/Trifasciata.webp');