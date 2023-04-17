CREATE TABLE games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    genre TEXT,
    image TEXT
);

--sample seed data
INSERT INTO games (name, genre) VALUES ('Borderlands', 'RPG');
INSERT INTO games (name, genre) VALUES ('Elden Ring', 'RPG');
INSERT INTO games (name, genre) VALUES ('Grounded', 'Survival');
