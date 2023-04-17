CREATE TABLE pokemons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    type TEXT,
    gender TEXT,
    weight FLOAT,
    height FLOAT,
    image TEXT, -- URL for a pokemon photo
    favorite INTEGER -- boolean 0/1
);

--sample seed data
INSERT INTO pokemons (name, type, gender) VALUES ('Pikachu', 'Electric', 'F');
INSERT INTO pokemons (name, type, gender) VALUES ('Eevee', 'Normal', 'M');